import React from 'react';
import { FuncVehicle } from './FuncVehicle';

const Vehicles = ({vehicles, addToRent}) => {

    console.log(vehicles)
 return vehicles.map((funcVehicle)=> (
    <FuncVehicle key={funcVehicle.ID} funcVehicle={funcVehicle}
    addToRent={addToRent}
    />


 ));
};

export default Vehicles;