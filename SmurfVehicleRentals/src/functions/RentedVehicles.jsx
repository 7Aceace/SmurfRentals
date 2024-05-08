import React from 'react';
import {IndivRentedV} from '../components/component/IndivRentedV';
const RentedVehicles = ({rentedVehicles, vehicleRentedIncrease,vehicleRentedDecrease, vehicleRentedDelete}) => {
 return rentedVehicles.map((rentedVehicle)=>(
    
    <IndivRentedV key={rentedVehicle.ID} rentedVehicle = {rentedVehicle}
    vehicleRentedIncrease={vehicleRentedIncrease }
    vehicleRentedDecrease ={vehicleRentedDecrease}
    vehicleRentedDelete ={vehicleRentedDelete}
    />
   

    ));
};

export default RentedVehicles;
