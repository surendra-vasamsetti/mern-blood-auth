// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <nav className="bg-red-500 text-white ">
//       <div className="flex justify-around  p-3 mx-auto">
//         <div className="">
//           <Link to="/">
//             <h1>BLOODROP</h1>
//           </Link>
//         </div>
//         <div>
//           <ul className="flex ml-2-3 gap-6">
//             <Link to="/">
//               <li>HOME</li>
//             </Link>
//             <Link to="/about  ">
//               {" "}
//               <li>ABOUT</li>
//             </Link>
//             <Link to="/register">
//               {" "}
//               <li>SIGNUP</li>
//             </Link>
//             <Link to="/login">
//               {" "}
//               <li>SIGNIN</li>
//             </Link>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

//current component

// const Header = () => {
//   return (
//     <nav className=" body-font bg-red-800 text-white">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl">BLOODROP</span>
//         </div>
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a href="/" className="mr-5 hover:text-gray-900">
//             HOME
//           </a>
//           <a href="/profile" className="mr-5 hover:text-gray-900">
//             USER
//           </a>
//           <a href="/register" className="mr-5 hover:text-gray-900">
//             SIGNUP
//           </a>
//           <a href="/login" className="mr-5 hover:text-gray-900">
//             SIGNIN
//           </a>
//         </nav>
//         <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//           Know More
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-4 h-4 ml-1"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;
// import React, { useRef } from "react";

// const Header = () => {
//   const donorRef = useRef(null);
//   const bloodBankRef = useRef(null);
//   const adminRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <nav className="body-font bg-red-800 text-white">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl">BLOODROP</span>
//         </div>
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a href="/" className="mr-5 hover:text-gray-900">
//             HOME
//           </a>
//           <button
//             onClick={() => scrollToSection(donorRef)}
//             className="mr-5 hover:text-gray-900 cursor-pointer"
//           >
//             DONOR
//           </button>
//           <button
//             onClick={() => scrollToSection(bloodBankRef)}
//             className="mr-5 hover:text-gray-900 cursor-pointer"
//           >
//             BLOOD BANK
//           </button>
//           <button
//             onClick={() => scrollToSection(adminRef)}
//             className="mr-5 hover:text-gray-900 cursor-pointer"
//           >
//             ADMIN
//           </button>
//           <a href="/register" className="mr-5 hover:text-gray-900">
//             SIGNUP
//           </a>
//           <a href="/login" className="mr-5 hover:text-gray-900">
//             SIGNIN
//           </a>
//         </nav>
//         <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//           Know More
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-4 h-4 ml-1"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React, { useState } from "react";
import PropTypes from "prop-types";
import logoImage from "../assests/bloodrop.png";

const Header = ({
  donorRef,
  bloodBankRef,
  adminRef,
  searchBloodBankRef,
  searchVoluntaryDonorsRef,
  findNearBloodBanksRef,
}) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className="body-font bg-red-800 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img
            src={logoImage}
            alt="Bloodrop Logo"
            className="w-10 h-10 p-2 bg-white rounded-full"
          />
          <span className="ml-3 text-xl">BLOODROP</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900">
            HOME
          </a>
          <div className="relative">
            <button
              onClick={toggleUserDropdown}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              USER
            </button>
            {isUserDropdownOpen && (
              <div className="absolute bg-white text-black right-0 mt-2 w-48 rounded-lg shadow-lg">
                <button
                  onClick={() => {
                    scrollToSection(donorRef);
                    setIsUserDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  DONOR
                </button>
                <button
                  onClick={() => {
                    scrollToSection(bloodBankRef);
                    setIsUserDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  BLOOD BANK
                </button>
                <button
                  onClick={() => {
                    scrollToSection(adminRef);
                    setIsUserDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  ADMIN
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              SERVICES
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute bg-white text-black right-0 mt-2 w-48 rounded-lg shadow-lg">
                <button
                  onClick={() => {
                    scrollToSection(searchBloodBankRef);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Search Blood Bank
                </button>
                <button
                  onClick={() => {
                    scrollToSection(searchVoluntaryDonorsRef);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Search Voluntary Donors
                </button>
                <button
                  onClick={() => {
                    scrollToSection(findNearBloodBanksRef);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                >
                  Find Near Blood Banks
                </button>
              </div>
            )}
          </div>
          <a href="/about" className="mr-5 hover:text-gray-900">
            ABOUT US
          </a>
          <a href="/register" className="mr-5 hover:text-gray-900">
            SIGNUP
          </a>
          <a href="/login" className="mr-5 hover:text-gray-900">
            SIGNIN
          </a>
        </nav>
        <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Know More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

Header.propTypes = {
  donorRef: PropTypes.object.isRequired,
  bloodBankRef: PropTypes.object.isRequired,
  adminRef: PropTypes.object.isRequired,
  searchBloodBankRef: PropTypes.object.isRequired,
  searchVoluntaryDonorsRef: PropTypes.object.isRequired,
  findNearBloodBanksRef: PropTypes.object.isRequired,
};

export default Header;
