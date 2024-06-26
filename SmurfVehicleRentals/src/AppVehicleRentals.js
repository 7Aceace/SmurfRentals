import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import {Navigate} from "react-router-dom";
import UserRoutes from './routes/UserRoutes';
import  NonUserRoutes from './routes/NonUserRoutes'

import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "./components/ui/carousel"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { Checkbox } from "./components/ui/checkbox"
import { Label } from "./components/ui/label"
import { UserAuth } from './context/AuthContext';

const AppVehicleRentals = () => {
const{ isLoggedOut } = UserAuth();
 return (

        <div>
         {isLoggedOut ? <UserRoutes /> : <Navigate to={<NonUserRoutes />} />}
            <div className='container'>
                <Navbar/>
            </div>

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
                backgroundColor: "#004AAD",
              }}
              variant="primary"
            >
              Apply Filters
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Car Product"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">2023 Acme Sedan</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Experience the smooth ride of this modern sedan.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">$25,000</span>
                <Button
                  style={{
                    backgroundColor: "#004AAD",
                  }}
                  variant="primary"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Car Product"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">2022 Acme SUV</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Conquer the road in this spacious and capable SUV.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">$35,000</span>
                <Button
                  style={{
                    backgroundColor: "#004AAD",
                  }}
                  variant="primary"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Car Product"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">2021 Acme Truck</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Haul your gear in style with this rugged and dependable truck.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">$45,000</span>
                <Button
                  style={{
                    backgroundColor: "#004AAD",
                  }}
                  variant="primary"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Car Product"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">2020 Acme Sports Car</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Experience the thrill of the open road in this high-performance sports car.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">$65,000</span>
                <Button
                  style={{
                    backgroundColor: "#004AAD",
                  }}
                  variant="primary"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Car Product"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">2019 Acme Sedan</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Enjoy the comfort and style of this classic sedan.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">$20,000</span>
                <Button
                  style={{
                    backgroundColor: "#004AAD",
                  }}
                  variant="primary"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Car Product"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">2018 Acme SUV</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Explore the great outdoors in this rugged and capable SUV.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">$30,000</span>
                <Button
                  style={{
                    backgroundColor: "#004AAD",
                  }}
                  variant="primary"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
           
    </div>
    );
};

export default AppVehicleRentals;