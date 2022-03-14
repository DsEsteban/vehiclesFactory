import React, { useState } from 'react';

const ListItem = ({ vehicle }) => {
  const [open, setOpen] = useState(false);
  const handleOnClick = () => setOpen(status => !status);

  return (
    <div style={{ cursor : 'pointer', border: '1px solid #333', padding: 10 }} onClick={handleOnClick}>
      {vehicle?.getName}
      {
        open && 
        <div>
          "I am {vehicle?.getName}, a {vehicle?.getType} with {vehicle?.getWheels} wheels, and {vehicle?.getSeats} seats!"
        </div>
      }
    </div>
  )
};

export default ListItem;