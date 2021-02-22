export class Player {
  constructor(type) {
    this.isActive = false;
    this.type = type;
    this.position = [];
  }
  addPosition(position) {
    // this.i.push(element1);
    // this.j.push(element2);
    this.position = [...this.position, position];
  }
  setActive(status) {
    console.log("setactive called by ", this.type, status);
    this.isActive = status;
  }
}
