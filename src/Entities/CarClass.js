import Vehicle from './VehicleClass.js';

export default class Car extends Vehicle {
  constructor(name) {
    super();
    this.seats = 5;
    this.wheels = 4;
    this.name = name;
    this.type = 'Car'
  }
}