import Car from '../Entities/CarClass.js';

test('instance of Car', () => {
  const car = new Car('Ferrari', 4, 5);
  expect(car instanceof Car).toBeTruthy();
});