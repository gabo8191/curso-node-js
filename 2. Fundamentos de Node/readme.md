# Node.js: Preguntas Frecuentes

## ¿Qué es Node.js?

Node.js es un entorno de ejecución de JavaScript construido con el motor V8 de Chrome. Su modelo de operaciones de entrada/salida no bloqueante y orientado a eventos lo hace eficiente y ligero. npm, su extenso ecosistema de paquetes, es líder en bibliotecas de código abierto.

Dino, una alternativa a Node.js, utiliza el motor JavaScript de Mozilla Firefox.

## ¿Por qué es tan popular?

Node.js es de código abierto con el rápido motor V8 de Google. Su asincronía permite la ejecución simultánea de tareas, ideal para aplicaciones en tiempo real. Su escalabilidad lo destaca para chats, juegos y más. Ofrece módulos para diversas aplicaciones, desde web hasta móviles.

## I/O No Bloqueante

Node.js utiliza un modelo de operaciones de entrada/salida no bloqueante, donde las tareas no esperan su finalización, permitiendo la continuidad de la ejecución.

## libuv

Libuv, biblioteca multiplataforma, brinda soporte para programación asíncrona basada en eventos, destacándose en E/S de disco y red. Es la base principal de Node.js.

## NPX y NPM

Npx, incluido con Node.js, es un ejecutor de paquetes que permite la ejecución sin instalación. Npm, gestor de paquetes, facilita la instalación y ejecución de paquetes.

## Síncrono y Asíncrono

- **Síncrono:** Una tarea en el hilo principal bloquea la ejecución de otras hasta su finalización.
- **Asíncrono:** Tareas en hilos secundarios sin bloqueo.

# Event Loop y Ejecución de Código

## Event Loop

El Event Loop es un bucle en el hilo principal de Node.js que gestiona la ejecución de tareas. Cuando el stack está vacío, el Event Loop espera nuevas tareas para ejecutar.

## Stack de Tareas

La pila de tareas, o Stack, es donde se apilan las tareas a medida que se ejecutan en orden de llegada. Una vez completada, se remueve del Stack.

## Callback

El Callback es una función ejecutada al completarse una tarea asíncrona. Se agrega al Stack una tarea que ejecuta el callback.

## Blocking y Single Thread

Node.js es de un solo hilo principal, lo que significa que una tarea que bloquee el hilo afectará otras. Este enfoque single thread es vital para mantener la concurrencia.

## Ejecución de Código - Call Stack y Libuv

El Call Stack es una pila de tareas ejecutadas en orden. Libuv permite tareas asíncronas en hilos secundarios sin bloquear otras, agregando al Stack una tarea que ejecuta el callback al completarse.

# Event Loop

## ¿Qué es el Event Loop?

El Event Loop es un bucle en el hilo principal de Node.js que gestiona la ejecución de tareas. Cuando el stack está vacío, el Event Loop espera nuevas tareas para ejecutar.

## ¿Qué pasa si dos tareas se agregan al Stack al mismo tiempo?

El Event Loop ejecuta una tarea a la vez, por lo que si dos tareas se agregan al Stack al mismo tiempo, la primera en completarse se remueve del Stack y se ejecuta la siguiente. La segunda tarea se ejecutará cuando el Stack esté vacío.

## Reglas del Event Loop

- Los callbacks en el microtask se ejecutan primero.
- Todos los callbacks dentro del timer queue se ejecutan en orden de llegada.
- Los callbacks en el microtask queue se ejecutan después de los callbacks del timer queue.
