import React, { useState, createContext } from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import Template from './templates';

export const VehiclesContext = createContext();

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  return (
    <div className="App">
      <VehiclesContext.Provider value={{vehicles, setVehicles}}>
        <Template />
      </VehiclesContext.Provider>
    </div>
  );
}

export default App;
