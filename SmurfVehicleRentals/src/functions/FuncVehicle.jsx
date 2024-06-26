import React from 'react'
import { Button } from "../components/ui/button"

export const FuncVehicle = ({funcVehicle, addToRent}) => {
    const handleAddToRent=()=>{
        addToRent(funcVehicle);
    }   
    return (
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
            <div>
                <img
                    alt="Car Product"
                    className="w-full h-48 object-cover"
                    src={funcVehicle.url}
                    style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                    }}
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{funcVehicle.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{funcVehicle.description}</p>
                </div>
            </div>
            <div className="p-4 flex justify-between items-end">
                <span className="text-lg font-semibold">₱{funcVehicle.price}</span>
                <Button
                    style={{
                        backgroundColor: "#368ce7",
                        color: "#deecfb",
                    }}
                    variant="primary"
                    onClick = {handleAddToRent}
                >
                    Rent Now
                </Button>
            </div>
        </div>
    )
}