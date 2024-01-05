import React from "react";
import { PieChart } from "@mui/x-charts";
import nse_bse from "../assets/nse_bse.png";

const PiChart = () => {
  return (
    <div className=" bg-white  flex justify-center lg:items-center md:flex-col  md:items-center sm:justify-center   ">
      <div className="w-[221px] h-[56px]  flex ">
        <img src={nse_bse} alt="" className="" />
      </div>
      <div className=" flex justify-center items-center md:flex-col sm:flex-col ">
       
        <PieChart
          className="text-ligttGray flex-col text-[14px] sm:font-medium md:w-1/3"
          series={[
            {
              data: [
                { id: 0, value: 75.15, label: "BSE" },
                { id: 1, value: 13.85, label: "NSE" },
              ],
            },
          ]}
          width={400}
          height={250}
        />
      </div>
      <div>
        <p>
          <span></span>
        </p>
      </div>
    </div>
  );
};

export default PiChart;
