import React from 'react';
import {IndivRentedV} from '../components/component/IndivRentedV';
const RentedVehicles = ({rentedVehicles}) => {
 return rentedVehicles.map((rentedVehicle)=>(
    
    <IndivRentedV key={rentedVehicle.ID} rentedVehicle = {rentedVehicle}/>
   

    ));
};

export default RentedVehicles;
