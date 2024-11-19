import React from "react";
import popdartsImage from "../Images/Frame 1321315252.png";
import appStoreIcon from "../Images/Google Play Black Border.png";
import googlePlayIcon from "../Images/App Store Black Border.png";
import dart2 from "../Images/image 2.png";
import dart3 from "../Images/image 3.png";

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Blue Section */}
      <div className="bg-blue-500 text-white px-6 py-16 relative mt-10 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              POPDARTS: SCORE KEEPER
            </h1>
            <p className="mt-4 text-lg">
              Josh and Jason Carman grew up in Pennsylvania, graduated college,
              and went on to establish their careers in finance.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <img
                src={appStoreIcon}
                alt="Download on App Store"
                className="w-40 h-auto cursor-pointer"
              />
              <img
                src={googlePlayIcon}
                alt="Get it on Google Play"
                className="w-40 h-auto cursor-pointer"
              />
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Extending Out */}
              <img
                src={popdartsImage}
                alt="Popdarts App"
                className="w-4/5 lg:w-3/4 drop-shadow-xl rotate-6 relative z-10"
                style={{ transform: "translateX(10%)" }} // Moves image outside container
              />

              {/* Floating Darts */}
              <img
                src={dart2}
                alt="Dart 1"
                className="absolute -top-12 -left-16 w-14 lg:w-20 rotate-45"
              />
              <img
                src={dart3}
                alt="Dart 2"
                className="absolute top-1/3 -right-10 w-14 lg:w-20 rotate-[30deg]"
              />
              <img
                src={dart3}
                alt="Dart 3"
                className="absolute bottom-0 -left-10 w-12 lg:w-16 rotate-[15deg]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Connect Community Section */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Social Media Links */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-blue-500 font-bold text-lg">
              CONNECT COMMUNITY
            </h2>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <a href="#" className="text-gray-500">
                <i className="fab fa-instagram text-3xl"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-tiktok text-3xl"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-facebook text-3xl"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-youtube text-3xl"></i>
              </a>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto gap-6">
            <p className="text-blue-500 text-center lg:text-left lg:w-2/3">
              Get 10% off your first order, exclusive early access to new
              product launches, and the opportunity to suggest new products.
              Don't miss out—join now!
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="py-3 px-4 border border-gray-300 rounded-lg w-full lg:w-auto"
              />
              <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
