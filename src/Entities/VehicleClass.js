export default class Vehicle {
  constructor(name) {
    this.name = name;
    this.type = '';
    this.wheels = 0;
    this.seats = 0;
  }

  get getName() {
    return this.name;
  }

  get getWheels() {
    return this.wheels;
  }

  get getSeats() {
    return this.seats;
  }

  get getType() {
    return this.type;
  }

  set setType(type) {
    this.type = type;
  }

  set setSeats(numSeats) {
    this.seats = numSeats;
  }

  set setWheels(numWheels) {
    this.wheels = numWheels;
  }

  set setName(newName) {
    this.name = newName;
  }

}