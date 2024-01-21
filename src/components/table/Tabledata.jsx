import React from "react";

import "./Tabledata.css";

const Tabledata = () => {
  return (
    <div className="w-[600px] h-[300px] bg-Orange rounded-md flex justify-center items-center  sm:w-96  ">
     

      <table className="w-full border-0 font-medium py-4 text-white rounded-md sm:w-96 ">
        <tr className="mt-4">
          <th></th>
          <th>NSE</th>
          <th>BSE</th>
        </tr>
        <tr className="mt-4">
          <td>ST/CCT</td>
          <td>58</td>
          <td>58</td>
        </tr>
        <tr className="mt-4">
          <td>Transaction Charges</td>
          <td>1.86875</td>
          <td>2.15625</td>
        </tr>
        <tr className="mt-4">
          <td>GST</td>
          <td>5.521725</td>
          <td>5.573475</td>
        </tr>
        <tr className="mt-4">
          <td>SEBI Charges</td>
          <td>0.0575</td>
          <td>0.0575</td>
        </tr>
        <tr className="mt-4">
          <td>Stamp Charges</td>
          <td>4.275</td>
          <td>4.275</td>
        </tr>
        <tr className="pt-4">
          <td>DP charge</td>
          <td>15.93</td>
          <td>15.93</td>
        </tr>
      </table>
    </div>
  );
};

export default Tabledata;
