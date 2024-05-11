
import { TabsTrigger, TabsList, TabsContent, Tabs } from "../../components/ui/tabs"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../../components/ui/select"
import { Button } from "../../components/ui/button"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "../../components/ui/carousel"
import { CardHeader, CardContent, Card } from "../../components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "../../components/ui/avatar"
import { Link } from "react-router-dom" 
import  Map  from "../Map"
import '../../index.css'

export function BookNow() {
  return (
    <>
      <div className="w-full max-w-none mx-auto p-6 md:p-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Find Your Perfect Ride</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Search for vehicles to rent or tours to book in your area.
            </p>
          </div>
          <Tabs className="w-full" defaultValue="vehicles">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
              <TabsTrigger value="tours">Tours</TabsTrigger>
            </TabsList>
            <TabsContent value="vehicles">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <div className="relative">
                        <Input className="pr-10" id="start-date" placeholder="Select start date" type="text" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <CalendarIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <div className="relative">
                        <Input className="pr-10" id="end-date" placeholder="Select end date" type="text" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <CalendarIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-type">Vehicle Type</Label>
                      <Select id="vehicle-type">
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Car</SelectItem>
                          <SelectItem value="truck">Truck</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="motorcycle">Motorcycle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <Input className="pr-10" id="location" placeholder="Enter location" type="text" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <SearchIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="search-query">Search</Label>
                      <div className="relative">
                        <Input className="pr-10" id="search-query" placeholder="Search for a vehicle" type="text" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <SearchIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <Map/>
                </div>
              </div>
              <div className="text-center">
                <Button className="w-full md:w-auto" type="submit">
                  Search
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="tours">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="start-date-tours">Start Date</Label>
                      <div className="relative">
                        <Input className="pr-10" id="start-date-tours" placeholder="Select start date" type="text" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <CalendarIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date-tours">End Date</Label>
                      <div className="relative">
                        <Input className="pr-10" id="end-date-tours" placeholder="Select end date" type="text" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <CalendarIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tour-type">Tour Type</Label>
                      <Select id="tour-type">
                        <SelectTrigger>
                          <SelectValue placeholder="Select tour type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="walking">Walking Tour</SelectItem>
                          <SelectItem value="food">Food Tour</SelectItem>
                          <SelectItem value="city">City Tour</SelectItem>
                          <SelectItem value="nature">Nature Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location-tours">Location</Label>
                      <div className="relative">
                        <Input className="pr-10" id="location-tours" placeholder="Enter location" type="text" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <SearchIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="search-query-tours">Search</Label>
                      <div className="relative">
                        <Input className="pr-10" id="search-query-tours" placeholder="Search for a tour" type="text" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <SearchIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-span-1 md:col-span-1">
                <Map/>
                </div>
              </div>
              <div className="text-center">
                <Button className="w-full md:w-auto" type="submit">
                  Search
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="w-full max-w-none mx-auto mt-8 md:mt-12">
        <Carousel className="w-full border rounded-lg shadow-lg">
          <CarouselContent>
            <CarouselItem>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Luxury Sedan</h3>
                    <p className="text-gray-500 dark:text-gray-400">Experience the ultimate in comfort and style.</p>
                  </div>
                  <img
                    alt="Luxury Sedan"
                    className="rounded-md"
                    height={225}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/225",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Rugged SUV</h3>
                    <p className="text-gray-500 dark:text-gray-400">Conquer any terrain with our powerful SUV.</p>
                  </div>
                  <img
                    alt="Rugged SUV"
                    className="rounded-md"
                    height={225}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/225",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Compact Hatchback</h3>
                    <p className="text-gray-500 dark:text-gray-400">Efficient and easy to maneuver in the city.</p>
                  </div>
                  <img
                    alt="Compact Hatchback"
                    className="rounded-md"
                    height={225}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/225",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-full max-w-none mx-auto mt-8 md:mt-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <img
                  alt="Blog Post Image"
                  className="rounded-t-lg object-cover w-full"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/300",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">The Future of Autonomous Vehicles</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Exploring the latest advancements in self-driving car technology and their impact on the
                    transportation industry.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage alt="Author Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">May 11, 2024</div>
                    </div>
                  </div>
                  <Link className="text-primary hover:underline" href="#">
                    Read more
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  alt="Blog Post Image"
                  className="rounded-t-lg object-cover w-full"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/300",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">The Rise of Electric Vehicles</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Examining the growing popularity of electric vehicles and their impact on the environment and the
                    automotive industry.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage alt="Author Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Doe</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">May 11, 2024</div>
                    </div>
                  </div>
                  <Link className="text-primary hover:underline" href="#">
                    Read more
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  alt="Blog Post Image"
                  className="rounded-t-lg object-cover w-full"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/300",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">The Future of Mobility</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Exploring the latest trends and innovations in the transportation industry, from ride-sharing to
                    micromobility.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage alt="Author Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Smith</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">May 11, 2024</div>
                    </div>
                  </div>
                  <Link className="text-primary hover:underline" href="#">
                    Read more
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
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


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}
