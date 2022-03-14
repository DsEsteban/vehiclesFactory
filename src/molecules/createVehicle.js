import React, { useContext } from 'react';
import { Form, Col, Row, Input, Select } from 'antd';
import Button from '../atoms/Button';
import { VehiclesContext } from '../App';
import FactoryVehicle from '../Entities/FactoryVehicles';
const { Option } = Select;

const CreateVehicle = () => {
  
  const { setVehicles } = useContext(VehiclesContext);
  
  const onFinish = (values) => {
    const newVehicle = new FactoryVehicle(values.type, values.name);
    setVehicles(vehicles => [...vehicles, newVehicle]);
  };

  return (
    <section>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        name="userForm"
        onFinish={onFinish}
      >
        <Form.Item name="name" label="Name" wrapperCol={{
          span: 12,
        }}>
          <Input />
        </Form.Item>
        <Form.Item name="type" label="Type" wrapperCol={{
          span: 12,
        }}>
          <Select>
            {
              ['Car', 'Motorcycle'].map(
                value => <Option value={value} key={value}>{value}</Option>
              )
            }
          </Select>
        </Form.Item>
        <Row>
          <Col span={12}>
            <Button name="Create" type="primary" htmlType="submit" />
          </Col>
        </Row>
      </Form>
    </section>
  )
};

export default CreateVehicle;