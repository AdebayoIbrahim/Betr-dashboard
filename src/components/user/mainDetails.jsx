"use client";
import { useState } from "react";
import Accessibles from "../customerdetails/Accessibilities";
import History from "../customerdetails/Histories";
const Maininfo = ({ content }) => {
  const [active, setActive] = useState("active_btn");

  const handleClick = (payload) => {
    console.log(payload);
    setActive(payload);
  };
  return (
    <div className="grid_sub_two pt-2">
      {/* nav-switch */}
      <div className="nav_details_flex flex items-center gap-x-[8rem]">
        <button
          className={`${
            active === "active_btn" && "button_1"
          } text-gray-200 relative text-[0.93rem]`}
          onClick={() => handleClick("active_btn")}
        >
          Accessibilities
        </button>
        <button
          className={`${
            active === "active_btn_2" && "button_2"
          } text-gray-200 relative text-[0.93rem]`}
          onClick={() => handleClick("active_btn_2")}
        >
          Pricing System
        </button>
        <button
          className={`${
            active === "active_btn_3" && "button_3"
          } text-gray-200 relative text-[0.93rem]`}
          onClick={() => handleClick("active_btn_3")}
        >
          History
        </button>
      </div>
      {/* dynamic-content-rendering */}
      <setcion className="detailssub_content block mt-[1.3rem]">
        {/* rendering-contents */}
        {active === "active_btn" ? (
          <Accessibles content={content} />
        ) : active === "active_btn_2" ? (
          <h1>pricing..</h1>
        ) : active === "active_btn_3" ? (
          <History content={content} />
        ) : null}
      </setcion>
    </div>
  );
};

export default Maininfo;
