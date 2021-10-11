class Personajes {
  nombre;
  familia;
  edad;
  estado;
  serie = "Juego de Tronos";
  constructor(nombre, familia, edad, estado) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
  }
  morir() {
    this.estado = "muerto";
  }
}

export default Personajes;
