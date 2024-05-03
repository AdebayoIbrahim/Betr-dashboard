import React from "react";
import Link from "next/link";
import Image from "next/image";
import Betr from "@/assets/betr_logo.png";
import Lang from "@/assets/language.svg";
import User from "@/assets/user.svg";
import userProfiles from "@/data/mockData";
const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between bg-[#222943] px-[7rem] py-[.5rem]">
        <Link className="flex justify-center items-center gap-x-3" href="#">
          <Image src={Betr} />
          <p className="text-white font-bold text-[1.2rem]">Betr Beta</p>
        </Link>

        <div className="flex gap-5 items-center">
          {/* language-pop */}
          <div className=" cursor-pointer w-[45px] h-[40px] bg-transparent border border-blue-500 rounded-md flex justify-center items-center hover:bg-blue-600">
            <Image src={Lang} />
            {/* absolutes-dialog -language */}
          </div>
          {/* user-email */}
          <div className="flex gap-x-1 items-center">
            <div className="relative">
              <button className="flex justify-center items-center bg-[#9d9d9d] p-3 rounded-3xl">
                <Image src={User} className="w-[16px] h-[16px]" />
              </button>
            </div>
            <div className="flex flex-col gap-y-0">
              <p className="text-[#d9d9d9] text-center text-[14px]">
                Welcome Guests
              </p>
              {userProfiles.map((d) => {
                return <p className="text-[#d9d9d9] text-[14px]">{d.email}</p>;
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
