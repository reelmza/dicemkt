/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Graph from "@components/Graph";

const Dashboard = () => {
  const markets = [
    {
      name: "Tesla",
      abv: "TSL",
      value: "$20.43",
      percentage: "+4%",
      direction: "bearish",
    },
    {
      name: "NVIDIA",
      abv: "NVD",
      value: "$10.13",
      percentage: "-10%",
      direction: "bullish",
    },
    {
      name: "Meta",
      abv: "MTA",
      value: "$221.05",
      percentage: "+10%",
      direction: "bearish",
    },
    {
      name: "Apple",
      abv: "APPL",
      value: "$101.05",
      percentage: "+2%",
      direction: "bearish",
    },
    {
      name: "AMD",
      abv: "AMD",
      value: "$40.10",
      percentage: "-8%",
      direction: "bullish",
    },
  ];

  const colors = ["#A6F7E2", "#B79BFF", "#FFE5A5", "#C7FFA5", "#F9AEFF"];
  return (
    <div className="w-full p-10">
      {/* Dashboard hero */}
      <div className="flex flex-wrap items-center justify-between mb-20">
        {/* Balance Box */}
        <div className="w-full lg:w-[40%] mb-10 lg:mb-0">
          <div className="text-gray-600 text-xs">Your wallet</div>
          <div className="font-semibold text-lg mb-5">Total Balance</div>
          <div className="text-5xl font-bold mb-5">$120.34</div>
          <div className="w-[80%] text-gray-600 text-sm mb-5">
            Here you will see how much money you have made once you start saving
            in your wallet.
          </div>
          <Link href="/wallet">
            <div className="flex items-center text-gray-600 text-sm">
              <span className="mr-2">View your wallet</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* News box */}
        <div className="news_box w-full lg:w-[55%] rounded-md overflow-hidden">
          <div className="flex flex-col text-white p-5 lg:p-10">
            <div className="text-xl font-semibold mb-5">Dice News</div>

            <p className="w-[0] min-w-full lg:min-w-[85%] flex text-sm font-light mb-5">
              Wealth creation is an evolutionarily recent positive-sum game. It
              is all about who take the opportunity first.
            </p>

            <Link href="/" className="flex items-center font-semibold w-fit">
              <div className="mr-2">Read more</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Markets */}
      <div className="w-full mb-20">
        <div className="text-xl font-semibold mb-10">Your Markets</div>

        {/* Markets carousel */}
        <div className="w-full">
          <div className="relative w-full">
            <div className="relative w-0 min-w-full flex items-center overflow-x-scroll">
              {markets.map((item) => {
                return (
                  <div
                    className={`min-w-[250px] h-32 flex flex-col justify-between mr-5 p-3 rounded-md`}
                    style={{ backgroundColor: colors[markets.indexOf(item)] }}
                    key={markets.indexOf(item)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
                        </svg>

                        <span className="ml-2 font-semibold text-sm">
                          {item.name}
                        </span>
                      </div>

                      <div>
                        <div className="text-sm">{item.abv}</div>
                        <div className="text-xs">{item.percentage}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-600 text-xs mb-1">
                          Current Value
                        </div>
                        <div className="font-semibold text-xl">
                          {item.value}
                        </div>
                      </div>

                      <div>
                        {item.direction === "bearish" && (
                          <svg
                            width="80"
                            height="18"
                            viewBox="0 0 80 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.59999H2.50438L3.85832 4.36H5.81401L6.5662 7.71999L8.07058 0.999999L9.57496 8.83999H11.2298L11.982 12.2L13.4863 3.23999L17.0969 9.95998L17.9995 6.59999H20.4065L22.8135 9.95998H23.8666L24.9196 12.2L33.1616 8.83999L34.3972 0.999999L36.1045 8.83999L38.7599 4.36L40.9392 6.04021L42.594 3.24022L45.3019 8.8402H47.8594L49.2133 6.04021L51.6203 12.7602L52.5229 8.8402L53.7264 11.0802L54.4786 8.8402L56.8856 16.6802H58.1761L59.2272 17L59.744 14.4402L61.3988 12.7602L63.2345 11.0797L64.4958 14.4403L66.808 16.6804L71.2224 16.6802L72.6938 14.4402L74.7959 16.6802H75.8469L76.7434 14.4402L79 8.8402"
                              stroke="#000"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}

                        {item.direction === "bullish" && (
                          <svg
                            width="79"
                            height="19"
                            viewBox="0 0 79 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6.09999H2.50438L3.85832 3.86H5.81401L6.5662 7.21999L8.07058 0.499999L9.57496 8.33999H11.2298L11.982 11.7L13.4863 2.73999L17.0969 9.45998L17.9995 6.09999H20.4065L22.8135 9.45998H23.8666L24.9196 11.7L33.1616 8.33999L34.3972 0.499999L36.1045 8.33999L38.7599 3.86L40.9392 5.54021L42.594 2.74022L45.3019 8.34021H47.8594L49.2133 5.54021L51.6203 12.2602L52.5229 8.34021L53.7264 10.5802L54.4786 8.34021L56.8856 16.1802H58.1761L59.2272 16.5L59.744 13.9402L61.3988 12.2602L63.2345 10.5797L64.4958 13.9403L66.808 16.1804L71.2224 16.1802L72.6938 13.9402L74.7959 16.1802H75.8469L76.7434 13.9402L78.5 18.5"
                              stroke="#000"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Scroll buttons */}
              <button className="hidden lg:flex items-center justify-center absolute right-5 h-12 w-12 bg-emerald-700 text-white  rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollbar hider */}
            <div className="absolute -bottom-1 left-0 w-full h-5 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="mb-20">
        {/* Graph */}
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-[55%] mb-5 lg:mb-0">
            <Graph />
          </div>
          <div className="w-full lg:w-[40%]">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Wathclist</div>
              <div className="h-8 w-8 text-white bg-emerald-700 flex items-center justify-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                </svg>
              </div>
            </div>

            {/* Watchlist */}
            <div>
              {/* Watchlist item */}
              <div className="h-20 flex items-center justify-between border-b">
                <div className="flex items-center">
                  <div className="h-10 w-10">
                    <img
                      className="h-full"
                      src="./images/icons/amazon.svg"
                      alt="Amazon logo"
                    />
                  </div>
                  <div className="ml-2 w-fit">
                    <div className="font-semibold">Amazon.com, Inc.</div>
                    <div className="text-gray-600 text-sm">AMAZN</div>
                  </div>
                </div>
                <div>
                  <div className="text-light text-sm">$102.40</div>
                  <div className="text-light text-lime-500 text-sm">+3.02%</div>
                </div>
              </div>

              {/* Watchlist item */}
              <div className="h-20 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10">
                    <img
                      className="h-full"
                      src="./images/icons/coca-cola.svg"
                      alt="Coke logo"
                    />
                  </div>
                  <div className="ml-2 w-fit">
                    <div className="font-semibold">Coca-Cola, Co</div>
                    <div className="text-gray-600 text-sm">KO</div>
                  </div>
                </div>
                <div>
                  <div className="text-light text-sm">$24.40</div>
                  <div className="text-light text-red-500 text-sm">-0.40%</div>
                </div>
              </div>

              {/* Watchlist item */}
              <div className="h-20 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10">
                    <img
                      className="h-full"
                      src="./images/icons/bmw.svg"
                      alt="Coke logo"
                    />
                  </div>
                  <div className="ml-2 w-fit">
                    <div className="font-semibold">
                      Bayerische Motoren Werke AG
                    </div>
                    <div className="text-gray-600 text-sm">BMW</div>
                  </div>
                </div>
                <div>
                  <div className="text-light text-sm">$92.94</div>
                  <div className="text-light text-lime-500 text-sm">+0.50%</div>
                </div>
              </div>

              {/* Watchlist item */}
              <div className="h-20 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10">
                    <img
                      className="h-full"
                      src="./images/icons/microsoft.svg"
                      alt="Coke logo"
                    />
                  </div>
                  <div className="ml-2 w-fit">
                    <div className="font-semibold">Microsoft Corp</div>
                    <div className="text-gray-600 text-sm">MSFT</div>
                  </div>
                </div>
                <div>
                  <div className="text-light text-sm">$248.16</div>
                  <div className="text-light text-lime-500 text-sm">+0.16%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
