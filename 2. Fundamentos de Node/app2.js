const fs = require('fs'); // Importamos el módulo fs para trabajar con archivos

const data = fs.readFileSync('README-FACEBOOK.md', 'utf-8'); // Leemos el archivo README-FACEBOOK.md

const newContent = data.replace(/React/ig, 'Vue'); // Reemplazamos React por Vue, ig = ignore case

fs.writeFileSync('README-VUE.md', newContent); // Escribimos el nuevo archivo README-VUE.md

