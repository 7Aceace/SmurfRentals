import React from 'react';
import { FuncVehicle } from './FuncVehicle';

const Vehicles = ({vehicles}) => {

    console.log(vehicles)
 return vehicles.map((funcVehicle)=> (
    <FuncVehicle key={funcVehicle.ID} funcVehicle={funcVehicle}/>
 ));
};

export default Vehicles;