import React, { useState, useEffect } from 'react';
import '../index.css';
import { auth } from '../firebase/fire'; 
import { setDoc, doc } from 'firebase/firestore';


import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "../components/ui/carousel"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { Label } from "../components/ui/label"


import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/fire';
import Vehicles from '../functions/Vehicles';
import FooterN from '../components/FooterN';





const AppVehicleRentals = (props) => {
  // User UID function
  function GetUserUid(){
    const [uid, setUid]=useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                setUid(user.uid);
            }
        })
    },[])
    return uid;
  }

  const uid = GetUserUid();
  
  // State of vehicles
  const [vehicles, setVehicles] = useState([]);

  // Retrieval of vehicles
  const getVehicles = async () => {
    const VehiclesCollection = await getDocs(collection(db, 'Vehicles'));
    const vehiclesArray = [];
    VehiclesCollection.forEach((doc) => {
      var data = doc.data();
      data.ID = doc.id;
      vehiclesArray.push(data);
    });
    setVehicles(vehiclesArray);
  }

  useEffect(() => {
    getVehicles();
  }, []);

  const addToRent = (vehicle) =>{
    if(uid!==null){
      let Vehicle = {...vehicle};
      Vehicle['qty']=1;
      Vehicle['TotalRentalPrice']=Vehicle.qty*Vehicle.price;
      setDoc(doc(db, 'Rentals of ' + uid, vehicle.ID), Vehicle).then(()=>{
          console.log('Successfully added to rentals!');
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    }
    else{
      props.history.push('/login');
    }
  }



 return (

        <div>
            

      <div className="w-full">
        <Carousel className="w-full max-w-[1400px] mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
                <img
                  alt="Car Carousel Image"
                  className="w-full h-full object-cover"
                  height={600}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "1400/600",
                    objectFit: "cover",
                  }}
                  width={1400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                  <div className="max-w-2xl space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                      Discover Your Dream Car
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
                      Browse our extensive collection of high-quality vehicles and find the perfect fit for your
                      lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
                <img
                  alt="Car Carousel Image"
                  className="w-full h-full object-cover"
                  height={600}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "1400/600",
                    objectFit: "cover",
                  }}
                  width={1400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                  <div className="max-w-2xl space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                      Experience the Thrill
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
                      Explore our selection of high-performance vehicles and unleash your driving passion.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
                <img
                  alt="Car Carousel Image"
                  className="w-full h-full object-cover"
                  height={600}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "1400/600",
                    objectFit: "cover",
                  }}
                  width={1400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                  <div className="max-w-2xl space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                      Elevate Your Driving Experience
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
                      Browse our premium selection of luxury vehicles and indulge in unparalleled comfort and style.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="bg-white dark:bg-gray-950 shadow-lg rounded-lg mx-4 md:mx-8 -mt-12 relative z-10 p-4 md:p-6">
          <form className="flex items-center gap-2 md:gap-4">
            <div className="flex-1">
              <Input className="w-full" placeholder="Search for cars..." type="search" />
            </div>
            <Button
              style={{
                backgroundColor: "#004AAD",
              }}
              variant="primary"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 p-4 md:p-8">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Categories</h3>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="category-sedan" />
                  Sedans
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="category-suv" />
                  SUVs
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="category-truck" />
                  Trucks
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="category-sports" />
                  Sports Cars
                </Label>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Price Range</h3>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-sm" htmlFor="price-min">
                    Min
                  </Label>
                  <Input className="w-24" id="price-min" placeholder="$10,000" type="number" />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-sm" htmlFor="price-max">
                    Max
                  </Label>
                  <Input className="w-24" id="price-max" placeholder="$100,000" type="number" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Availability</h3>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="available" />
                  In Stock
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="booked" />
                  Sold Out
                </Label>
              </div>
            </div>
            <Button
              className="w-full"
              style={{
                backgroundColor: "#368ce7",
                color: "#deecfb",
                }}
              variant="primary"
            >
              Apply Filters
            </Button>
          </div>
        </div>

        {vehicles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         <Vehicles vehicles = {vehicles} addToRent = {addToRent}/>
          
        </div>
        )}

        {vehicles.length < 1 && (
          <div className='container-fluid'>Retrieving Vehicles - Please wait for firebase...</div>
        )}
      </div>
    
      <FooterN/>
    </div>
    
    );
};

export default AppVehicleRentals;