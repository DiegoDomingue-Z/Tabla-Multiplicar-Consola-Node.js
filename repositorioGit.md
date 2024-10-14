* El archivo gitignore son todos los archivos a directorios que se quieren ignorar 

# /salida/*.txt
aqui le estamos diciendo que todo lo que tienen dento de la carpeta de salida lo ignore 

# node_modules/
al igual los nodulos de node los ignoramos 

* si se llega descargar un proyecto o incluso este poryecto con 
# npm install 
puedes intalar todos los modulos



* para inicicializar el repositorio de git 
primero verificamos nuestra identidad
git config --global user.DiegoDomingue-Z
git config --global user.email runtime576@gmail.com

iniciamos el repositorio 
# git init 

* preparamos los cambios con
# git add .
git add . le dice a Git que prepare todos los cambios (nuevos, modificados y eliminados) en el proyecto localmente para subirlos al repositorio en el próximo commit.


* tomamos una fotografia con 
# git -m 'mi primer comit';

Un commit en Git es como tomar una "foto" de los cambios en tu proyecto en un momento específico. Guarda el estado actual de los archivos y su historial, permitiendo que puedas regresar a ese punto en el futuro si es necesario.

En resumen, git commit guarda cambios al repositorio local y les asigna un mensaje para describir qué cambiaste.

* nota ya despues de hacer esto si accidentalemnte eliminamos una carpeta colocamos 

# git checkout -- .

restaura todos los archivos modificados en el directorio actual al último estado confirmado (commit más reciente). En otras palabras, descarta todos los cambios no guardados que hayas hecho, devolviendo los archivos a como estaban en el último commit.

# colocamos nuestr repositorio 
git remote add origin https://github.com/DiegoDomingue-Z/Tabla-Multiplicar-Consola-Node.js.git

# loa gregamos a la rama principal
git branch -M main

#finalmente lo subimos 

* de preferecnia colocar esto archovos juntos 
git remote add origin https://github.com/DiegoDomingue-Z/Tabla-Multiplicar-Consola-Node.js.git
git branch -M main
git push -u origin main


# si queremos subir un cambio a git 
preparamos nuestros cambios 
* git add . 

tomamos la forografia 
*git commit -m 'agregando el readme'
