import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 dark:bg-emerald-950 text-amber-100 py-12">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4 animate-slide-up animate-duration-[700ms] animate-delay-0">
            <h3 className="text-2xl font-bold text-amber-300 dark:text-amber-200">
              Utulivu Tours
            </h3>
            <p className="text-sm text-amber-100 dark:text-amber-50 leading-6">
              Discover serenity with <b>Utulivu Tours.</b> Explore Tanzania's
              hidden gems, from Serengeti safaris to Zanzibar beaches, with
              peace of mind and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slide-up animate-duration-[700ms] animate-delay-100">
            <h4 className="text-lg font-semibold text-amber-300 dark:text-amber-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-amber-100 dark:text-amber-50 hover:text-amber-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="text-amber-100 dark:text-amber-50 hover:text-amber-400 transition-colors duration-200"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-amber-100 dark:text-amber-50 hover:text-amber-400 transition-colors duration-200"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-amber-100 dark:text-amber-50 hover:text-amber-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-slide-up animate-duration-[700ms] animate-delay-200">
            <h4 className="text-lg font-semibold text-amber-300 dark:text-amber-200 mb-4">
              Contact Us
            </h4>
            <a
              href="mailto:utulivutours@gmail.com"
              className="text-sm text-amber-100 dark:text-amber-50"
            >
              Email: utulivutours@gmail.com
            </a>
            <p className="text-sm text-amber-100 dark:text-amber-50 mt-3">
              Phone: +1-800-UTULIVU
            </p>
            <p className="text-sm text-amber-100 dark:text-amber-50">
              Address: 123 Serenity Lane, Arusha, Tanzania
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-300 dark:text-amber-200">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 dark:text-amber-50 hover:text-amber-400 hover:scale-110 transition-all duration-200"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
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
                className="text-amber-100 dark:text-amber-50 hover:text-amber-400 hover:scale-110 transition-all duration-200"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.317 3.608 1.292.975.975 1.23 2.242 1.292 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.317 2.633-1.292 3.608-.975.975-2.242 1.23-3.608 1.292-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.317-3.608-1.292-.975-.975-1.23-2.242-1.292-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.317-2.633 1.292-3.608.975-.975 2.242-1.23 3.608-1.292 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.013-4.947.072-1.314.059-2.593.325-3.583 1.315C2.45 2.452 1.684 3.73 1.625 4.947 1.566 6.225 1.553 6.636 1.553 9.995v4.01c0 3.359.013 3.77.072 5.05.059 1.214.325 2.39 1.316 3.382.99.99 2.168 1.257 3.382 1.316 1.28.059 1.691.072 5.05.072s3.77-.013 5.05-.072c1.214-.059 2.39-.325 3.382-1.316.99-.99 1.257-2.168 1.316-3.382.059-1.28.072-1.691.072-5.05v-4.01c0-3.359-.013-3.77-.072-5.05-.059-1.214-.325-2.39-1.316-3.382-.99-.99-2.168-1.257-3.382-1.316C15.67.236 15.259.223 11.999.223z" />
                  <path d="M12 7.353c-2.136 0-3.871 1.735-3.871 3.871 0 2.136 1.735 3.871 3.871 3.871 2.136 0 3.871-1.735 3.871-3.871 0-2.136-1.735-3.871-3.871-3.871zm0 6.366c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.203-7.681c0 .536-.435.971-.971.971-.536 0-.971-.435-.971-.971 0-.536.435-.971.971-.971.536 0 .971.435.971.971z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-emerald-800 dark:border-emerald-700 text-center text-xs text-amber-200 dark:text-amber-100">
          <p>
            &copy; {new Date().getFullYear()} Utulivu Tours. All rights
            reserved. | Designed and Coded by Bojan S.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
