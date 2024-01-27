
// obtuve un 10
var hola = 10;
var idUsuario = "pedro"

var sesionAbierta = 1;
var sesionCerrada = 1;

function inicioBBDD() 
{
    return new Promise((resolve,reject) => {
        hola == 10 ? resolve(idUsuario) : reject(new Error("No usuario Valido"))
    })
}

function finBBDD()
{
    return new Promise((resolve,reject) => {
        sesionCerrada == 1 ? resolve(1) : reject(new Error("Sin sexion abierta existente"))
    })
}

function medioBBDD()
{
    return new Promise((resolve,reject) => {
        sesionAbierta == 1 ? resolve(1) : reject(new Error("Sin sexion abierta existente"))
    })
}

inicioBBDD().then((res) => {
    console.log(res)
    return finBBDD()
}).then((res) => {
    console.log(res)
    return medioBBDD()
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err.message)
})







