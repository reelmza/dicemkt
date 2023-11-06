/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = ({ showSideBar }) => {
  const path = usePathname();

  const isHiddenSidebarPage =
    path.includes("signin") ||
    path.includes("register") ||
    path.includes("reset-password");

  return (
    <>
      {!isHiddenSidebarPage && (
        <div
          className={`fixed bg-white ${
            showSideBar
              ? "w-full lg:w-[85%] left-0 lg:left-[15%]"
              : "w-full lg:w-[calc(100%-2.5rem-30px)] lg:left-[calc(2.5rem+30px)]"
          } h-20 border-b flex items-center justify-between p-5 lg:px-10 z-20`}
        >
          {/* SLeft content*/}
          <div className="flex items-center">
            {/* Sidebar Toggler -  Fake spacer element */}
            <div className="cursor-pointer rounded-lg p-2 -ml-2 mr-8"></div>

            {/*Search form*/}
            <div className="">
              <form>
                <div className="h-10 w-[50vw] lg:w-[30vw] flex items-center bg-gray-100 rounded-md">
                  <input
                    type="Search"
                    placeholder="Search a stock"
                    className="h-full px-3 outline-none bg-transparent grow rounded-l-md text-sm"
                  />
                  <button className="flex items-center justify-center h-10 w-10 bg-transparent text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right elements */}
          <div className="flex items-center text-gray-600">
            {/* Profile */}
            <div className="flex items-center cursor-pointer">
              <img
                src="./images/excos/pic_4.jpg"
                alt="Picture"
                className="h-8 w-8 rounded-full"
              />

              <div className="ml-3 hidden lg:block">
                Hello, <span className="font-semibold">Joanna Moses</span>
              </div>

              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Notification */}
            <div className="relative ml-3 lg:ml-5 text-gray-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="absolute top-0 right-[2px] h-2 w-2 bg-red-600 rounded-full "></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
