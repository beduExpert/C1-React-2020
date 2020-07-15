## Simulando llamadas

### OBJETIVO
- Usando useEffect.
- Renderizado condicional.

#### REQUISITOS 
- Tener Node instalado.

#### DESARROLLO

1. Comenzar nuevo proyecto de React con el comando `npx create-react-app ejemplo2`.

2. Seguir las [buenas prácticas para empezar un proyecto](../../BuenasPracticas/EmpezandoProyectos/Readme.md).

3. Vamos a darle un margen a la aplicación para que no se vea en la mera esquina, creamos una clase CSS y se la ponemos a nuestro `div`.
```
.margen {
   margin: 100px;
}
``` 

4. Primero vamos a hacer que un componente se monto dependiendo de una condición.

5. Creamos un estado de `mostrarUsuarios` como `false`.
```
import React from 'react';

const App = () => {
   const [mostrarUsuarios, setMostrarUsuarios] = React.useState(false);

   return (
      <div className="margen">
         Hola Mundo!
      </div>
   );
};

export default App;
``` 

6. Vamos a ver 3 maneras de renderizado condicional.
   - Directa
   - Ternaria
   - Por función

7. Directa - tratamos a la condición y al componente como si estuvieran adentro de un `if`.
```
import React from 'react';

const App = () => {
   const [mostrarUsuarios, setMostrarUsuarios] = React.useState(false);

   const componente = <span>Hola Mundo!</span>;

   return (
      <div className="margen">
         {mostrarUsuarios && componente}
      </div>
   );
};

export default App;
```

8. El código de arriba no va a mostrar nada en pantalla porque `mostrarUsuarios` esta en falso, pero si lo cambias a `true`, va a desplegar el componente.

9. Primero se asegura que `mostrarUsuarios` sea verdadero; en dado caso que no lo sea, termina la condición y no llega al componente. Cuando si es verdadero, llega al componente, verifica que exista (si existe en este caso) y como es la última condición que hay, la imprime.

10. Se recomienda usar este tipo de renderizado con solo una condición, igual como lo tenemos. Verificar si algo es verdadero o falso y después renderizar algo.
```
{condicionParaRevisar && componenteParaRenderizar}
```

11. Ternaria - puede ser usada para renderizar 2 componentes dependiendo la condición.
```
import React from 'react';

const App = () => {
   const [mostrarUsuarios, setMostrarUsuarios] = React.useState(false);

   const componente = <span>Hola Mundo!</span>;
   const noHay = 'No hay nada';

   return (
      <div className="margen">
         {mostrarUsuarios ? componente : noHay}
      </div>
   );
};

export default App;
```

12. En este ejemplo se renderiza `componente` cuando la condición es verdadera pero tambien renderizamos algo más cuando es falsa, en este caso renderizamos `noHay`.

13. Ya sabemos 2 maneras de imprimir directamente en el `return` del componente, pero puede pasar que necesitemos tener diferentes condiciones o hacer varias declaraciones para poder tomar una decisión al imprimir. Para eso esta la última manera.

14. Por función - llamamos una función y retornamos lo que queramos imprimir.
```
import React from 'react';

const App = () => {
   const [mostrarUsuarios, setMostrarUsuarios] = React.useState(true);

   const componente = <span>Hola Mundo!</span>;
   const noHay = 'No hay nada';

   const renderizarUsuarios = () => {
      if (mostrarUsuarios) return componente;

      return noHay;
   };

   return (
      <div className="margen">
         {renderizarUsuarios()}
      </div>
   );
};

export default App;
```

15. Ahora en el `return` solo llamamos la función que se hará cargo de retornar el componente correcto y toda la lógica estará dentro de la función.

16. Como esta nueva función es genérica para cualquier atributo de `state`, significa que podemos cambiar nuestra forma de editar a los profes, vamos a hacerlo.
```
<input type="number" onChange={editarState('profes')} />
{state.profes}
<br /><br />
```

17. Vamos a dejar la función de `editarProfes` (aunque ya no se use) para recordar en el futuro que se puede hacer de otra manera.

18. Resultado:
<img src="./public/resultado.png" width="400">
