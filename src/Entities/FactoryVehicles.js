import Vehicle from './VehicleClass.js';
import Car from './CarClass';
import Motorcycle from './MotorcycleClass';

export default class FactoryVehicle {
  constructor(type, name) {
    switch (type) {
      case 'Car':
        return new Car(name);
      
      case 'Motorcycle':
        return new Motorcycle(name);
    
      default:
        return new Vehicle(name);
    }
  }
}