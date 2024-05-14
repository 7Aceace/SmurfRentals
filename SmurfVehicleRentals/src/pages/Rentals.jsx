import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase/fire'; 
import { UserAuth } from '../context/AuthContext';
import { collection, onSnapshot, query } from "firebase/firestore";
import { ViewRental } from '../components/component/IndivRentedV';
import RentedVehicles from '../functions/RentedVehicles';
import Testimonials from '../components/component/Testimonials';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Separator } from "../components/ui/separator"
import '../components/component/summary.css'
import StripeCheckout from 'react-stripe-checkout'
import { getDocs } from 'firebase/firestore';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import FooterN from '../components/FooterN';


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

    //collecting the qty from rentedVehicles in a separate array 
    const qty = rentedVehicles.map(rentedVehicle =>{
        return rentedVehicle.qty
    })

    console.log(qty);
    // reducing the qty in a single value
    const reducerOfQty = (accumulator, currentValue)=>accumulator+currentValue;

    const totalQty = qty.reduce(reducerOfQty,0);
   

    // getting the TotalRentalPrice from rentedVehicles in a seperate array
       const price = rentedVehicles.map((rentedVehicle)=>{
        return rentedVehicle.TotalRentalPrice;
    })
    
    const reducerOfPrice = (accumulator,currentValue)=>accumulator+currentValue;
    const totalPrice = price.reduce(reducerOfPrice,0);

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


const [totalVehicles, setTotalVehicles] = useState(0);


//  charging payment
const navigate = useNavigate();
const handleToken = async(token) =>{
 // console.log(token)
 const rental = {name: 'All Rentals', totalPrice}
 const response = await axios.post('http://localhost:8080/checkout', {
    token,
    rental

 })
 console.log(response);
 let {status} = response.data;
 console.log(status);


 if(status === 'success'){
    navigate('/');
    toast.success('Your order has been placed successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
    
    const uid = auth.currentUser.uid;
    const q = query(collection(db, 'Rentals of ' + uid));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        deleteDoc(doc.ref);
    });
    
 }
 else{
    alert('Something went wrong in checkout');
 }
}

useEffect(() => {
  auth.onAuthStateChanged(user => {
    if (user) {
      const collectionRef = collection(db, 'Rentals of ' + user.uid);
      onSnapshot(collectionRef, (snapshot) => {
        const qty = snapshot.docs.length;
        setTotalVehicles(qty);
      });
    }
  });
}, []);

    return (
        <div className='bg-white'>
            <h1 className="font-bold text-center">Rentals of {user?.firstName}</h1>
            {rentedVehicles.length > 0 && (
              <div>
               <RentedVehicles rentedVehicles={rentedVehicles}
               vehicleRentedIncrease= {vehicleRentedIncrease}
               vehicleRentedDecrease  = {vehicleRentedDecrease }
               vehicleRentedDelete = {vehicleRentedDelete}/>
               <section className="bg-gray-100 dark:bg-gray-800 py-4 px-4 sm:px-6 md:px-8 lg:px-10">
                      <div className="max-w-2xl mx-auto">
                        <div
                          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Rental Vehicle Summary</h2>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                              <span className="text-gray-700 dark:text-gray-400 font-medium">Apr 1 - Apr 7</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <ClockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                              <span className="text-gray-700 dark:text-gray-400 font-medium">7 days</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Vehicle Details</h3>
                              <div className="flex items-center space-x-2 mb-2">
                                <CarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-700 dark:text-gray-400 font-medium">{totalQty}</span>
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <LocateIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-700 dark:text-gray-400 font-medium">Pickup: Santa Cruz, CA</span>
                              </div>
                              <div className="flex items-center space-x-2 mb-2">
                                <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-700 dark:text-gray-400 font-medium">1 driver</span>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Rental Charges</h3>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-700 dark:text-gray-400 font-medium">Rental Fee</span>
                                <span className="text-gray-900 dark:text-gray-100 font-medium">$50 x 7 days</span>
                              </div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-700 dark:text-gray-400 font-medium">Insurance</span>
                                <span className="text-gray-900 dark:text-gray-100 font-medium">$20 per day</span>
                              </div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-700 dark:text-gray-400 font-medium">Taxes & Fees</span>
                                <span className="text-gray-900 dark:text-gray-100 font-medium">$50</span>
                              </div>
                              <Separator className="my-4" />
                              <div className="flex justify-between items-center">
                                <span className="text-gray-900 dark:text-gray-100 font-bold">Total</span>
                                <span className="text-gray-900 dark:text-gray-100 font-bold">{totalPrice}</span>
                                <StripeCheckout
                                  stripeKey= 'pk_test_51PEuNtP4pK701krTnhbsyHxGPrWnU4hgcz5k4GVX4bn8mZ91lQneIn4E17T2C9mmEHY9ZPH6x7gq8N9sbonxxyyZ00fw0sjTIV'
                                  token={handleToken}
                                  billingAddress
                                  shippingAddress
                                  name='All Rentals'
                                  amount={totalPrice*100}>

                                
                                </StripeCheckout>
                                <ToastContainer />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    </div>
                
            )}

            {rentedVehicles.length < 1 && (
                       
                       <p className="font-bold text-center">No Rentals</p>
            )}
            {rentedVehicles.length >0}
            {
              <Testimonials/>
            }
           <FooterN/>
        </div>
    );
};

export default Rentals;


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function CarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>)
  );
}


function ClockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>)
  );
}


function LocateIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
