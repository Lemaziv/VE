const promesaExitosa = true;
const primeraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaExitosa) {
            resolve('ToDo Ok');
        } else {
            reject('Error');
        }
    }, 3000);
});
// INVOCAR LA PROMESA CON EXITO
/*
primeraPromesa.then((valor) => {
    console.log(valor);
})*/
//INVOCAR LA CON EXITO
const manejoPromesaExitosa = (valor) => {
    console.log(valor);
}
//INVOCAR UNA PROMESA CON ERROR
const manejoPromesaError = (elerror) => {
    console.log(elerror);
}
//EJECUTAMOS LA FUNCION EN CASO DE QUE LA PROMESA SEA OK O ERROR
primeraPromesa.then(manejoPromesaExitosa, manejoPromesaError);