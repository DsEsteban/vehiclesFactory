import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const DropDown = ({ data, name }) =>  {

  return (
    <Select 
      name={name}
      defaultValue="Pick One" 
    >
      {
        data.map(
          value => <Option value={value} key={value}>{value}</Option>
        )
      }
    </Select>
  )
}

export default DropDown;