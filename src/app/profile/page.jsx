"use client";
import { Fragment } from "react";
import Nav from "@/components/Nav";
import Image from "next/image";
import Avatar from "@/assets/Avvatar.png";
import userProfiles from "@/data/mockData";
import { BasicDetails } from "@/components/user/Detailsone";
import Maininfo from "@/components/user/mainDetails";
const Dashboard = () => {
  return (
    <Fragment>
      <div className="dashboard-wrapper">
        <Nav />
        {/* dashboard-user-profile */}
        <div className="profiles">
          {/* profile_general-bg */}
          <section className="profile_images relative w-full h-[25vh]">
            {/* avatar_pic */}
            <div className="avatar absolute bottom-[-50%] left-[9rem] w-[200px] h-[200px] p-2 bg-[#2c3249] rounded-[50%] flex justify-center shadow-md z-10">
              <Image src={Avatar} className=" w-[80%] h-[80%]" />
            </div>
          </section>
          {/* profile_dashboard_details */}
          {/* grid-layout */}
          {/* container-major */}
          <section className="details_container relative">
            <div className="absolute w-full h-[2px] top-[3.2rem] mt-1 bg-[#17213d]"></div>
            {userProfiles.map((user) => {
              return (
                <div className="grid_layout_details px-[9.2rem]" key={user.id}>
                  {/* grid_sub_one==usernames*/}
                  <BasicDetails content={user} />
                  {/* main_sub_grid_two */}
                  <Maininfo content={user} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
