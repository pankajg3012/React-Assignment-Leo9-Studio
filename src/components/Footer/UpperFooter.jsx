import React from "react";
import "./Footer.css";

const UpperFooter = () => {
  return (
    <div>
      <div className="w-full bg-black container md:flex flex-col justify-center items-center">
        <div>
          <h2 className="text-3xl mt-5 font-bold capitalize  text-white dark:text-white">
            Get to Know
            <span className="text-Orange spantext text-3xl"> TRDEZ </span>
            Better.
          </h2>
        </div>
        <div className="w-full border-0 outline-none border-gray-100  py-10 md:flex sm:justify-around sm:flex-col sm:items-center sm:gap-4">
          <input
            type="email"
            placeholder="Enter Your Mail Id"
            className="inp-div relative inline-block  pr-10 md:pr-20 border-none focus:border-transparent focus:ring-transparent dark:bg-gray-900 dark:text-white sm:text-sm"
          />

          <button
            className="w-auto Btn-submit absolute  px-12 py-3 text-sm font-bold capitalize   sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
