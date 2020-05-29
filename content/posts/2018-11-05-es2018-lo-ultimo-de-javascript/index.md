---
title: ES2018, lo último de JavaScript
slug: es2018-lo-ultimo-de-javascript
author: Jorge G.Palacin
date: 2018-11-05
hero: ./images/hero.png
excerpt: ES2018 la nuevas funcionalidades de JavaScript. El ultimo standar hasta la fecha, nos ofrece diversas mejoras como rest/spread, iteraciones asincronas, etc.
---

JavaScript es un lenguage vivo, es más muy vivo diria yo, por este motivo sigue en continua evolución y ofreciendo cada día mejores herramientas a los desarrolladores. Aunque el gran cambio de *"standard" * fue el de 2015 (ES6), cada año añaden alguna funcionalidad y en concreto las de este año me gustan bastante, sobre todo las que os presento a continuación.

### Object Rest/Spread Properties

Para los que conozcan la asignación por *"destructuring" *de objetos o arrays de ES6, esta nueva opción les hara especial ilusión ya que te facilita mucho el trabajo. Los desarrolladores de React (Native) seguramente lleven usandolo ya algun tiempo para la comunicación entre componentes. Ahora con el ejemplo entenderan perfectamente por que me gusta tanto 🙂.

```js
const input = { a: 1, b: 2, c: 3 }
const { x, ...y } = input // rest properties

console.log(x) // 1
console.log(y) // { b: 2, c: 3 }

const input2 = { d: 4, e: 5 }
const result = { ...input, ...input2 } // spread properties
console.log(result) // { a: 1, b: 2, c: 3, d: 4, e: 5 }
```

En el ejemplo podemos observar los parametros ***rest***, que nos permite representar un número indefinido de argumentos y asignarselos a un objeto en este caso. En la parte posterior del ejemplo vemos la utilización del operador de propagación ***spread***, gracias a este operador somos capaces de **replicar un objeto** o formar uno nuevo a partir de dos o más de manera muy sencilla. Sin duda estas dos propiedades han pasado al top de mis favoritas 🔝.

### Iteración asíncrona

Si no estas familiarizado con los iteradores de ES6 (EcmaScript 2015) te pongo en contexto de manera rápida con un sencillo ejemplo. Un **iterador** es un objeto que tiene el método** next()** el cual devuelve elemento de una **secuencia**. Este método devuelve un objeto con dos propiedades: *{ value, done }. *Cuando la invocación de *next() *regresa un objeto donde la propiedad *done *es verdadera se considera finalizada la iteración.

```js
const iterable = ['Hola', 'gente']
const iterator = iterable[Symbol.iterator]()

console.log(iterator.next()) // >> { value: 'Hola', done: false }
console.log(iterator.next()) // >> { value: 'gente', done: false }
console.log(iterator.next()) // >> { value: undefined, done: true }

for (let value of iterable) {
  console.log(value)
  // >> 'Hola'
  // >> 'gente'
}
```
    
En el caso de los iteradores asíncrona es exactamente lo mismo que los iteradores normales y corrientes, pero estan pensados para recorrer** estructuras de datos asíncronas**, por lo que en vez de devolver un objeto con el par *{value, done} *regresaran una **promesa**.

```js
const service1 = new Promise(resolve => resolve('Hola'))
const service2 = new Promise(resolve => resolve('gente'))

async function* asyncIterable (syncIterable) {
  yield await service1
  yield await service2
}

async function getAsyncData () {
  for await (const x of asyncIterable()) { // for AWAIT of, recordad esto
    console.log(x)
  }
}

getAsyncData()
// >> Hola
// >> gente
```

Como vemos en el ejemplo, también podemos recorrer el iterable asíncrono con un bucle *for...of *pero en este caso añadiremos **await** al bucle, de este modo conseguimos una **iteración totalmente asíncrona**. Esta propiedad resulta extremadamente util para los programadores que usen Node, ya que te facilitan mucho tareas como leer ficheros, etc.

### Promise finally

La verdad que el nombre te hace spoiler, porque es realmente descriptivo 😅. Finally es un callback sin valor alguno que se ejecutara al **finalizar una promesa**, sin importar si se haya completado correctamente (then) o haya capturado algun error (catch). Suele resultar útil para ocultar *loading bars *o* spinners* al finalizar el proceso de carga.

```js
fetch('https://blog.jotagep.com/api/posts')
  .then(res => {
    processResponse(res)
  })
  .catch(err => {
    handleErrors(err)
  })
  .finally(() => {
    hideLoading()
  })
```
    
Estas son las tres nueva funcionalidades que queria destacar, también quiero resaltar que se han añadido algunas más como tag functions o diversas funciones RegExp, pero por ahora no profundizaremos en estos temas. 

Asi que gente os espero en proximos posts y a darle a las teclas, un saludo y paz ✌️.