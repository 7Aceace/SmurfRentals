import { Link } from "react-router-dom";
import { logout } from '../../functions/auth';

import { Input } from "../../components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "../../components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "../../components/ui/dropdown-menu"
import { UserAuth } from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function NavigationBar({children}) {
    const {user} = UserAuth();
    console.log(user);  
    
    const handleLogout = () =>{
      try {
        logout();
        toast.success("You have logged out.");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    }
  return (
    (<header
      className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-gray-950 shadow">
      <Link className="flex items-center justify-center" to = '/' alt="Home Page">
        <img src="/SMURFlogo.png" className="h-40 w-30" alt="Car" />
        <span className="sr-only">Acme Vehicle Rentals</span>
      </Link>
      <ToastContainer />
      <div className="flex-1 flex items-center justify-center gap-4 sm:gap-6">
        <Link
           className="no-underline text-blue-800"
          to = '/' alt="Home Page">
          Home
        </Link>
        <Link
           className="no-underline text-blue-800"
          to='/Vehicles'>
          Vehicles
        </Link>
        <Link
           className="no-underline text-blue-800"
          to='/Blogs'>
          Blogs
        </Link>
        <Link
           className="no-underline text-blue-800"
          to='/ContactUs'>
          Contact
        </Link>
      </div>
      <div className="relative ml-auto flex items-center">
        <form className="flex items-center">
          <Input
            className="h-9 pl-8 pr-4 text-base rounded-md border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
            placeholder="  Search vehicles..."
            type="search" />
          <SearchIcon
            className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        </form>
        <Link
  className="no-underline inline-flex h-9 items-center justify-center rounded-md bg-blue-800 px-4 py-2 text-base font-medium text-gray-50 shadow transition-colors hover:bg-blue-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 ml-4"
  to='/Bookings'>
  Book Now
</Link>
<Link
  className="no-underline inline-flex h-9 items-center justify-center rounded-md bg-blue-800 px-4 py-2 text-base font-medium text-gray-50 shadow transition-colors hover:bg-blue-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 ml-4"
  to ='/Login'>
  Login
</Link>
        <div className="relative ml-4 flex items-center gap-4">
        <Link className="flex items-center" to='/Rentals'>
          <img src="/CarKeyLogo.png" className="h-10 w-10" alt="Shopping Cart" />
          <span className="sr-only">Cart</span>
        </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <ChevronDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  <span className="text-base"> <Link to='/User' className="text-black no-underline">User Dashboard</Link></span>
                </div>
              </DropdownMenuItem>
              {user?.role === 'admin' && <DropdownMenuItem>
                <Link to={'/admin-dashboard'} className="no-underline text-black">
                <div className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4" />
                  <span className="text-base">Admin Dashboard</span>
                </div>
                </Link>
              </DropdownMenuItem>}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <button onClick={handleLogout}>
                  <LogOutIcon className="h-4 w-4" />
                  <span className="text-base">Logout</span>
                  </button>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {children}
      </div>
    </header>)
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


function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}


function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
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


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path
        d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
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


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
