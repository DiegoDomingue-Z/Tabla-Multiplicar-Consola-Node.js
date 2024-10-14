-base=5 se separa porque yargs lo trata como opciones individuales (-b, -a, -s, -e=5).
base=5 sin guiones se trata como un valor suelto y lo guarda en el arreglo _.
--base=5 se interpreta correctamente como una opción con nombre y asigna el valor 5 a argv.base.

