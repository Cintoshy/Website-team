import React from "react";
import Logo from "../assets/logo.png";

const AppBar = () => {
  return (
    <section>
      <div className="h-screen">
        <div className="flex items-center w-full h-24 ">
          <div className="flex justify-between items-center backdrop-blur-[2px] bg-white/50 px-7 mx-5 sm:mx-10 lg:mx-28 2xl:mx-72 p-4 w-full rounded-full drop-shadow-xl">
            <div className="flex gap-x-10 items-center">
              <img src={Logo} width="40" alt="Adevolpers Logo" />
              <ul class="flex">
                <li class="mr-6">
                  <a class="text-slate-600 hover:text-slate-600" href="#">
                    Home
                  </a>
                </li>
                <li class="mr-6">
                  <a class="text-slate-600 hover:text-slate-600" href="#">
                    Service
                  </a>
                </li>
                <li class="mr-6">
                  <a class="text-slate-600 hover:text-slate-600" href="#">
                    About
                  </a>
                </li>
                <li class="mr-6">
                  <a class="text-slate-600 hover:text-slate-600" href="#">
                    Team
                  </a>
                </li>
                <li class="mr-6">
                  <a class="text-slate-600 hover:text-slate-600" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <button className="font-semibold text-xs rounded-full bg-sky-400 py-3 px-5 text-slate-600 hover:scale-105 ease-out duration-300 drop-shadow-md text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBar;
