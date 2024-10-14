const { crearArchivo } = require('./ayudantes/multiplicar')
const argv = require('./config/yargs')

console.clear();
/*console.log(process.argv);
console.log('========')
console.log(argv);*/
//console.log('Base: yargs', argv.base);



crearArchivo(argv.base, argv.listar, argv.hasta)
.then( realizada => console.log(realizada))
.catch(rechazada => console.log(rechazada, 'rechazada'))



/*
console.clear();
console.log(process.argv)
//let base = 4;


//console.log(process.argv);
const [,,arcgumento3 = 'base=5'] = process.argv 

//estamos llamando el argumento 3 y lo estamos separando en dos 
//con el split que le diriamos cada que encuentres un = divide entonces nos va dividir en dos
//el argumento 3 
//y lo desestructuramos 
const [, base] = arcgumento3.split('=')

console.log(base)




/*
Desglose de argv:
arg: Abreviatura de "argument" (argumento).
v: Abreviatura de "vector" (vector, que es un término técnico para un arreglo o lista en este contexto).
Entonces, argv es simplemente un arreglo que contiene los argumentos proporcionados al programa al ejecutarse.*/


/*process.argv es una propiedad en Node.js que te permite acceder 
a los argumentos de la línea de comandos que se pasan cuando ejecutas
 un script en Node. Aquí, process es un objeto global en Node.js que 
 proporciona información y control sobre el proceso en ejecución, y 
 tiene varias propiedades y métodos útiles, como process.argv, 
 process.env, process.exit(), entre otros.*/

//process.env: Un objeto que contiene las variables de entorno. Puedes acceder a variables