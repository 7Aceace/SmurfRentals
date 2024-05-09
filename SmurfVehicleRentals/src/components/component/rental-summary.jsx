
import { Separator } from "../components/ui/separator"
import './summary.css'
import './layoutsummary'
export function RentalSummary() {
  return (
    (<section
      className="bg-gray-100 dark:bg-gray-800 py-4 px-4 sm:px-6 md:px-8 lg:px-10">
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
                <span className="text-gray-700 dark:text-gray-400 font-medium">Toyota Camry</span>
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
                <span className="text-gray-900 dark:text-gray-100 font-bold">$450</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
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
