"use client";
import { useState } from "react";
const Maininfo = () => {
  const [active, setActive] = useState("active_btn_3");

  const handleClick = (payload) => {
    console.log(payload);
    setActive(payload);
  };
  return (
    <div className="grid_sub_two pt-4">
      {/* nav-switch */}
      <div className="flex items-center gap-x-[8rem]">
        <button
          className={`${
            active === "active_btn" && "button_1"
          } text-gray-200 relative`}
          onClick={() => handleClick("active_btn")}
        >
          All
        </button>
        <button
          className={`${
            active === "active_btn_2" && "button_2"
          } text-gray-200 relative`}
          onClick={() => handleClick("active_btn_2")}
        >
          Pricing System
        </button>
        <button
          className={`${
            active === "active_btn_3" && "button_3"
          } text-gray-200 relative`}
          onClick={() => handleClick("active_btn_3")}
        >
          History
        </button>
      </div>
      {/* dynamic-content-rendering */}
      <setcion className="detailssub_content block mt-[2rem]">
        <div className="content_all text-[#ffff]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          earum nobis repellendus sunt laborum fugit quidem aperiam! Sunt,
          dolores consectetur.
        </div>
      </setcion>
    </div>
  );
};

export default Maininfo;
