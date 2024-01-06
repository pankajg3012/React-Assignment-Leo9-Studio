import React from 'react'

const Header = () => {

  return (
     <div className="w-full min-h-48 px-5 bg-black  lg:flex-col  pt-3">
      <h1 className="text-ligttGray text-3xl lg:ml-6 sm:text-start sm:pt-3">Calculator</h1>
      <br />
      <div className="w-full flex justify-evenly items-center sm:flex sm:w-auto ">
        <button
          type="button"
          className="text-ligttGray font-normal capitalize hover:bg-white transition-all lg:text-gray2 rounded-lg px-4 py-4 "
        >
          Equity Delivery
        </button>
        <button
          type="button"
          className="text-ligttGray font-normal capitalize  hover:bg-white transition-all lg:text-gray2  rounded-lg px-4 py-4"
        >
          Equity Intraday
        </button>
        <button
          type="button"
          className="text-ligttGray font-normal capitalize  hover:bg-white transition-all lg:text-gray2  rounded-lg px-4 py-4 "
        >
          Equity Futures
        </button>
        <button
          type="button"
          className="text-ligttGray font-normal capitalize  hover:bg-white transition-all lg:text-gray2  rounded-lg px-4 py-4 "
        >
          Equity Options
        </button>
      </div>
    </div>
  )
}

export default Header
