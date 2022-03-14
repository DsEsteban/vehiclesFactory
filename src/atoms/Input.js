import React from 'react';
import { Input } from 'antd';

const InputEl = ({ name }) =>  {
  return (
    <Input 
      placeholder="Basic usage"
      name={name}
    />
  )
}

export default InputEl;