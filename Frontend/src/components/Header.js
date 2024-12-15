import React from "react";

const Header = ({ searchQuery, onSearch }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        value={searchQuery}
        onChange={onSearch}
        className="p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        placeholder="Search..."
      />
      <div className="flex items-center space-x-4">
        <span className="text-2xl cursor-pointer hover:text-blue-500 transition duration-200">
          🔔
        </span>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-semibold cursor-pointer hover:bg-blue-600 transition duration-200">
          C
        </div>
      </div>
    </div>
  );
};

export default Header;
