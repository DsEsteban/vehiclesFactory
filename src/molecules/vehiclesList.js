import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import { VehiclesContext } from '../App';
import ListItem from './listItem';

const VehiclesList = () => {
  
  const { vehicles } = useContext(VehiclesContext);

  return (
    <section style={{ marginTop: '40px' }}>
      <Row>
        <Col span={12}>
          <strong><label>Vehicles List</label></strong>
        </Col>
        <Col span={12}>
          <ul>
            {vehicles?.map((vehicle) =>  <ListItem vehicle={vehicle} key={vehicle.getName} />)}
          </ul>
        </Col>
      </Row>
    </section>
  )
};

export default VehiclesList;