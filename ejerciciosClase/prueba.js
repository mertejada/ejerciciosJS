
/**
 * Función que saluda por consola
 *
 * @param {*} mensaje
 * @return {*} 
 */
function saluda(mensaje){
    console.log(mensaje);
    return true;
}
/**
 *  Función que invierte el valor de una variable booleana
 *
 * @param {*} variable variable booleana
 * @return {*}  decuelve el valor contrario de la variable
 */
function invierte(variable){
    return !variable;
}

/** mercedes@pc73-9 js % npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (js) EJERCICIOS CLASE
Sorry, name can only contain URL-friendly characters and name can no longer contain capital letters.
package name: (js) ejerciciosClase
Sorry, name can no longer contain capital letters.
package name: (js) ejercicios-clase
version: (1.0.0) 
description: Ejercicios Clase 1ER Trimestre
entry point: (index.js) 00_declaracionVariables.js
test command: 
git repository: https://github.com/mertejada/ejerciciosJS.git
keywords: 
author: Mercedes Tejada Porcel
license: (ISC) 
About to write to /Users/mercedes/Desktop/instituto/DWEC/ejJavaScript/fuente/js/package.json:

{
  "name": "ejercicios-clase",
  "version": "1.0.0",
  "description": "Ejercicios Clase 1ER Trimestre",
  "main": "00_declaracionVariables.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mertejada/ejerciciosJS.git"
  },
  "author": "Mercedes Tejada Porcel",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/mertejada/ejerciciosJS/issues"
  },
  "homepage": "https://github.com/mertejada/ejerciciosJS#readme"
}


Is this OK? (yes) yes
mercedes@pc73-9 js % npm install --save-dev jsdoc

added 26 packages, and audited 27 packages in 2s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
mercedes@pc73-9 js % ./node_modules/jsdoc/jsdoc.js ejerciciosClase/prueba.js -d documentacion
ERROR: Unable to find the source file or directory /Users/mercedes/Desktop/instituto/DWEC/ejJavaScript/fuente/js/ejerciciosClase/prueba.js
There are no input files to process.
(node:24145) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
mercedes@pc73-9 js % ./node_modules/jsdoc/jsdoc.js ejerciciosClase/prueba.js -d documentacion
(node:24223) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
mercedes@pc73-9 js %  */