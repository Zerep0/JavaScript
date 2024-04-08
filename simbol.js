const clavePrivada = Symbol('clavePrivada');

class MiClase {
  constructor() {
    this[clavePrivada] = 'Soy privado';
  }

  obtenerPrivado() {
    return this[clavePrivada];
  }
}

const instancia = new MiClase();
console.log(instancia.obtenerPrivado());  // Salida: Soy privado
console.log(instancia['clavePrivada']);      // Salida: undefined
eval(1==1);
