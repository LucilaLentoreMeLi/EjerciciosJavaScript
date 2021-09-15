/*
Ejercicio 1

Crear una función constructora la cual vamos a llamar c deberá tener las siguientes propiedades:

ram:string
cpu:string
disco:string
gpu:boolean
*/

function C (ram, cpu, disco, gpu){
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.gpu = gpu;
}

/*
Ejercicio 2

Crear 5 computadoras distintas y guardarlas (Array) de manera que luego podamos 
consultar cuántas computadoras tenemos y poder mostrarlas por consola. 
Además queremos ver el detalle de cada computadora por consola.
*/

let computadoras = []

let computadora1 = new C("8gb", "Intel", "500gb", false)
let computadora2 = new C("16gb", "Intel", "500gb", true)
let computadora3 = new C("32gb", "Intel", "1tb", false)
let computadora4 = new C("64gb", "Intel", "500gb", true)
let computadora5 = new C("4gb", "Intel", "1tb", true)

computadoras.push(computadora1, computadora2, computadora3, computadora4, computadora5)

console.log(`Ejercicios 2: Tenemos ${computadoras.length} computadoras. Detalle:`, computadoras)

/*
Ejercicio 3

Crear un nuevo Array a partir del primero, donde vamos a 
guardar solamente las computadoras con gpu.
*/

const computadorasConGPU = computadoras.filter(compu => compu.gpu)
console.log('Ejercicio 3: ', computadorasConGPU)

/*
Ejercicio 4

Crear una función que calcule cuántos litros de nafta gasta un auto que consume 2 litros cada 100km, 
ingresando por parámetro la cantidad de kilómetros del recorrido a realizar. 
Luego crear una función que, a partir de ese dato, devuelva cuánto significa eso en pesos ingresando 
por parámetro el precio del litro de nafta.
*/

function calcularLitros(km){
    return (km * 2) / 100
}

function precioNafta(km, precio){
    return calcularLitros(km) * precio
}

console.log('Ejercicio 4: ', calcularLitros(250))
console.log('Ejercicio 4: ', precioNafta(250, 180))

/*
Ejercicio 5

Crear un array que contenga números del 1 al 10. 
Retornar un nuevo array que contenga todos los números multiplicados por dos
*/

let numeros = []

for(let n = 1; n <=10; n++){
    numeros.push(n)
}

console.log('Ejercicio 5: ', numeros)

let numerosPorDos = numeros.map(n => n * 2)

console.log('Ejercicio 5: ', numerosPorDos)

/*
Ejercicio 6

Del array que devuelve el ejercicio número 5, filtrar los que sean mayores a 5
*/

let numerosMayoresACinco = numerosPorDos.filter(n => n > 5)

console.log('Ejercicio 6: ', numerosMayoresACinco)

/*
Ejercicio 7

Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10
*/

let primeroMayorADiez = numerosMayoresACinco.find(x => x > 10)

console.log('Ejercicio 7: ', primeroMayorADiez)

/*
Ejercicio 8

Dado el siguiente array filtremos a los pokémons con poder menor a 10.
 */

let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
    { nombre: 'bulbasaur', poder: 6 },
    { nombre: 'charizard', poder: 19 },
    { nombre: 'squirtle', poder: 3 },
    { nombre: 'metwo', poder: 6 }, 
]

console.log('Ejercicio 8: ', pokemones.filter(x => x.poder < 10))