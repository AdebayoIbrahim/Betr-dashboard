"use client";
import { Fragment } from "react";
import Nav from "@/components/Nav";
import Image from "next/image";
import Avatar from "@/assets/Avvatar.png";
import userProfiles from "@/data/mockData";
import { BasicDetails } from "@/components/user/Detailsone";
import Maininfo from "@/components/user/mainDetails";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
const Dashboard = () => {
  const [imgSrc, setImgsrc] = useState(Avatar);

  // image-upload-functionality
  const profileUpload = (e) => {
    const data = e.target.files[0];
    setImgsrc(URL.createObjectURL(data));
    console.log(imgSrc);
    // e.target.value = null;
  };
  return (
    <Fragment>
      <div className="dashboard-wrapper">
        <Nav />
        {/* dashboard-user-profile */}
        <div className="profiles">
          {/* profile_general-bg */}
          <section className="profile_images relative w-full h-[25vh]">
            {/* avatar_pic */}
            <div className="avatar_cont absolute bottom-[-50%] left-[9rem] w-[200px] h-[200px] bg-[#2c3249] rounded-[50%] flex justify-center shadow-md z-10">
              <Image
                src={imgSrc}
                className=" w-[100%] h-[100%] rounded-[50%] object-cover"
                alt="profile_image"
                width="200"
                height="200"
              />
              {/* absolut-absolute-edit-pen */}
              <div className="absolute flex items-center justify-center z-20 w-[30px] h-[30px] rounded-[50%] border-[2px] border-[#0b0f1f] bg-slate-50 bottom-6 right-[0] cursor-pointer">
                <MdModeEdit className="fill-[#222943]" />

                {/* more-edit-icon-input */}
                <input
                  type="file"
                  name="picture_id"
                  accept="image/*"
                  id="pic_profile"
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => profileUpload(e)}
                />
              </div>
            </div>
          </section>
          {/* profile_dashboard_details */}
          <section className="details_container relative">
            <div className="line_dash absolute w-full h-[2px] top-[2.6rem]  bg-[#17213d]"></div>
            {userProfiles.map((user) => {
              return (
                <div
                  className="grid_layout_details pl-[9.2rem] pr-[1.2rem]"
                  key={user.id}
                >
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
