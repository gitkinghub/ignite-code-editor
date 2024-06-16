import React, { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { MdHome } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import { Logo } from "../assets";
import {Projects, SignUp} from "../container";


const Home = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const [user, setUser] = useState();
  return (
    // create two divisions for the home section
    <>
      {/* 1: left side panel division */}
      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"
        } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
      >
        {/* anchor arrows */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSideMenu(!isSideMenu)}
          className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-xl absolute -right-6 flex items-center justify-center cursor-pointer"
        >
          <HiChevronDoubleLeft className="text-white text-xl" />
        </motion.div>

        {/* logo, start coding btn, home nav */}
        <div className="overflow-hidden w-full flex-col gap-4">
          {/* logo -rem to change the logo- */}
          <Link to={"/home"} className="mb-8">
            <img
              src={Logo}
              alt="Logo"
              className="object-contain w-62 h-19 mb-5"
            />
            {/* <span className="text-gray-400 pl-2">Genio Script</span> */}
          </Link>

          {/* start coding button */}
          <Link to={"/newProject"}>
            <div className="px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200 mb-5">
              <p className="text-gray-400 group-hover:text-gray-200 capitalize">
                Code Editor
              </p>
            </div>
          </Link>

          {/* pages section. this pages section should display a dropdown to login, signup, search and other features */}
          <Link className="w-full flex items-center justify-center gap-6">
            <p className="text-gray-400 uppercase mb-4">Pages</p>
            <div className="flex flex-col gap-2">
              {/* Add any pages links here */}
            </div>
          </Link>

          {/* home nav button */}
          {user && (
            <Link
              to={"/home/projects"}
              className="flex items-center justify-center gap-6"
            >
              <MdHome className="text-gray-400 text-xl" />
              <p className="text-lg text-gray-400">Home</p>
            </Link>
          )}
        </div>
      </div>

      {/* 2: Right side section */}
      <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12">
        {/* top section */}
        <div className="flex justify-between items-center w-full gap-3">
          {/* search bar and incon */}
          <div className="bg-secondary w-full px-4 py-3 rounded-md flex items-center justify-center gap-3">
            <FaSearchengin className="text-2xl text-gray-400" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-gray-400 placeholder:text-gray-600"
              placeholder="Search here..."
            />
          </div>

          {/* the profile section */}
          {!user && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center gap-3"
            >
              <Link //change this to got to auth only not home/auth.
                to={"/home/auth"}
                className="bg-emerald-500 px-6 py-2 rounded-md text-white text-lg cursor-pointer hover:bg-emarald-700"
              >
                SignUp
              </Link>
            </motion.div>
          )}
          {user && <div></div>}
        </div>

        {/* the middle section below the top */}
        <div className="w-full">
          <Routes>
            <Route path="/*" element={<Projects />} />
            <Route path="/auth" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
