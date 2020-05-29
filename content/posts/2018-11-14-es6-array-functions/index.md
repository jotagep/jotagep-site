---
title: "ES6: Map, Filter, Reduce & Sort"
slug: es6-array-functions
author: Jorge G.Palacin
date: 2018-11-14
hero: ./images/hero.png
excerpt: Estas funciones añadidas al prototype del array en ES6 nos ayudan a hacer nuestra programación más funcional y nuestro código más limpio
---

Incluso aunque no hayas oido hablar sobre la **programación funcional,** es posible que hayas utilizado alguna vez las funciones map, filter, reduce o sort, ya que son increiblemente utiles y hacen tu código mucho más limpio y ordenado.

> La programación funcional es un **paradigma de programación**, es decir una manera de construir software, que se basa principalmente en el uso de funciones puras y evitar tanto el estado compartido como la mutabilidad de los datos.

No te asustes, hoy no indagaremos en la programación funcional, quizas en un futuro, pero esta bien que vayas conociendo la terminología. Pero si mostraremos estas **high order functions**, son funciones que bien tienen como parametro otras funciones o bien retornan una, que son un claro ejemplo de este estilo de programación.

### Map ()

Imaginemos que tenemos una lista de objetos en un array, en este ejemplo utilizaremos jugadores de futbol.

```js
const jugadores = [
    {name: 'Messi', team: 'Barcelona'},
    {name: 'C.Ronaldo', team: 'Juventus'},
    {name: 'Neymar', team: 'PSG'}
]
``` 

Dada esta lista imagina que queremos obtener un array con los nombres de todos los jugadores que haya incluidos en ella. Si quisíeramos hacerlo de **manera imperativa**, tendríamos que recorrer un bucle de la siguiente manera.

```js
const result = []

for (let i = 0; i < jugadores.lenght(); i++) {
    result.push(jugadores[i].name);
}

console.log(result);

// OUTPUT -> ['Messi', 'C.Ronaldo', 'Neymar']
```
    

Pero también podríamos hacerlo de **manera más declarativa **usando la función **map()** sobre el iterador del array.

```js
const result = jugadores.map(jugador => jugador.name);

console.log(result);

// OUTPUT -> ['Messi', 'C.Ronaldo', 'Neymar']
```
    

Como podeís ver pasamos una **función de callback** como parametro, que tiene como **argumento cada objeto** de la lista y retorna el nombre de éste. Este método nos organiza el código de forma más sencilla, por lo que es una buena práctica para el clean code.

### Filter ()

La función **filter** se usa de manera similar a map, pero la usaremos en otras ocasiones. En este caso la función de callback que pasamos como argumento** tiene que devolver un booleano**, de forma que si es *true, *pasara nuestro filtro, y si es *false, *no pasara nuestra criba. 

Esta vez tenemos una lista distinta que contiene objetos de equipos y puntos en la clasificación.

```js
const clasificacion = [
    {team: 'Barcelona', puntos: 40},
    {team: 'Real Madrid', puntos: 38},
    {team: 'Betis', puntos: 36},
    {team: 'Valencia', puntos: 35}
]
```
    

Suponte que necesitamos por lo que sea, un array con los equipos que tienen más de 37 puntos en la clasificación. Estamos ante el caso perfecto  para usar nuestra función filter 🕵️‍♂️.

```js
const result = clasificacion.filter( equipo => equipo.puntos > 37);

console.log(result);

// OUTPUT 
// ======
// [{team:'Barcelona', puntos: 40}, {team: 'Real Madrid', puntos: 38}]
```
    
Como vemos en la función callback, comparamos los puntos de cada equipo si son mayores de 37, si lo son **devolvera** ***true*** por lo que pasara a formar parte de nuestro resultado. Fácil verdad?

### Reduce ()

En mi opinión es la más dificil de usar de las funciones que os traje hoy, pero es extremadamente útil si la sabemos utilizar con propiedad. Esta función **nos reduce el array a un solo valor**. Para utilizarla especificaremos como argumento una función de callback y un valor inicial. En la función de callback pasaremos minimo dos parametros, **uno para el valor anterior y otro para el actual,** y retornaremos una operación entre los dos que se ira añadiendo al valor inicial.

¿Seguis ahi? No os preocupeís si os habeís liado un poco, con el ejemplo los entendereís perfectamente. Tenemos la siguiente lista de jugadores.

```js
const Barcelona = [
    {player: 'Messi', goles: 30},
    {player: 'Suarez', goles: 22},
    {player: 'Pique', goles: 3}
]
```
    
Dada la lista anterior, queremos averiguar cuantos goles lleva en total el Barcelona. Por lo que me parece una buena oportunidad para usar **reduce().**

```js
const result = Barcelona.reduce((jugAnterior, jugActual) => {
    return jugAnterior.goles + jugActual.goles
},0)

console.log(result);

// OUTPUT -> 55
```

Hemos pasado como parametros el jugador anterior y el jugador actual a nuestra función de callback que devuelve la suma de los goles de éstos dos. También hemos especificado *cero *como valor inicial de segundo parametro del reduce. El resultado es 55 que seria la suma de los goles de todos ellos. Una manera más limpia que recorrer el bucle *for.*

### Sort ()

Esta *high order function *sirve para **ordenar** arrays. Este metodo se basa en la siguiente función

```js
function compare(a, b) {
  if (a es menor que b según criterio de ordenamiento) {
    return -1; // Menor a 0
  }
  if (a es mayor que b según criterio de ordenamiento) {
    return 1; // Mayor a 0
  }
  // a debe ser igual b
  return 0;
}
```

¿Qué significa esto? Basicamente *"a"* y *"b" *son **dos objetos comparandose**, de modo que si en nuestro callback devolvemos un valor menor a *cero* significa que *"a"* es menos *"b" *y si devolvemos un valor mayo a *cero*, lo contrario. En caso que el valor devuelto fuera *cero* se quedaría tal cual ya que significa que los dos objetos que estamos comparando son iguales. 

Para ello usaremos la misma lista que en el ejemplo de filter pero esta vez ordenada de una manera distinta. Veamos el ejemplo.

```js
const clasificacion = [
    {team: 'Real Madrid', puntos: 38},
    {team: 'Betis', puntos: 36},
    {team: 'Barcelona', puntos: 40},
    {team: 'Valencia', puntos: 35}
]
```  

Observamos que la clasificación no esta ordenada correctamente. A traves de nuestra función **sort()** la vamos a ordenar por puntos.

```js
const result = clasificación.sort((a,b) => {
    return b.puntos - a.puntos;
})

// OUTPUT
// ======
// [
//     {team: 'Barcelona', puntos: 40},
//     {team: 'Real Madrid', puntos: 38},
//     {team: 'Betis', puntos: 36},
//     {team: 'Valencia', puntos: 35}
// ]
```

Perfecto! 👍. Como podemos observar, en este caso yo he restado los puntos del objeto *"b"* sobre los del *"a"*, ya que de esta forma la **ordenación es descendente**, es decir el valor más alto primero, que es lo que me interesa en una clasificación. 

### ¿ Por qué usar estas funciones cuando tratamos con arrays ?

- Porque trabajamos **directamente con los objetos**, en vez de acceder a ellos a traves de un index (array[i]).
- **Evitamos modificar** el array inicial, y por lo tanto **efectos secundarios**
- Evitamos manejar bucles *for*
- No creamos array vacios y vamos añadiendo uno a uno los objetos

Tenemos algunas ***high order functions*** más que se añadieron al prototipo de los arrays en ES6 pero estas son las más utilizadas. 

Espero que les haya gustado el post de hoy 😉, si tienen alguna duda no duden en contactarme por mi [twitter](https://twitter.com/Sir_JotaG) u otras redes sociales.

Un saludo y nos vemos proximamente!! Paz ✌️.