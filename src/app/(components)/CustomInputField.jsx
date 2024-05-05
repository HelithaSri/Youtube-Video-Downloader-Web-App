"use client";
import { useState } from "react";
// import { HiLink, HiClipboardPaste } from "react-icons/hi";
import { HiOutlineLink } from "react-icons/hi";
import { FaPaste } from "react-icons/fa6";

const CustomInputField = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePasteClick = () => {
    // Implement paste functionality here
    console.log("Paste button clicked");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-px">
      <div className="relative w-[700px] h-[60px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <HiOutlineLink className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="pl-10 pr-14 py-2 w-full h-full bg-[#1B1E35] rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Paste your link here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="group absolute inset-y-0 right-0 flex items-center px-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-r-lg focus:outline-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
          onClick={handlePasteClick}
        >
          <FaPaste className="h-5 w-5 text-black group-focus:text-white" />
        </button>
      </div>
    </div>
  );
};

export default CustomInputField;
