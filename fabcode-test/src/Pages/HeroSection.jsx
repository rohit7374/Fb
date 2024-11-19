import React from "react";
import fabcodeImage from "../Images/fabcode.png";
import ogImage from "../Images/Vector.png";
import familyImage from "../Images/Frame 1321315257.png";

function App() {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white min-h-screen gap-14 p-4">
      {/* Left Section */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "646px",
          height: "718px",
          left: "32px",
          borderRadius: "20px 0px 0px 0px",
          overflow: "hidden",
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${fabcodeImage})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center rounded-3xl">
            {/* Heading */}
            <h1 className="text-white text-5xl font-bold mb-6">
              LET THE GAMES BEGIN
            </h1>
            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
                SHOP NOW
              </button>
              <button className="bg-gray-200 py-2 px-6 rounded-lg hover:bg-gray-300 transition">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="flex flex-col  justify-center"
        style={{
          width: "646px",
          height: "718px",
          top: "136px",
          left: "763px",
          borderRadius: "30px",
          backgroundColor: "#f7faff",
          padding: "40px",
        }}
      >
        <h2 className="text-green-500 text-lg font-semibold mb-2">LET'S PLAY</h2>
        <h3 className="text-blue-500 text-3xl font-bold mb-4">
          WIN POPDARTS FOR LIFE
        </h3>
        <p className="text-gray-600 mb-8">
          Want to get every new Pro Pack for life? Enter to win by providing
          your name, email, and phone number below.
        </p>
        {/* Form */}
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="text"
            placeholder="NAME"
            className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            SIGN UP NOW
          </button>
        </form>
      </div>
    </div>


    <div className="flex flex-col items-center justify-center bg-blue-500 min-h-screen px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-white text-4xl lg:text-5xl font-bold mb-2 leading-tight">
          EXPLORE POPDARTS PRODUCTS <br /> LINES OF FUN
        </h1>
        <p className="text-white text-lg lg:text-xl">
          The hottest game of the summer!
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-stretch w-full max-w-6xl">
        {/* Left Section */}
        <div className="bg-white rounded-lg shadow-lg flex flex-col lg:w-1/3">
          <div className="bg-purple-100 text-purple-600 text-sm font-bold py-2 px-4 rounded-t-lg text-center">
            FUN & CULTISH
          </div>
          <div className="p-6 flex flex-col items-center">
            <img
              src={ogImage}
              alt="OG Logo"
              className="w-20 h-20 mb-4"
            />
            <p className="text-gray-700 text-center mb-4">
              Josh and Jason Carman grew up in Pennsylvania, graduated college,
              and went on to establish their careers in finance and business.
            </p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 transition">
              EXPLORE OG LINE
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative lg:w-2/3 rounded-lg overflow-hidden shadow-lg">
          <img
            src={familyImage}
            alt="Family Playing Popdarts"
            className="w-full h-full object-cover"
          />
          {/* Save Badge */}
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow">
            SAVE 25%
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="mt-12 w-full flex justify-center">
        <button className="bg-white text-blue-500 py-3 px-12 rounded-lg font-bold hover:bg-gray-200 transition shadow">
          SHOP ALL
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
