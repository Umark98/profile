import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { FaWhatsapp } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <div>
      <div
        id="GetInTouchSection"
        data-aos="fade-up"
        className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
      >
        {/* Title Section */}
        <div className="flex flex-row items-center">
          <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
          <div className="flex flex-row space-x-2 items-center">
            <span className="text-AAsecondary font-sans text-sm sm:text-base"> 04.</span>
            <span className="font-sans text-AAsecondary text-base">What&apos;s Next?</span>
          </div>
        </div>

        {/* Get In Touch Section */}
        <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
          Get In Touch
        </span>
        <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
          Although I&apos;m always open for any new opportunities, my inbox is open. Whether you have a question or just
          want to say hi, I&apos;ll try my best to get back to you!
        </p>

        {/* Buttons Section */}
        <div className="pt-4 flex space-x-4 items-center">
          {/* Say Hello Button */}
          <a href="https://wa.link/8u5pbu">
            <button
              className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded"
            >
              Let&apos;s Chat
            </button>
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.link/8u5pbu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
