# Create React App
Cada vez que creamos una nueva app con `create-react-app` viene con código predefinido en el `index.js` y un `serviceWorker.unregister();`.
<br />
Para habilitar la PWA tenemos que registrarlo con `register()`.
<img src="/01.png" width="400">

# Habilitar [Workbox](https://developers.google.com/web/tools/workbox)
En la terminal instalamos una librería, `npm install react-app-rewired` lo que nos permitirá reescribir la configuración de webpack sin necesidad de `eject` nuestra app.
<br />
Cambia la versión del `package.json` a 1.0.0. También cambia los scripts `start` y `build` a que usen la librería instalada (solo esos 2).
<img src="/03.png" width="400">

Crea un nuevo archivo `config-overrides.js` en la raíz del proyecto con el siguiente código:
```
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = function override(config) {
  config.plugins = config.plugins.map((plugin) => {
    if (plugin.constructor.name === 'GenerateSW') {
      return new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src/sw.js',
        swDest: 'service-worker.js'
      });
    }

    return plugin;
  });

  return config;
};
```
<img src="/02.png" width="200">

Crea un service worker `sw.js` dentro del folder `src` con lo siguiente:
```
self.skipWaiting()

workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cdn-cache'
  })
)

workbox.routing.registerRoute(
  new RegExp('.*\.json'),
  new workbox.strategies.NetworkFirst()
)

self.addEventListener('fetch', event => {
  if(event.request.method === "POST" || event.request.method === "DELETE") {
    event.respondWith(
      fetch(event.request).catch(err => {
        return new Response(
          JSON.stringify({ error: "This action disabled while app is offline" }), {
            headers: { 'Content-Type': 'application/json' }
          }
        )
      })
    )
  }
})

self.addEventListener('push', event => {
  event.waitUntil(self.registration.showNotification('PLUM', {
    icon: '/walmartLogo.png',
    body: event.data.text()
  }))
})

// Comment to prevent PWA to cache the app
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
```

<img src="/04.png" width="200">

# - Verify offline status
We can call the ```navigator.onLine``` to see if the app is online or not.<br />
We can set it to the state to make a boolean.

<img src="/05.png" width="400">

Then set the listeners for the online and offline events.

<img src="/06.png" width="700">

# - Icons
Make sure you upload the necessary icons with the necessary dimension; 8 icons are needed.<br />
Please upload these needed icons to the public folder.

<img src="/07.png" width="200">

Go to the public folder and look for "manifest.json" and "index.html".<br />
Open the ```manifest.json``` and make sure to provide the corresponding icons to it; at the end it will look something like this:
```
{
  "short_name": "Todo List",
  "name": "My PWA Todo List",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "icon-120.png",
      "sizes": "120x120",
      "type": "image/png"
    },
    {
      "src": "icon-144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icon-152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "icon-167.png",
      "sizes": "167x167",
      "type": "image/png"
    },
    {
      "src": "icon-180.png",
      "sizes": "180x180",
      "type": "image/png"
    },
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000"
}

```
For IOS we need to link the icons directly in the ```index.html``` file; put them in the head tag.
```
<link rel="apple-touch-icon" href="icon-120.png">
<link rel="apple-touch-icon" sizes="152x152" href="icon-152.png">
<link rel="apple-touch-icon" sizes="180x180" href="icon-180.png">
<link rel="apple-touch-icon" sizes="167x167" href="icon-167.png">
```
When in prod, we will be able to see all the icons configured:
![](/08.png)

# - Naming
In the same ```manifest.json``` we can configure the "name" and "short_name".<br />
The short name has a maximum length of 12 characters, and is used underneath your app when it is installed on a user's homescreen.<br />
The full name has a maximum length of 45 characters, and is used in the Chrome web store, and in the installation dialog boxes, when a user is installing your application.<br />
If you don't specify a short name, then the long name will be truncated to fit the space.

# - Final HTML setup
Go to ```public/index.html``` file and make sure to have the next code inside the ```<head>``` tag:
```
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="apple-mobile-web-app-capable" content="yes"> 

<link rel="manifest" href="%PUBLIC_URL%/manifest.json">

<link rel="apple-touch-icon" href="icon-120.png">
<link rel="apple-touch-icon" sizes="152x152" href="icon-152.png">
<link rel="apple-touch-icon" sizes="180x180" href="icon-180.png">
<link rel="apple-touch-icon" sizes="167x167" href="icon-167.png">
```
Android displays a splash screen for PWAs based on the icons and names you provide, but iOS just displays a solid color splash screen for installed PWAs by default.<br />
We'll make a new splash screen image for every iOS device resolution size that we want to support, and then we can make a ```link``` tag in ```public/index.html``` to specify those images as the splash screen for each device resolution.<br />
So add these lines to the file:
```
<link rel="apple-touch-startup-image" href="splash_640x1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash_750x1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash_1242x2208.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash_1125x2436.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash_1536x2048.jpg" media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash_1668x2224.jpg" media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash_2048x2732.jpg" media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">
```
Then make sure to add those images to the public folder, here is an example of how the public folder should look like:
![](/09.png)

<img src="/10.png" width="200">