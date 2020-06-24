 ## Nombre del Ejemplo: Techo Azul

### OBJETIVO 
- Comenzar proyectos con buenas prácticas
- Diferenciar HTML y JSX
- Conocer 2 maneras de usar CSS con React

#### REQUISITOS 
- Tener Node instalado

#### DESARROLLO

1. Comenzar nuevo proyecto de React con el comando `npx create-react-app ejemplo1`.

1. Seguir las [buenas prácticas para empezar un proyecto]().

1. Crear nuestro `div` principal que nos servira como techo.
```
import React from 'react';

function App() {
   return (
      <div id="techo">
         techo
      </div>
   );
}

export default App;
```

1. Ir a `index.css` para crear el CSS de nuestro techo.
```
#techo {
	width: 600px;
	height: 600px;
	background-color: skyblue;
}
```

1. Crear otro `div` hijo que nos servirá como foco. Notar primer diferencia en como usamos las clases de CSS.
```
import React from 'react';

function App() {
   return (
      <div id="techo">
         techo
         <div className="foco">
            foco
         </div>
      </div>
   );
}

export default App;
``` 

