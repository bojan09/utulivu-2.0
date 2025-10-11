import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-background/75 py-8 animate-fade animate-duration-[700ms]">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="animate-slide-up animate-duration-[700ms] animate-delay-0">
            <h3 className="text-2xl font-bold text-amber-700 mb-2">
              Utulivu Tours
            </h3>
            <p className="text-sm leading-6">
              Discover serenity with <b>Utulivu Tours.</b> Explore the world’s
              hidden gems with peace of mind and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up animate-duration-[700ms] animate-delay-100">
            <h4 className="text-lg font-semibold text-amber-700 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-background/75 hover:text-sky-500  hover:bg-opacity-20 hover:scale-105 transition-all duration-300 ease-in-out block p-1 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="text-background/75 hover:text-sky-500  hover:bg-opacity-20 hover:scale-105 transition-all duration-300 ease-in-out block p-1 rounded"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-background/75 hover:text-sky-500  hover:bg-opacity-20 hover:scale-105 transition-all duration-300 ease-in-out block p-1 rounded"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-background/75 hover:text-sky-500  hover:bg-opacity-20 hover:scale-105 transition-all duration-300 ease-in-out block p-1 rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up animate-duration-[700ms] animate-delay-200">
            <h4 className="text-lg font-semibold text-amber-700 mb-4 ">
              Contact Us
            </h4>
            <p className="text-sm mt-2">Email: info@utulivutours.com</p>
            <p className="text-sm my-1">Phone: +1-800-UTULIVU</p>
            <p className="text-sm">Address: 123 Serenity Lane, Travel City</p>
          </div>

          {/* Social Media */}
          <div className="animate-slide-up animate-duration-[700ms] animate-delay-300">
            <h4 className="text-lg font-semibold text-amber-700 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/75 hover:text-sky-500 hover:scale-110 hover:opacity-90 transition-all duration-300 ease-in-out"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/75 hover:text-sky-500 hover:scale-110 hover:opacity-90 transition-all duration-300 ease-in-out"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.317 3.608 1.292.975.975 1.23 2.242 1.292 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.317 2.633-1.292 3.608-.975.975-2.242 1.23-3.608 1.292-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.317-3.608-1.292-.975-.975-1.23-2.242-1.292-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.317-2.633 1.292-3.608.975-.975 2.242-1.23 3.608-1.292 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.013-4.947.072-1.314.059-2.593.325-3.583 1.315C2.45 2.452 1.684 3.73 1.625 4.947 1.566 6.225 1.553 6.636 1.553 9.995v4.01c0 3.359.013 3.77.072 5.05.059 1.214.325 2.39 1.316 3.382.99.99 2.168 1.257 3.382 1.316 1.28.059 1.691.072 5.05.072s3.77-.013 5.05-.072c1.214-.059 2.39-.325 3.382-1.316.99-.99 1.257-2.168 1.316-3.382.059-1.28.072-1.691.072-5.05v-4.01c0-3.359-.013-3.77-.072-5.05-.059-1.214-.325-2.39-1.316-3.382-.99-.99-2.168-1.257-3.382-1.316C15.67.236 15.259.223 11.999.223Z" />
                  <path d="M12 7.353c-2.136 0-3.871 1.735-3.871 3.871 0 2.136 1.735 3.871 3.871 3.871 2.136 0 3.871-1.735 3.871-3.871 0-2.136-1.735-3.871-3.871-3.871Zm0 6.366c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667Zm5.203-7.681c0 .536-.435.971-.971.971-.536 0-.971-.435-.971-.971 0-.536.435-.971.971-.971.536 0 .971.435.971.971Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-[--border] text-center text-xs background/75">
          <p>
            &copy; {new Date().getFullYear()} UtulivuTours. All rights reserved.
            | Designed and Coded by Bojan S.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
