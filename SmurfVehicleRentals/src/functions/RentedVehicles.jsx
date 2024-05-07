import React from 'react';
import IndivRented from './IndivRented';
const RentedVehicles = ({rentedVehicles}) => {
 return rentedVehicles.map((rentedVehicle)=>(
    <>
    <IndivRented key={rentedVehicle.ID} rentedVehicle = {rentedVehicle}/>
    </>

    ));
};

export default RentedVehicles;
