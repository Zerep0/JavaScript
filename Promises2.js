//-------- main.js ---------

// Función asincrónica simulando una petición desde el servidor
function loadItem(id) {
    // Devuelve una nueva promesa que se resolverá después de 1 segundo
    return new Promise((resolve) => {
      console.log('loading item', id);
      setTimeout(() => {
        // Resuelve la promesa con un objeto que tiene la propiedad 'id'
        resolve({id:id});
      }, 1000);
    });
  }
  
  // Variables para almacenar los resultados de las promesas
let item1, item2, item3, item4;

// Paralelo: Ejecuta las funciones loadItem(1), loadItem(2), loadItem(3) y loadItem(4) simultáneamente
Promise.all([loadItem(1), loadItem(2), loadItem(3), loadItem(4)])
.then((res) => {
    // Imprime los resultados obtenidos de todas las promesas
    console.log(res);
    
    // Desestructura el array 'res' y asigna los resultados a las variables item1, item2, item3 y item4
    [item1, item2, item3, item4] = res;
    
    // Imprime un mensaje cuando se completan todas las promesas
    console.log('done');
})
.catch((error) => {
    // Manejo de errores: Imprime un mensaje si alguna de las promesas falla
    console.error('Error:', error);
});