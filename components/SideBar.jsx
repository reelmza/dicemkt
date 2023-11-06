/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavBar from "./NavBar";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(!false);

  const path = usePathname();
  const isHiddenSidebarPage =
    path.includes("signin") ||
    path.includes("register") ||
    path.includes("reset-password");

  return (
    <>
      {/* Real sidebar */}
      {!isHiddenSidebarPage && (
        <div
          className={`fixed h-full bg-[#036558] text-white text-xs flex flex-col justify-between ${
            showSideBar
              ? "w-[50%] px-5 lg:w-[15%]"
              : "w-0 px-0 lg:px-5 lg:w-[calc(2.5rem+30px)]"
          } z-30 overflow-hidden transition-all 200ms ease-in`}
        >
          <div>
            {/* Logo */}
            <div className="logo flex items-center h-20">
              {showSideBar && (
                <img src="./images/dice_logo.png" className="h-6" alt="Image" />
              )}

              {!showSideBar && (
                <img
                  src="./images/logo_mobile.svg"
                  className="w-6"
                  alt="Image"
                />
              )}
            </div>

            {/* Links */}
            <div className="w-full flex flex-col">
              {/* Menu Section */}
              {showSideBar && <div className="pt-5 mb-3">MENU</div>}
              {/* Home */}
              <Link
                href="/"
                className={`sidebar_link ${
                  path === "/"
                    ? "bg-[#e7e7e760] font-semibold"
                    : "text-gray-200"
                } ${showSideBar ? "pl-3 bg-transaprent" : "justify-center"}`}
              >
                <div
                  className={`h-full flex items-center justify-center shrink-0`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 2.75A.75.75 0 011.75 2h16.5a.75.75 0 010 1.5H18v8.75A2.75 2.75 0 0115.25 15h-1.072l.798 3.06a.75.75 0 01-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 01-1.452-.38L5.823 15H4.75A2.75 2.75 0 012 12.25V3.5h-.25A.75.75 0 011 2.75zM7.373 15l-.391 1.5h6.037l-.392-1.5H7.373zm7.49-8.931a.75.75 0 01-.175 1.046 19.326 19.326 0 00-3.398 3.098.75.75 0 01-1.097.04L8.5 8.561l-2.22 2.22A.75.75 0 115.22 9.72l2.75-2.75a.75.75 0 011.06 0l1.664 1.663a20.786 20.786 0 013.122-2.74.75.75 0 011.046.176z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {showSideBar && <span className="ml-3">Home</span>}
              </Link>

              {/* Plans */}
              <Link
                href="/plans"
                className={`sidebar_link ${
                  path === "/plans"
                    ? "bg-[#e7e7e760] font-semibold"
                    : "text-gray-200"
                } ${showSideBar ? "pl-3 bg-transaprent" : "justify-center"}`}
              >
                <div
                  className={`h-full flex items-center justify-center shrink-0`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {showSideBar && <span className="ml-3">Plans</span>}
              </Link>

              {/* Wallet */}
              <Link
                href="/wallet"
                className={`sidebar_link ${
                  path === "/wallet"
                    ? "bg-[#e7e7e760] font-semibold"
                    : "text-gray-200"
                } ${showSideBar ? "pl-3 bg-transaprent" : "justify-center"}`}
              >
                <div
                  className={`h-full flex items-center justify-center shrink-0`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" />
                  </svg>
                </div>

                {showSideBar && <span className="ml-3">Wallet</span>}
              </Link>

              {/* Feed */}
              <Link
                href="/feed"
                className={`sidebar_link ${
                  path === "/feeds"
                    ? "bg-[#e7e7e760] font-semibold"
                    : "text-gray-200"
                } ${showSideBar ? "pl-3 bg-transaprent" : "justify-center"}`}
              >
                <div
                  className={`h-full flex items-center justify-center shrink-0`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {showSideBar && <span className="ml-3">Feed</span>}
              </Link>

              {/* Others */}
              {showSideBar && <div className="pt-5 mb-3">OTHERS</div>}

              {/* Settings */}
              <Link
                href="/settings"
                className={`sidebar_link ${
                  path === "/settings"
                    ? "bg-[#e7e7e760] font-semibold"
                    : "text-gray-200"
                } ${showSideBar ? "pl-3 bg-transaprent" : "justify-center"}`}
              >
                <div
                  className={`h-full flex items-center justify-center shrink-0`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {showSideBar && <span className="ml-3">Settings</span>}
              </Link>

              {/* Payments */}
              <Link
                href="/payments"
                className={`sidebar_link ${
                  path === "/payments"
                    ? "bg-[#e7e7e760] font-semibold"
                    : "text-gray-200"
                } ${showSideBar ? "pl-3 bg-transaprent" : "justify-center"}`}
              >
                <div
                  className={`h-full flex items-center justify-center shrink-0`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {showSideBar && <span className="ml-3">Payments</span>}
              </Link>

              {/* User */}
              <Link
                href="/account"
                className={`sidebar_link ${
                  path === "/account"
                    ? "bg-[#e7e7e760] font-semibold"
                    : "text-gray-200"
                } ${showSideBar ? "pl-3 bg-transaprent" : "justify-center"}`}
              >
                <div
                  className={`h-full flex items-center justify-center shrink-0`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                </div>

                {showSideBar && <span className="ml-3">Accounts</span>}
              </Link>

              {/* Help */}
              <Link
                href="/support"
                className={`sidebar_link ${
                  path === "/support"
                    ? "bg-[#e7e7e760] font-semibold"
                    : "text-gray-200"
                } ${showSideBar ? "pl-3 bg-transaprent" : "justify-center"}`}
              >
                <div className={`shrink-0`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {showSideBar && <span className="ml-3">Support</span>}
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col mb-5">
            {/* Profile Box */}
            <div className="w-full flex items-center shrink-0 mb-5">
              <div className="shrink-0 w-8">
                <img
                  src="./images/excos/pic_4.jpg"
                  className="w-full rounded-full shrink-0"
                  alt=""
                />
              </div>

              {showSideBar && (
                <div className="ml-3 leading-none mb-[4px]">
                  <div className="font-semibold text-sm">Joanna Moses</div>
                  <div>View profile</div>
                </div>
              )}
            </div>

            {/* Logout */}
            {/* <Link
              href="/logout"
              className={`sidebar_link bg-[#e7e7e730] font-semibold ${
                !showSideBar ? "bg-transparent justify-center" : "pl-3 "
              }`}
            >
              <div className={`shrink-0`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {showSideBar && <span className="ml-3">Logout</span>}
            </Link> */}
          </div>
        </div>
      )}

      {/* Fake sidebar */}
      {!isHiddenSidebarPage && (
        <div
          className={`relative h-full bg-red-600b z-20 ${
            showSideBar ? "w-0 lg:w-[15%]" : "w-0 lg:w-[calc(2.5rem+30px)]"
          }`}
        ></div>
      )}

      {/* Sidebar toggler */}
      {!isHiddenSidebarPage && (
        <div
          className={`fixed track top-0 h-20 w-20 flex items-center  bg-red-500b cursor-pointer z-30 ${
            showSideBar
              ? "text-white lg:text-black left-[33%] lg:left-[15%] pl-10"
              : "left-0 lg:left-[calc(2.5rem+30px)] pl-5 lg:pl-10"
          }`}
          onClick={() => setShowSideBar((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {/* Navbar */}
      {!isHiddenSidebarPage && <NavBar showSideBar={showSideBar} />}
    </>
  );
};

export default SideBar;
