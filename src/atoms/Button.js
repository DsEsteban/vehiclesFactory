import React from 'react';
import { Button } from 'antd';

const ButtonEl = props =>  {
  const {name} = props;
  return (
    <Button 
      {...props}
    >{name}</Button>
  )
}

export default ButtonEl;