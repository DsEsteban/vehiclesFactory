import Vehicle from './VehicleClass.js';

export default class Motorcycle extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.seats = 2;
    this.wheels = 2;
    this.type = 'Motorcycle'
  }
}