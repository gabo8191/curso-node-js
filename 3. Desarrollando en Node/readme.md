## 3. Desarrollando en Node

# El package.json, ¿qué es y para qué sirve?
El package.json es un archivo que contiene la información del proyecto, como el nombre, la versión, los scripts, las dependencias, etc. Este archivo es muy importante porque nos permite saber cómo funciona el proyecto y cuáles son sus dependencias.

# Scripts en package.json
Los scripts son pequeños programas que podemos ejecutar desde la terminal. En el package.json podemos crear una sección llamada scripts en donde podemos guardar estos programas. Por ejemplo, podemos crear un script para ejecutar el proyecto, otro para compilar el código, otro para ejecutar las pruebas, etc.

# npm start y otros nombres
El script start es especial porque nos permite ejecutar el proyecto con el comando npm start. Sin embargo, podemos crear otros scripts con el nombre que queramos. Por ejemplo, podemos crear un script llamado test y ejecutarlo con el comando npm run test.

# Estrucutra de un proyecto de Node
Un proyecto de Node tiene una estructura muy simple. En la raíz del proyecto se encuentra el archivo package.json y la carpeta node_modules. En la carpeta node_modules se encuentran todas las dependencias del proyecto. Además, en la raíz del proyecto se encuentra el archivo index.js que es el punto de entrada de la aplicación.

# Importaciones y exportaciones de módulos
Los módulos son pequeños programas que podemos importar y exportar dentro de nuestro proyecto. Por ejemplo, podemos crear un módulo para conectarnos a una base de datos, otro módulo para ejecutar las pruebas, etc. Los módulos nos permiten dividir nuestro código en pequeñas partes y así poder reutilizarlo.

# Nodemon y los entornos de desarrollo
Nodemon es una herramienta que nos permite reiniciar automáticamente la aplicación cuando detecta cambios en el código. Esto es muy útil porque no tenemos que reiniciar la aplicación manualmente cada vez que hacemos un cambio. Además, podemos crear un script en el package.json para ejecutar la aplicación con nodemon.
No se recomienda instalar nodemon como dependencia del proyecto, sino como una dependencia de desarrollo. Esto es porque nodemon solo se utiliza en el entorno de desarrollo, no en producción.

# Diferencia entre devDependencies y dependencies
Las dependencias de desarrollo son aquellas que solo se utilizan en el entorno de desarrollo. Por ejemplo, nodemon es una dependencia de desarrollo porque solo se utiliza en el entorno de desarrollo. Por otro lado, las dependencias son aquellas que se utilizan en el entorno de producción. Por ejemplo, express es una dependencia porque se utiliza tanto en el entorno de desarrollo como en el entorno de producción.

# Node modules
La carpeta node_modules es una carpeta que se crea automáticamente cuando instalamos dependencias en nuestro proyecto. Esta carpeta contiene todas las dependencias del proyecto. Además, esta carpeta no se debe subir al repositorio porque es muy pesada y porque se puede crear automáticamente cuando ejecutamos el comando npm install.

# npm run dev
El comando npm run dev es un comando que se crea automáticamente cuando instalamos nodemon como dependencia de desarrollo. Este comando nos permite ejecutar la aplicación con nodemon. Sin embargo, podemos crear otros comandos en el package.json para ejecutar la aplicación con otros módulos.

# Consultar process
El objeto process es un objeto global que nos permite acceder a información del entorno en donde se está ejecutando la aplicación. Por ejemplo, podemos acceder a las variables de entorno, a los argumentos de la línea de comandos, etc.

# Variables de entorno
Las variables de entorno son variables que se encuentran en el entorno del sistema operativo. Por ejemplo, podemos crear una variable de entorno llamada PORT para guardar el puerto en donde se ejecutará la aplicación. Para acceder a las variables de entorno desde Node podemos utilizar el objeto process.env.

# process.env.NODE_ENV
La variable de entorno NODE_ENV nos permite saber en qué entorno se está ejecutando la aplicación. Por ejemplo, si la aplicación se está ejecutando en el entorno de desarrollo, el valor de la variable NODE_ENV será development. Por otro lado, si la aplicación se está ejecutando en el entorno de producción, el valor de la variable NODE_ENV será production.

# Desestructuración de objetos
La desestructuración de objetos es una característica de JavaScript que nos permite extraer valores de un objeto y asignarlos a variables. Por ejemplo, podemos extraer el valor de la variable PORT y asignarlo a una variable llamada port. Esto es muy útil cuando queremos acceder a una propiedad de un objeto.

# Depuración por VSCode y el package.json
La depuración es una técnica que nos permite ejecutar el código paso a paso para encontrar errores. Por ejemplo, podemos ejecutar el código paso a paso para encontrar errores de lógica. Para depurar una aplicación de Node podemos utilizar el depurador de VSCode. Además, podemos crear un script en el package.json para ejecutar la aplicación en modo depuración.

# Callbacks
Un callback es una función que se ejecuta cuando una función asíncrona ha terminado de ejecutarse. Por ejemplo, podemos ejecutar una función asíncrona para leer un archivo y pasarle un callback para que se ejecute cuando el archivo se haya leído. Los callbacks son muy importantes en Node porque la mayoría de las funciones de Node son asíncronas.
