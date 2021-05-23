/*
    estas trabajando en un programa de gestion de tiendas, que almacena los precios en una matriz.
    necesitas a?adir una funcionalidad para aumentar los precios en la cantidad dada.
    la variable "increase" es tomada de la entrada del usuario es necesario aumentar todos los precios de la matriz dada en esa cantidad y entregar a la consola la matriz resultante.

    "usar un bucle para iterar atravez de la matriz y aumentar todos los elementos" 
*/

let increase = 9;
let precios = [98.99, 15.2, 20, 1026];
let AumPrec = precios.map((index) => index + increase)
console.log(AumPrec);