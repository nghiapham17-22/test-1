import React from "react";

type Props = {};

const CartItem = (props: Props) => {
  return (
    <div
      className="flex flex-row gap-0 items-center justify-center w-full relative"
      style={{ opacity: 0.8999999761581421 }}
    >
      <div
        className="bg-[rgba(255,255,255,0.00)] rounded-2xl flex flex-col gap-0 items-center justify-start shrink-0 relative overflow-hidden"
        style={{
          boxShadow:
            "0px 40px 40px -2.5px rgba(0, 0, 0, 0.02), 0px 20.24px 20.24px -2.14px rgba(0, 0, 0, 0.02), 0px 11.05px 11.05px -1.79px rgba(0, 0, 0, 0.02), 0px 6.35px 6.35px -1.43px rgba(0, 0, 0, 0.02), 0px 3.64px 3.64px -1.07px rgba(0, 0, 0, 0.02), 0px 1.92px 1.92px -0.71px rgba(0, 0, 0, 0.02), 0px 0.78px 0.78px -0.36px rgba(0, 0, 0, 0.02)",
        }}
      >
        <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative overflow-hidden">
          <img
            className="flex-1 relative"
            src="https://res.cloudinary.com/dyqkmjxlq/image/upload/v1691466208/img_z5awwp.png"
            alt="Bug Report"
          />
        </div>
        <div className="bg-[#201f29] pt-8p r-8 pb-[75.03px] pl-9 flex flex-col gap-[14.8px] items-center justify-start self-stretch shrink-0 min-h-[225px] relative">
          <div className="pr-[77.53px] pl-[76.8px] flex flex-row gap-0 items-start justify-center shrink-0 relative">
            <div
              className="text-[#ffffff] text-center relative flex items-center justify-center"
              style={{ font: "700 27px/30.8px 'Roboto', sans-serif" }}
            >
              Bug Reports
            </div>
          </div>
          <div className="pr-[23.02px] pb-[0.78px] pl-[22.31px] flex flex-col items-center justify-start shrink-0 relative">
            <div
              className="text-[#e0e0e0] text-center relative flex items-center justify-center"
              style={{ font: "400 16px/22.4px 'Roboto', sans-serif" }}
            >
              Bugs can appear any time, and with
            </div>
            <div
              className="text-[#e0e0e0] text-center relative flex items-center justify-center"
              style={{
                margin: "-0.61px 0 0 0",
                font: "400 16px/22.4px 'Roboto', sans-serif",
              }}
            >
              dedicated channels in Threads, easily <br />
              capture and track them to resolution.
            </div>
          </div>
        </div>
        <div className="bg-[#16151e] pt-[19px] pr-[52.11px] pb-[20.6px] pl-[53.22px] flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
          <div
            className="text-[#9d9ab7] text-center relative flex items-center justify-center"
            style={{ font: "400 14px/19.6px 'Roboto', sans-serif" }}
          >
            Add screenshots and track issues in Linear
          </div>
        </div>
        <div className="rounded-2xl border-solid border-[rgba(255,255,255,0.20)] border-t shrink-0 w-[400px] h-[541.3px] absolute left-0 top-0"></div>
      </div>
    </div>
  );
};

export default CartItem;
