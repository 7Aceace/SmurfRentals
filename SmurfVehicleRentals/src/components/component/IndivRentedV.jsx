import { Label } from "../ui/label"
import {Plus} from "../component/@radix-ui/react-icons"
import { Button } from "../ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "../ui/popover"
import { Calendar } from "../ui/calendar"
import { Checkbox } from "../ui/checkbox"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
import { AvatarImage, AvatarFallback, Avatar } from "../ui/avatar"

export const IndivRentedV = ({rentedVehicle}) =>{
  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F4F6] dark:bg-[#1F2937] px-4 md:px-6 shadow-lg">
        <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <img
              alt="Vehicle"
              className="aspect-video w-full rounded-lg object-cover"
              height={500}
              src={rentedVehicle.url}
              width={800}
            />
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{rentedVehicle.name}</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Experience the thrill of the open road in this sleek and powerful sports car.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <CarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <div className="font-medium">Make</div>
                  <div className="text-gray-500 dark:text-gray-400">Acme</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <GaugeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <div className="font-medium">Model</div>
                  <div className="text-gray-500 dark:text-gray-400">Roadster</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <div className="font-medium">Year</div>
                  <div className="text-gray-500 dark:text-gray-400">2023</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ParkingMeterIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <div className="font-medium">Mileage</div>
                  <div className="text-gray-500 dark:text-gray-400">25,000 mi</div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Amenities</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <BluetoothIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  Bluetooth
                </li>
                <li className="flex items-center gap-2">
                  <MapIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  GPS
                </li>
                <li className="flex items-center gap-2">
                  <CarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  Cruise Control
                </li>
                <li className="flex items-center gap-2">
                  <HeaterIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  Heated Seats
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E5E7EB] dark:bg-[#374151] px-4 md:px-6">
        <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book Your Rental</h2>
            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-2">
                <Button className="flex-1" variant="outline">
                  <MinusIcon className="h-4 w-4" />
                </Button>
                <div className="text-2xl font-bold">1</div>
                <Button className="flex-1" variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-[#1F2937]">
                  <div className="grid gap-2 p-4 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#1F2937]">
                    <Label htmlFor="extras">Optional Extras & Services</Label>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="prepaid-gas" name="extras" />
                        <Label htmlFor="prepaid-gas">Prepaid Gas</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="roadside-assistance" name="extras" />
                        <Label htmlFor="roadside-assistance">Roadside Assistance</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="airport-fees" name="extras" />
                        <Label htmlFor="airport-fees">Airport Fees</Label>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-[#1F2937]">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">₱{rentedVehicle.price}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">per day</div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-[#1F2937]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-medium">Total</div>
                        <div className="text-2xl font-bold">₱{rentedVehicle.price*5}</div>
                      </div>
                      <div className="text-2xl font-bold">5 days</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Button className="flex-1 mr-2" size="lg">
                    Book Now
                  </Button>
                  <Button size="lg" variant="destructive">
                    <TrashIcon className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-[#1F2937]">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="w-full justify-start text-left font-normal" id="start-date" variant="outline">
                        <CalendarDaysIcon className="mr-2 h-4 w-4 -translate-x-1" />
                        June 1, 2023
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto p-0">
                      <Calendar initialFocus mode="single" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="w-full justify-start text-left font-normal" id="end-date" variant="outline">
                        <CalendarDaysIcon className="mr-2 h-4 w-4 -translate-x-1" />
                        June 6, 2023
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto p-0">
                      <Calendar initialFocus mode="single" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="total-days">Total Days</Label>
                  <div className="text-2xl font-bold text-gray-500 dark:text-gray-400">5 days</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-[#1F2937]">
              <div className="grid gap-2">
                <Label htmlFor="pickup-location">Pick Up Location</Label>
                <Select id="pickup-location">
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="location1">Location 1</SelectItem>
                    <SelectItem value="location2">Location 2</SelectItem>
                    <SelectItem value="location3">Location 3</SelectItem>
                  </SelectContent>
                </Select>
                <Label htmlFor="dropoff-location">Drop Off Location</Label>
                <Select id="dropoff-location">
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="location1">Location 1</SelectItem>
                    <SelectItem value="location2">Location 2</SelectItem>
                    <SelectItem value="location3">Location 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BluetoothIcon(props) {
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
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </svg>)
  );
}


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


function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>)
  );
}


function HeaterIcon(props) {
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
      <path d="M11 8c2-3-2-3 0-6" />
      <path d="M15.5 8c2-3-2-3 0-6" />
      <path d="M6 10h.01" />
      <path d="M6 14h.01" />
      <path d="M10 16v-4" />
      <path d="M14 16v-4" />
      <path d="M18 16v-4" />
      <path
        d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
      <path d="M5 20v2" />
      <path d="M19 20v2" />
    </svg>)
  );
}


function MapIcon(props) {
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
        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>)
  );
}


function ParkingMeterIcon(props) {
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
      <path d="M9 9a3 3 0 1 1 6 0" />
      <path d="M12 12v3" />
      <path d="M11 15h2" />
      <path
        d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" />
      <path d="M12 19v3" />
    </svg>)
  );
}


function StarIcon(props) {
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
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}


function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}




function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}