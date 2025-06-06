export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  // Méthode appelée lorsque l'objet est converti en nombre
  valueOf() {
    return this.size;
  }

  // Méthode appelée lorsque l'objet est converti en chaîne
  toString() {
    return this.location;
  }
}
