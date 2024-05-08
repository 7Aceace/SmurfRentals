import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase/fire'; 
import { UserAuth } from '../context/AuthContext';
import { collection, onSnapshot, query } from "firebase/firestore";
import { ViewRental } from '../components/component/IndivRentedV';
import RentedVehicles from '../functions/RentedVehicles';
import Testimonials from '../components/component/Testimonials';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

const Rentals = () => {
    const { user } = UserAuth();

    // User UID and first name function
    function GetUserUid() {
        const [userDetails, setUserDetails] = useState({ uid: null, userFname: null });

        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUserDetails({ uid: user.uid, userFname: user.displayName });
                }
            });
        }, []);

        return userDetails;
    }

    const userDetails = GetUserUid();

    // state of rented Vehicles
    const [rentedVehicles, setRentedVehicles] = useState([]);

    // getting rented vehicles from firestore collection and updating the state
    useEffect(() => {
        auth.onAuthStateChanged(user => {
          if (user) {
            const q = query(collection(db, 'Rentals of ' + user.uid));
            onSnapshot(q, (snapshot) => {
              const rentedVehiclesData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
              }));
              setRentedVehicles(rentedVehiclesData);
            });
          } else {
            console.log('User is not signed in to retrieve rented vehicles');
          }
        });
      }, []);
    
    let Vehicle;
   
    const vehicleRentedIncrease = (rentedVehicle) => {
      Vehicle = rentedVehicle;
      Vehicle.qty = Vehicle.qty + 1;
      Vehicle.TotalRentalPrice = Vehicle.qty * Vehicle.price;
      auth.onAuthStateChanged((user) => {
        if (user) {
          const docRef = doc(db, 'Rentals of ' + user.uid, rentedVehicle.ID);
          updateDoc(docRef, Vehicle).then(() => {
            console.log('increment added');
            const q = query(collection(db, 'Rentals of ' + user.uid));
            onSnapshot(q, (snapshot) => {
              const rentedVehiclesData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setRentedVehicles(rentedVehiclesData);
            });
          });
        } else {
          console.log('User is not signed in to retrieve rented vehicles');
        }
      });
    };

    const vehicleRentedDecrease = (rentedVehicle) => {
      Vehicle = rentedVehicle;
      if(Vehicle.qty > 1)
      
      Vehicle.qty = Vehicle.qty - 1;
      Vehicle.TotalRentalPrice = Vehicle.qty * Vehicle.price;
      auth.onAuthStateChanged((user) => {
        if (user) {
          const docRef = doc(db, 'Rentals of ' + user.uid, rentedVehicle.ID);
          updateDoc(docRef, Vehicle).then(() => {
            console.log('increment added');
            const q = query(collection(db, 'Rentals of ' + user.uid));
            onSnapshot(q, (snapshot) => {
              const rentedVehiclesData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setRentedVehicles(rentedVehiclesData);
            });
          });
        } else {
          console.log('User is not signed in to retrieve rented vehicles');
        }
      });
    };

    
const vehicleRentedDelete = (rentedVehicle) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      const docRef = doc(db, 'Rentals of ' + user.uid, rentedVehicle.ID);
      deleteDoc(docRef).then(() => {
        console.log('successfully deleted');
        const q = query(collection(db, 'Rentals of ' + user.uid));
        onSnapshot(q, (snapshot) => {
          const rentedVehiclesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRentedVehicles(rentedVehiclesData);
        });
      });
    } else {
      console.log('User is not signed in to delete rented vehicles');
    }
  });
};

    return (
        <div>
            <p>Rentals of {user?.firstName}</p>
            {rentedVehicles.length > 0 && (
               <RentedVehicles rentedVehicles={rentedVehicles}
               vehicleRentedIncrease= {vehicleRentedIncrease}
               vehicleRentedDecrease  = {vehicleRentedDecrease }
               vehicleRentedDelete = {vehicleRentedDelete}/>
            
                
            )}

            {rentedVehicles.length < 1 && (
                       
                       <p>None</p>
            )}
            if({rentedVehicles.length >0})
            {
              <Testimonials/>
            }
           
        </div>
    );
};

export default Rentals;