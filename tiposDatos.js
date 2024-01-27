
// number
let edad = 20
// boolean
let esEstudiante = false
let comparacion = edad > 19 && esEstudiante == false;
if(comparacion)
{
    console.log("no me gusta esto");
}

// nulo
let nulo = null;

// array 
let arrayVacio = []
let array = ["hola", "pedro", "paco"];

// array con funcion completadora
let arrayCeros = new Array(2).fill(0);

// array con el operador de propagacion
let nuevoArrayAcoplado = [...arrayCeros,10,30];

arrayCeros.forEach(v => console.log(v))
console.log("\n")
nuevoArrayAcoplado.forEach(v => console.log(v))
console.log("\n")

array.forEach(s => console.log(s));

// simbolo (identificadores unicos aunque tengan el mismo nombre)
let simbolo = Symbol("notacion que no existe")

// numero Entero Largo
let numeroGrande = 9007199254740991n;

// objeto
let persona = {
    nombre: "Isaac",
    edad : 21,
    esEstudiante: true,
    comer: function(){
        console.log("estoy comiendo")
    }
}

let persona1 = new Object();
persona1.nombre = "Isaac"
persona1.edad = 22;
persona1.esEstudiante = false;
persona1.comer

function Persona(nombre, edad, esEstudiante)
{
    this.nombre = nombre;
    this.edad = edad;
    this.esEstudiante = esEstudiante;
}

let persona2 = new Persona("Isaac", 23, true)

console.log("edad" + persona.edad)
console.log(persona1.edad)
console.log(persona2.edad)

delete persona.edad

console.log("edad" + persona.edad)





