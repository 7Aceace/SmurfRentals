
import { Link } from "react-router-dom";

export function NewSitemap() {
  return (
    (
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white mb-64 border border-gray-500 border-opacity-50 shadow-md rounded ring-2 ring-blue-500 ring-opacity-75"> <div className="container px-4 md:px-6">
      <h1 className=" text-5xl font-bold mb-8">Sitemap</h1> 
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-2">
            <h3 className="text-2xl font-semibold">Main Pages</h3>
            <Link to="/"
              className=" text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              Home
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to="/Vehicles">
              Vehicles
            </Link>
            <Link
              className=" text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              Services
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to="/ContactUs">
              Contact
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="text-2xl font-semibold">Resources</h3>
            <Link
              className=" text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to="/Blogs">
              Blog
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to="/">
              Documentation
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to="/FAQ">
              FAQ
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to='/Bookings'>
              Book Now
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="text-2xl font-semibold">Legal</h3>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"> 
              Terms of Service
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              Privacy Policy
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              Cookie Policy
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              DMCA
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="text-2xl font-semibold">Social</h3>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              Twitter
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              Facebook
            </Link>
            <Link
              className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              Instagram
            </Link>
           
          </div>
        </div>
      </div>
    </section>
    </div>)
  );
}
