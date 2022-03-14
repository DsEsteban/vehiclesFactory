import Motorcycle from '../Entities/MotorcycleClass.js';

test('instance of Car', () => {
  const motorcycle = new Motorcycle('V-Strom', 2, 1);
  expect(motorcycle instanceof Motorcycle).toBeTruthy();
});