import React, { useState } from "react";
import PiChart from "./PiChart";
import Modal from "./Modal";
import Sidebar from "./Sidebar/Sidebar";



const Home = () => {

    const [showmodal,setShowModal] = useState(false);

 

  return (
    <div>
      <div className="bg-slate-400  grid-cols-2  lg:flex lg:flex-row md:flex-row lg:justify-evenly mt-8 sm:flex-col items-center justify-center">
        <div className="lg:flex md:flex  sm:flex-col">
          <div className="w-full lg:flex lg:flex-row md:flex md:flex-row sm:flex-col px-5 md:justify-center md:items-center ">
            <h1 className="text-black text-3xl  font-extrabold capitalize mx-10 mt-2 md:mt-2  ">
              Equity Delivery
            </h1>
            <button onClick={()=>setShowModal(true)} className=" Btn-submit top-4 mt-1 px-6 py-3 text-sm font-bold capitalize sm:mt-2  
            sm:w-32  sm:shrink-0">
              View Details
            </button>
            {showmodal &&  <Modal setShowModal={setShowModal} />}
          </div>
         <Sidebar/>
        </div>
        <div className="bg-white h-3/5 sm:flex-col sm:items-center">
          <PiChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
