import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <section className="overflow-hidden my-4 rounded-md shadow-2xl md:grid md:grid-cols-2">
        <div className=" flex-col sm:flex p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <div className=" flex justify-between items-center">
            <p className="ptext">Buy</p>
            <button className="btn_side">32,654,78</button>
          </div>
          <input type="range" id="tempB" name="temp" list="values" />

          <datalist id="values">
            <option value="0" label="1 L"></option>
            <option value="20" label="8 L"></option>
            <option value="40" label="16 L"></option>
            <option value="80" label="1 L"></option>
            <option value="80" label="1 L"></option>
            <option value="100" label="1 L"></option>
          </datalist>
        </div>

        <div className=" flex-col sm:flex p-3 text-center sm:p-6 md:col-span-2 lg:p-8">
          <div className=" flex justify-between items-center">
            <p className="ptext">Sell</p>
            <button className="btn_side">32,654,78</button>
          </div>

          <input type="range" id="tempB" name="temp" list="values" />

          <datalist id="values">
            <option value="0" label="5%"></option>
            <option value="20" label="10%"></option>
            <option value="40" label="15%"></option>
            <option value="80" label="20%"></option>
            <option value="80" label="25%"></option>
            <option value="100" label="30%"></option>
          </datalist>
        </div>
        <div className=" flex-col sm:flex p-3 text-center sm:p-6 md:col-span-2 lg:p-8">
          <div className=" flex justify-between items-center">
            <p className="ptext">Qty</p>
            <button className="btn_side">100</button>
          </div>
          <input type="range" id="tempB" name="temp" list="values" />

          <datalist id="values">
            <option value="0" label="12"></option>
            <option value="20" label="24"></option>
            <option value="40" label="36"></option>
            <option value="80" label="48"></option>
            <option value="80" label="60"></option>
            <option value="100" label="72"></option>
          </datalist>
        </div>

        {/* <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Run with the pack
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
              {" "}
              Get 20% off{" "}
            </span>

            <span className="mt-2 block text-sm">
              On your next order over $50
            </span>
          </h2>

          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href=""
          >
            Get Discount
          </a>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th March, 2021 *
          </p>
        </div> */}
      </section>
    </div>
  );
};

export default Sidebar;
