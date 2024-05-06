
import React from 'react'
import { Button } from "../components/ui/button"
export const FuncVehicle = ({funcVehicle}) => {
    console.log(funcVehicle);
    return (
    
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
    <img
        alt="Car Product"
        className="w-full h-48 object-cover"
        src={funcVehicle.url}
        style={{
            aspectRatio: "400/300",
            objectFit: "cover",
            width: "100%",
        }}
    />
    <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{funcVehicle.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{funcVehicle.description}</p>
        <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">₱{funcVehicle.price}</span>
            <Button
                style={{
                    backgroundColor: "#368ce7",
                    color: "#deecfb",
                }}
                variant="primary"
            >
                Rent Now
            </Button>
        </div>
    </div>
</div>
          
    )
}


















