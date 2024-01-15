const fs = require('fs'); // Importamos el módulo fs para trabajar con archivos

const data = fs.readFileSync('README-FACEBOOK.md', 'utf-8'); // Leemos el archivo README-FACEBOOK.md


//CANTIDAD GENERAL DE PALABRAS
const wordCount = data.split(" ").length;
console.log("CANTIDAD DE PALABRAS", wordCount);

//CANTIDAD DE LA PALABRA "React"
const reactCount = data.match(/React/ig).length; // se aplica el método match() para buscar la palabra "React" en el archivo README-FACEBOOK.md
//esto se hace con expresiones regulares, el método match() devuelve un array con las coincidencias encontradas, ig = ignore case 
//para que no distinga entre mayúsculas y minúsculas
console.log("CANTIDAD DE PALABRAS 'React':", reactCount);

//OPCION 2 PARA CANTIDAD DE LA PALABRA "React"
words = data.split(" "); //se aplica el método split() para separar las palabras del archivo README-FACEBOOK.md
const reactWordCount = words.filter(word => word.toLowerCase().includes("react")).length;
//se aplica el método filter() para buscar la palabra "React" en el archivo README-FACEBOOK.md,
//word es el parámetro que recibe la función flecha, se convierte a minúsculas para que no distinga entre mayúsculas y minúsculas
console.log("CANTIDAD DE PALABRAS 'React' 2: ", reactWordCount);