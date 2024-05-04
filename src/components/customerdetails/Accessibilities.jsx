"use client";
import { Fragment } from "react";
const Accessibles = ({ content }) => {
  return (
    <Fragment>
      <div>
        <div>
          <p className="text-[#9d9d9d] text-[15px]">
            You current Plan of{" "}
            <b className="text-[#ffff]">{content.currentPlan || "nul"}</b> is
            entitled to the below benefits:
          </p>
        </div>

        {/* entitled_benefits_list */}
        <div className="flex flex-col gap-y-3 pt-2">
          {content.benefits.map((benefit) => {
            return (
              <Fragment>
                <li className="text-[14px] list_marker">{benefit}</li>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Accessibles;
