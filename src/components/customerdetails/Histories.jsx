"use client";
import { Fragment, useState } from "react";
import downld from "@/assets/download.svg";
import Image from "next/image";
const History = ({ content }) => {
  const { histories } = content;
  console.log(histories);

  const [selected, setSelected] = useState(null);

  const handleSelected = (curr) => {
    setSelected(curr);
  };

  // mock-download-clik-handle
  const handleDownload = () => {
    if (selected != null) {
      const getcurr = histories[selected];
      console.log(getcurr);
    } else {
      alert("please select an item to download");
    }
  };

  return (
    <Fragment>
      <div>
        <div>
          <p className="text-[#9d9d9d] text-[15px]">
            Here is the history of Your Notes generated.
          </p>
        </div>

        {/* call-to-action-areas */}

        <div className="c-t-a-history pt-6 flex justify-between items-center pr-2">
          <h4 className="text-[0.9rem] text-[#d9f0e5]">All Files</h4>
          <div className="flex items-center gap-x-4">
            <button
              className="text-[.78rem] text-green-500 font-[450]"
              onClick={handleDownload}
            >
              Download
            </button>
            <button className="text-[.78rem] text-yellow-400 font-[450]">
              Rename
            </button>
            <button className="text-red-300 text-[.78rem] font-[450]">
              Delete
            </button>
          </div>
        </div>

        {/* entitled_benefits_list */}
        <div className="w-ful pt-6 table_cont">
          <table className="w-full ">
            <thead>
              {/* select-all-mock */}
              <tr>
                <th className="text-[15px] flex items-center gap-x-3">
                  <div className="box_file"></div>
                  <div className="table_file">File Name</div>
                </th>
                <th className="text-[15px]">Size</th>
                <th className="text-[15px]">Create Date</th>
                <th className="text-[15px]">Note Version</th>
                <th className="text-[15px]">Web Address</th>
              </tr>
            </thead>
            {histories.map((hist, index) => {
              return (
                <>
                  <tbody key={index}>
                    <tr>
                      <td className="flex items-center text-[#7187df] min-w-[12rem] cursor-pointer gap-x-2">
                        <input
                          type="radio"
                          name="filename"
                          id={`data${index}`}
                          checked={selected === index}
                          onChange={() => handleSelected(index)}
                        />
                        <label htmlFor={`data${index}`} className="">
                          {hist.Releasename}
                        </label>
                      </td>
                      <td className="text-[#737373]">{hist.size}</td>
                      <td className="text-[#dbaab2] text-left">
                        {hist.dateGenerated}
                      </td>
                      <td className="text-[#dbaab2] text-left">
                        {hist.noteVersion}
                      </td>
                      <td className="flex items-center gap-2 text-[13px] text-[#b1a9d1] hover:underline cursor-pointer">
                        <Image src={downld} alt="download" />
                        <p>View</p>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default History;
