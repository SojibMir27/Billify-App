import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-red-500/20 to-pink-600/20 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand + Menu */}
        <div>
          <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
            Billify
          </Link>

          <ul className="space-y-2 mt-4">
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                All Bills
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                Add Bill
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-200">
            Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                Learning Blog
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                Guides & Tips
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                Bill Management
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                All Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-200">
            Community
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                Discussion Forums
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                User Groups
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                Workshops
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600"
              >
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-200">
            Connect With Us
          </h3>

          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              className="text-gray-900 dark:text-white hover:text-blue-700"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-900 dark:text-white hover:text-blue-400"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-900 dark:text-white hover:text-pink-600"
            >
              <Instagram size={24} />
            </a>
          </div>

          <a
            href="mailto:support@billify.com"
            className="flex items-center text-gray-900 dark:text-white hover:text-blue-600"
          >
            <Mail size={18} className="mr-2" /> support@billify.com
          </a>
        </div>
      </div>

      <div className="border-t border-[#fa7171] mt-8 pt-4 text-center">
        <p className="text-sm text-gray-900 dark:text-gray-200">
          © {currentYear} Billify | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
