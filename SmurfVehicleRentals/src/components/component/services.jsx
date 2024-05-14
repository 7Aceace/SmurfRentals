
import { Button } from "../ui/button"
import { Link } from "react-router-dom";
export function Services() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore the City</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Discover the best way to experience the city with our rental services. Whether you want to explore on
                your own or join a guided tour, we've got you covered.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <CarIcon className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Self-Drive</h3>
                  <p className="text-gray-500 dark:text-gray-400">Rent a car and explore the city at your own pace.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapIcon className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Guided Tours</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Discover the city's top attractions with expert local guides.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <UserIcon className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">With Driver</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Relax and enjoy the ride with a professional driver.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BriefcaseIcon className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Car Leasing</h3>
                  <p className="text-gray-500 dark:text-gray-400">Long-term car rental solutions for businesses.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
  <video
    controls
    className="rounded-lg"
    height="500"
    width="650"
    style={{
        objectFit: "cover",
    }}
    src="/SMURF_Advertisement.mp4"
    autoPlay
    loop
    muted
  >
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rental Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-6 rounded-lg border border-blue-500 bg-white p-6 shadow-lg transition-colors hover:bg-gray-700 dark:bg-gray-950 dark:hover:bg-gray-600">
  <CarIcon className="h-32 w-32 text-blue-500" />
  <div>
    <h3 className="text-center text-lg font-semibold">Self-Drive</h3>
    <ul className="mt-2 space-y-1 text-left text-sm text-gray-500 dark:text-gray-400 pl-5 list-disc">
      <li>Rent a car and explore the city</li>
      <li>Flexible schedule and itinerary</li>
      <li>No need for public transportation</li>
      <li>Convenient and hassle-free</li>
    </ul>
  </div>
  <div className="w-full flex justify-center">
    <Button size="sm" variant="outline">
            
  <Link to="/Bookings" className="no-underline text-current">
        Learn More
      </Link>
      </Button>
  </div>
</div>
<div className="flex flex-col items-center gap-6 rounded-lg border border-blue-500 bg-white p-6 shadow-lg transition-colors hover:bg-gray-700 dark:bg-gray-950 dark:hover:bg-gray-600">
  <MapIcon className="h-32 w-32 text-blue-500" />
  <div className="flex-grow">
    <h3 className="text-center text-lg font-semibold">Tours</h3>
    <ul className="mt-2 space-y-1 text-left text-sm text-gray-500 dark:text-gray-400 pl-5 list-disc">
      <li>Guided tours of top attractions</li>
      <li>Learn about the city's history and culture</li>
      <li>Hassle-free transportation</li>
      <li>Expert local guides</li>
    </ul>
  </div>
  <div className="w-full flex justify-center">
  <Button size="sm" variant="outline">
  <Link to="/Bookings" className="no-underline text-current">
        Learn More
      </Link>
    </Button>
  </div>
</div>
<div className="flex flex-col items-center gap-6 rounded-lg border border-blue-500 bg-white p-6 shadow-lg transition-colors hover:bg-gray-700 dark:bg-gray-950 dark:hover:bg-gray-600">
  <UserIcon className="h-32 w-32 text-blue-500" />
  <div className="flex-grow">
    <h3 className="text-center text-lg font-semibold">With Driver</h3>
    <ul className="mt-2 space-y-1 text-left text-sm text-gray-500 dark:text-gray-400 pl-5 list-disc">
      <li>Relax and enjoy the ride</li>
      <li>Professional and experienced drivers</li>
      <li>Customized itinerary</li>
      <li>Comfortable and safe transportation</li>
    </ul>
  </div>
  <div className="w-full flex justify-center">
    <Button size="sm" variant="outline">
    <Link to="/Bookings" className="no-underline text-current">
        Learn More
      </Link>
     
    </Button>
  </div>
</div>
<div className="flex flex-col items-center gap-6 rounded-lg border border-blue-500 bg-white p-6 shadow-lg transition-colors hover:bg-gray-700 dark:bg-gray-950 dark:hover:bg-gray-600">
  <BriefcaseIcon className="h-32 w-32 text-blue-500" />
  <div className="flex-grow">
    <h3 className="text-center text-lg font-semibold">Car Leasing</h3>
    <ul className="mt-2 space-y-1 text-left text-sm text-gray-500 dark:text-gray-400 pl-5 list-disc">
      <li>Long-term car rental for businesses</li>
      <li>Flexible lease terms</li>
      <li>Maintenance and insurance included</li>
      <li>Cost-effective solution</li>
    </ul>
  </div>
  <div className="w-full flex justify-center">
    
     <Button size="sm" variant="outline">      
    <Link to="/Vehicles" className="no-underline text-current">
        Learn More
      </Link>
      </Button>

  </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
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
