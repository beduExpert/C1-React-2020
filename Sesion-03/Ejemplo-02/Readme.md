## Incremento

### OBJETIVO
- Modificar el estado.
- Modificar estado del padre por medio de funciones mandadas como props.
- Introducción de los ciclos de vida: DidMount, WillUnmount, DidUpdate.
- Entender en que momento se ejecuta cada uno.
- Usar los eventos onClick y onChange.

#### REQUISITOS 
- Tener Node instalado.

#### DESARROLLO

1. Comenzar nuevo proyecto de React con el comando `npx create-react-app ejemplo2`.

2. Seguir las [buenas prácticas para empezar un proyecto](../../BuenasPracticas/EmpezandoProyectos/Readme.md).

3. Convertimos nuestra `App.js` en un componente stateful (clase) para usar el estado.
```
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hola Mundo!
         </div>
      );
   }
}

export default App;
```

4. Vamos a darle un margen a la aplicación para que no se vea en la mera esquina, creamos una clase CSS y se la ponemos a nuestro `div`.
```
.margen {
   margin: 100px;
}
``` 

5. Creamos los estados necesarios para este ejercicio.
```
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nombre: '',
         mensaje: '',
         listaNombres: ['Bedu']
      };
   }

   render() {
      return (
         <div className="margen">
            Hola Mundo!
         </div>
      );
   }
}

export default App;
``` 

6. Creamos un `<input />` y nos aseguramos que podamos escribir en él.
```
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nombre: '',
         mensaje: '',
         listaNombres: ['Bedu']
      };
   }

   render() {
      return (
         <div className="margen">
            <input />
         </div>
      );
   }
}

export default App;
```

7. Este va a ser el lugar en donde escribiremos el nombre para agregarlo a la lista de nombre. Para poder hacer eso necesitamos tener registro de lo que los usuarios estan escribiendo en el campo de texto.

8. Vamos a registrarlo con el estado de `nombre`.
```
<input value={this.state.nombre} />
```

9. Ahora nuestro `<input />` ya no funciona, esto es porque el valor siempre es un string vacio; ahora tenemos que cambiar el estado cada que el usuario escriba algo.
```
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nombre: '',
         mensaje: '',
         listaNombres: ['Bedu']
      };
   };

   handleInputChange = (event) => {
      this.setState({
         nombre: event.target.value
      });
   };

   render() {
      return (
         <div className="margen">
            <input
               value={this.state.nombre}
               onChange={this.handleInputChange}
            />
         </div>
      );
   }
}

export default App;
```

10. Nuestro campo de texto vuelve a funcionar.

11. Ahora vamos a desplegar los nombres que tenemos en nuestra lista usando la función de javascript `.map()`.
```
render() {
   return (
      <div className="margen">
         <input
            value={this.state.nombre}
            onChange={this.handleInputChange}
         />

         <ul>
            {this.state.listaNombres.map((nmbr) => (
               <li>
                  {nmbr}
               </li>
            ))}
         </ul>
      </div>
   );
}
```

12. Si abrimos la consola del navegador, nos va a dar un mensaje diciendo `Each child in a list should have a unique "key" prop`. Para arreglarlo hacemos lo siguiente:
```
{this.state.listaNombres.map((nmbr, key) => (
   <li key={key}>
      {nmbr}
   </li>
))}
```

13. Ya que estamos imprimiendo los nombres, vamos a agregar más nombres con un boton.
```
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nombre: '',
         mensaje: '',
         listaNombres: ['Bedu']
      };
   };

   handleInputChange = (event) => {
      this.setState({
         nombre: event.target.value
      });
   };

   handleClick = () => {
      const nombreEnEstado = this.state.nombre;
      if (!nombreEnEstado) return;

      const listaActualizada = [
         ...this.state.listaNombres,
         nombreEnEstado
      ];

      this.setState({
         nombre: '',
         listaNombres: listaActualizada,
      });
   };

   render() {
      return (
         <div className="margen">
            <input
               value={this.state.nombre}
               onChange={this.handleInputChange}
            />
            <button onClick={this.handleClick}>
               Agregar
            </button>

            <ul>
               {this.state.listaNombres.map((nmbr, key) => (
                  <li key={key}>
                     {nmbr}
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}

export default App;
```

14. Cada que le demos click al `<Boton />`, el contador sumará 1.

15. Resultado:
<img src="./public/resultado.png" width="400">
