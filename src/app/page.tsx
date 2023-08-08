import React from "react";
import CartItem from "./cart";

export default function Home() {
  return (
    <div className="container">
      <header className="text-white body-font pb-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center rounded-[20px] border-solid border-[rgba(255,255,255,0.10)] border ">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-white ">First Link</a>
            <a className="mr-5 hover:text-white ">Second Link</a>
            <a className="mr-5 hover:text-white ">Third Link</a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <span className="ml-3 text-xl text-white">Tailblocks</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-4">
            <div className="inline-flex items-center rgba(125, 102, 245, 1), rgba(74, 41, 194, 1)border-0 py-1 px-3 focus:outline-none hover:bg-wtext-white rounded text-base mt-4 md:mt-0">
              Sign In
            </div>
            <button style={{
                background:
                  "linear-gradient(180deg, rgba(137, 110, 253, 1) 0%, rgba(107, 74, 252, 1) 100%)",
                boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1)",
              }} className="bg-[rgba(125, 102, 245, 1)] inline-flex items-center bg-wtext-white border-0 py-1 px-3 focus:outline-none hover:bg-wtext-white rounded text-base mt-4 md:mt-0">
              Sign Up
             
            </button>
          </div>
        </div>
      </header>

      <div className="self-stretch shrink-0 h-[344.59px] relative">
        <div className=" flex items-center justify-center pt-20 relative">
          <div className="round-icon absolute  w-[10px] ">
            <svg
              className="shrink-0 absolute  left-[-100px] top-[-117px]  overflow-visible"
              width="281"
              height="281"
              viewBox="0 0 281 281"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.4013 63.111L134.445 38.694C138.639 37.016 143.319 37.016 147.513 38.694L208.556 63.111C213.027 64.9 216.569 68.442 218.358 72.912L242.775 133.956C244.452 138.15 244.452 142.83 242.775 147.024L218.358 208.067C216.569 212.538 213.027 216.08 208.556 217.869L147.513 242.286C143.319 243.963 138.639 243.963 134.445 242.286L73.4013 217.869C68.9313 216.08 65.3893 212.538 63.6003 208.067L39.1833 147.024C37.5053 142.83 37.5053 138.15 39.1833 133.956L63.6003 72.912C65.3893 68.442 68.9313 64.9 73.4013 63.111Z"
                stroke="#C09A1B"
                stroke-width="0.748663"
                stroke-miterlimit="7.48663"
              />
              <path
                d="M47.0312 98.9209L92.0362 50.9939C95.1292 47.7009 99.3702 45.7229 103.88 45.4709L169.523 41.8029C174.331 41.5339 179.038 43.2469 182.549 46.5429L230.476 91.5479C233.769 94.6409 235.747 98.8819 235.999 103.392L239.667 169.035C239.936 173.843 238.223 178.55 234.926 182.061L189.922 229.988C186.829 233.281 182.588 235.259 178.078 235.511L112.435 239.179C107.627 239.448 102.92 237.735 99.4092 234.438L51.4822 189.434C48.1892 186.341 46.2112 182.1 45.9592 177.59L42.2912 111.947C42.0222 107.139 43.7352 102.432 47.0312 98.9209Z"
                stroke="#C09A1B"
                stroke-width="0.748663"
                stroke-miterlimit="7.48663"
              />
            </svg>
          </div>

          <div className="chi-nh absolute relativeS  w-[10px] ">
            <svg
              width="78"
              className="absolute top-[-3px] left-[5px]"
              height="47"
              viewBox="0 0 78 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_23_2239)">
                <rect
                  width="15"
                  height="15"
                  transform="translate(15.5732 0.460938)"
                  fill="url(#paint0_linear_23_2239)"
                />
              </g>
              <g clip-path="url(#clip1_23_2239)">
                <rect
                  width="15.45"
                  height="15.45"
                  transform="translate(46.5732 1.01172)"
                  fill="url(#paint1_linear_23_2239)"
                />
              </g>
              <g clip-path="url(#clip2_23_2239)">
                <rect
                  width="15"
                  height="15"
                  transform="translate(0.573242 15.4609)"
                  fill="url(#paint2_linear_23_2239)"
                />
              </g>
              <g clip-path="url(#clip3_23_2239)">
                <rect
                  width="15"
                  height="15"
                  transform="translate(30.5732 15.4609)"
                  fill="url(#paint3_linear_23_2239)"
                />
              </g>
              <g clip-path="url(#clip4_23_2239)">
                <rect
                  width="15"
                  height="15"
                  transform="translate(61.5732 15.4609)"
                  fill="url(#paint4_linear_23_2239)"
                />
              </g>
              <g clip-path="url(#clip5_23_2239)">
                <rect
                  width="15"
                  height="15"
                  transform="translate(15.5732 30.4609)"
                  fill="url(#paint5_linear_23_2239)"
                />
              </g>
              <g clip-path="url(#clip6_23_2239)">
                <rect
                  width="15"
                  height="15"
                  transform="translate(46.5732 30.4609)"
                  fill="url(#paint6_linear_23_2239)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_23_2239"
                  x1="0"
                  y1="0"
                  x2="15.2572"
                  y2="14.7337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFCF66" />
                  <stop offset="1" stop-color="#D8932C" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_23_2239"
                  x1="0"
                  y1="0"
                  x2="15.7149"
                  y2="15.1757"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFCF66" />
                  <stop offset="1" stop-color="#D8932C" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_23_2239"
                  x1="0"
                  y1="0"
                  x2="15.2572"
                  y2="14.7337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFCF66" />
                  <stop offset="1" stop-color="#D8932C" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_23_2239"
                  x1="0"
                  y1="0"
                  x2="15.2572"
                  y2="14.7337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFCF66" />
                  <stop offset="1" stop-color="#D8932C" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_23_2239"
                  x1="0"
                  y1="0"
                  x2="15.2572"
                  y2="14.7337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFCF66" />
                  <stop offset="1" stop-color="#D8932C" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_23_2239"
                  x1="0"
                  y1="0"
                  x2="15.2572"
                  y2="14.7337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFCF66" />
                  <stop offset="1" stop-color="#D8932C" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_23_2239"
                  x1="0"
                  y1="0"
                  x2="15.2572"
                  y2="14.7337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFCF66" />
                  <stop offset="1" stop-color="#D8932C" />
                </linearGradient>
                <clipPath id="clip0_23_2239">
                  <rect
                    x="15.5732"
                    y="0.460938"
                    width="15.45"
                    height="16"
                    rx="1"
                    fill="white"
                  />
                </clipPath>
                <clipPath id="clip1_23_2239">
                  <rect
                    x="46.5732"
                    y="0.460938"
                    width="15.45"
                    height="16"
                    rx="1"
                    fill="white"
                  />
                </clipPath>
                <clipPath id="clip2_23_2239">
                  <rect
                    x="0.573242"
                    y="15.4609"
                    width="15.45"
                    height="16"
                    rx="1"
                    fill="white"
                  />
                </clipPath>
                <clipPath id="clip3_23_2239">
                  <rect
                    x="30.5732"
                    y="15.4609"
                    width="16.45"
                    height="16"
                    rx="1"
                    fill="white"
                  />
                </clipPath>
                <clipPath id="clip4_23_2239">
                  <rect
                    x="61.5732"
                    y="15.4609"
                    width="15.45"
                    height="16"
                    rx="1"
                    fill="white"
                  />
                </clipPath>
                <clipPath id="clip5_23_2239">
                  <rect
                    x="15.5732"
                    y="30.4609"
                    width="15.45"
                    height="16"
                    rx="1"
                    fill="white"
                  />
                </clipPath>
                <clipPath id="clip6_23_2239">
                  <rect
                    x="46.5732"
                    y="30.4609"
                    width="15.45"
                    height="16"
                    rx="1"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* <div className="pt-[54px] pr-[418.02px] pb-[5px] pl-[417.98px] flex flex-col gap-0 items-center justify-center  h-[127px]  left-[calc(50% - 582.5px)] top-[calc(50% - 124.29px)]"> */}
        <div
          className="text-white text-center relative flex items-center justify-center font-normal text-4xl"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            lineHeight: "67.2px",
          }}
        >
          Threads Gallery
        </div>
        {/* </div> */}
        <div className="pr-[33px] pb-[1.59px] pl-[32.25px] flex flex-row gap-0 items-start justify-center left-[calc(50% - 378.62px)]">
          <div
            className="text-center relative flex items-center justify-center font-light text-base"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 300,
              lineHeight: "28.8px",
            }}
          >
            <span>
              <span className="block">
                Become an expert on how to write threads by taking inspiration
                from
              </span>
              <span className="block">
                <br />
              </span>
              <span className="block">
                our own teams' curated examples and use cases.
              </span>
            </span>
          </div>
        </div>
        <div className="pt-[26px] pb-6 flex flex-col gap-0 items-center justify-center w-full absolute left-[calc(50% - 102px)] top-[calc(50% - -60.29px)]">
          <div
            className="bg-[rgba(161,138,255,0.24)] rounded-xl border-solid border-[rgba(255,255,255,0.10)] border p-[5px] flex flex-row gap-0 items-center justify-center shrink-0 w-[294px] relative"
            style={{
              boxShadow:
                "0px 0px 48px 0px rgba(130, 26, 250, 0.5), 0px 0px 4px 0px rgba(229, 149, 255, 1)",
            }}
          >
            <div
              className="rounded-lg pt-[13px] pr-[25.12px] pb-[11px] pl-[33.13px] flex flex-row gap-[9.75px] items-start justify-center shrink-0 min-w-[194px] w-full min-h-[52px] relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(137, 110, 253, 1) 0%, rgba(107, 74, 252, 1) 100%)",
                boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="text-[#efeff1] text-center  relative flex items-center justify-center font-semibold text-base"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  lineHeight: "24px",
                }}
              >
                Sign up today
              </div>
              <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                <div className="shrink-0 w-7 h-7 relative overflow-hidden">
                  <div className="flex flex-row gap-0 items-start justify-start w-7 h-7 absolute left-0 top-0">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8799 23.3398C19.7119 23.3398 23.6299 19.4218 23.6299 14.5898C23.6299 9.75784 19.7119 5.83984 14.8799 5.83984C10.0479 5.83984 6.12988 9.75784 6.12988 14.5898C6.12988 19.4218 10.0479 23.3398 14.8799 23.3398Z"
                        stroke="#EFF0F1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.8799 18.0898L18.3799 14.5898L14.8799 11.0898"
                        stroke="#EFF0F1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3799 14.5898H18.3799"
                        stroke="#EFF0F1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <CartItem />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <CartItem />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <CartItem />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <CartItem />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <CartItem />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <CartItem />
            </div><div className="p-4 md:w-1/2 lg:w-1/3">
              <CartItem />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <CartItem />
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <CartItem />
            </div>
          </div>
        </div>
      </section>

      <footer className="text-white body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <p className="mt-2 text-sm text-white ">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"></div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"></div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className=" w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-white ">For Engineers</a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">For Designers</a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">
                    For Product Managers
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">
                    For Customer Experience
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">For Leaders</a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">Gallery</a>
                </li>
              </nav>
            </div>
            {/* ... (same structure for other columns) */}
          </div>
          <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className=" w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-white ">For Engineers</a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">For Designers</a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">
                    For Product Managers
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">
                    For Customer Experience
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">For Leaders</a>
                </li>
                <li>
                  <a className="text-white hover:text-white ">Gallery</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-wtext-white ">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              Made with 💜 in SF, LA, SAN, SEA, DEN, AA, TOR, BOS, NYC, NJ, PHL,
              NC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
