"use client";
import { Fragment } from "react";
import downld from "@/assets/download.svg";
import Image from "next/image";
const History = ({ content }) => {
  const { histories } = content;
  console.log(histories);
  return (
    <Fragment>
      <div>
        <div>
          <p className="text-[#9d9d9d] text-[15px]">
            Here is the history of Your Notes generated.
          </p>
        </div>

        {/* entitled_benefits_list */}
        <div className="w-ful pt-2">
          <table className="w-full overflow-x-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Version</th>
                <th>Data</th>
              </tr>
            </thead>
            {histories.map((hist) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td className="text-[#7187df]">{hist.Releasename}</td>
                      <td className="text-[#737373]">{hist.dateGenerated}</td>
                      <td className="text-[#dbaab2] text-left">
                        {hist.noteVersion}
                      </td>
                      <td className="flex items-center gap-2 text-[13px] text-[#b1a9d1] hover:underline cursor-pointer">
                        <Image src={downld} alt="download" />
                        <p>Download</p>
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
