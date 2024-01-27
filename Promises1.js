//-------- main.js ---------
// Una función asincróna simulando la petición desde el servidor
function loadItem(id) {
    return new Promise((resolve) => {
    console.log('loading item', id);
    setTimeout(() => {
    resolve({ id: id });
    }, 1000);
    });
    }
    
    let item1, item2;
    
    // Paralelo
    Promise.all([loadItem(1), loadItem(2)])
    .then((res) => {
    console.log(res)
    [item1, item2] = res;
    console.log('done');
    }).catch((error) => {
        // Manejo de errores: Imprime un mensaje si alguna de las promesas falla
        console.error('Error:', error);
    }) // overall time will be around 1s
    