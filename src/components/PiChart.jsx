import React from "react";
import { PieChart } from "@mui/x-charts";
import nse_bse from "../assets/nse_bse.png";

const PiChart = () => {
  return (
    <div className=" bg-white h-[500px]  p-4 overflow-hidden flex justify-center flex-col  my-4 rounded-md shadow-2xl md:grid md:grid-cols-1  ">
      {/* bg-white  flex justify-center lg:items-center md:flex-col  md:items-center sm:justify-center  */}
      <div className="w-[221px] h-[56px]  flex ">
        <img src={nse_bse} alt="" className="" />
      </div>
      <div className=" flex justify-center items-center md:flex-col sm:flex-col ">
        <PieChart
          className="text-ligttGray flex-col text-[14px] sm:font-medium md:w-1/3"
          series={[
            {
              data: [
                { id: 0, value: 76.15, label: "BSE" },
                { id: 1, value: 13.85, label: "NSE" },
              ],
            },
          ]}
          width={400}
          height={250}
        />
      </div>
      <div className="flex justify-evenly items-center px-2">
        <div>
          <p className="ptext">Gross P&L</p>
          <button>32,654,78</button>
        </div>
        <div>
        <p className="ptext">NET P&L</p>
          <button>12,654,78</button>
        </div>
        <div>
        <p className="ptext">Total Tax & ChargesL</p>
          <button>42,654,78</button>
        </div>
      </div>
    </div>
  );
};

export default PiChart;
