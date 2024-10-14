const fs = require('fs');
require('colors')


//al colocar async es como si colocaramos promise 
//estaria regresando una promesa 
//y solo colocaria el return 
const crearArchivo = (base = 5, listar, hasta) => {

    return new Promise((resolver, rechazar) => {

        console.log('========================'.green);
        console.log(`      Tabla de: ${base}`.rainbow);
        console.log('========================'.green);
    
        let resultado = '';
        let consola = '';
    
        for(let i = 1; i <=  hasta; i++){
            resultado += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${'x'.green} ${i} ${'='.blue} ${base * i}\n`
        }

        if(listar){
            console.log(consola);
        }
    
        //el primer parametro seria el path o ruta 
        //si no se coloca se va agregar en la carpeta donde se este generando este archivo 
        /*fs.writeFile(`tabla-${base}.txt`, resultado, (erro) => {
            if (erro) throw erro
            //throw se signica tirar la aplicacion y apreca el error
             console.log(`tabala-${base}.txt creada`);
        })*/
    
        try{
            fs.writeFileSync(`./salida/tabla-${base}.txt`, resultado)
           resolver(`tabala-${base}.txt creada`.rainbow);
        }catch(error){
            rechazar(error);
        }     //si sudede un error tendriamos que atraparlo mendiante en try y un catch
    })

}

module.exports = {
    crearArchivo
}