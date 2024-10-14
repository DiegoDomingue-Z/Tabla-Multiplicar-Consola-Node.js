const argv =  require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption: true, // el campo es requerido si o si 
    describe: ' Es la base de la tabla de multiplicar'
}).check((argv) => { //es una veriviacion 
    console.log('yargs: ',argv)
    if(isNaN(argv.base)){
        throw 'la base debe ser un numero'; //mandamos un error 
    }
    return true;
}).option('l',{
    alias: 'listar',
    type:'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
}).option('a',{
    alias: 'hasta',
    type:'number',
    default: 10,
    describe: 'El numero que coloques llegara la tabala de multiplicar'
})
.argv;

module.exports = argv;