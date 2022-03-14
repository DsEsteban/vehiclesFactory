import React from 'react';
import CreateVehicle from '../molecules/createVehicle';
import VehiclesList from '../molecules/vehiclesList';

const Template = () => (
  <section style={{ marginTop: '40px' }}>
    <CreateVehicle />
    <VehiclesList />
  </section>
);

export default Template;