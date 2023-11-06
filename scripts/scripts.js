/*
Alejandro Ruiz Prieto

*/

/*Creamos una constante para usar el window open, 
dentro de esta podemos meter un link y el blank para que abra una nueva pestaña */

const abrirNuevaVentana = () => {

    window.open("https://www.tuniversformacion.es", "_blank")

};

//Aqui ponemos self para abrir la url en la pestaña actual
const abrirMismaVentana = () => {
    window.open("https://www.tuniversformacion.es", "_self")
};