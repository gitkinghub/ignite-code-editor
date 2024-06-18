import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { Menus } from "../utils/helpers";
import { Link } from "react-router-dom";
import { signOutAction } from "../utils/helpers";
import { slideUpOut } from "../animations";

// display the logged in user's photo or the first letter of email if photo is absent and dropdwon options
const UserProfileDetails = () => {
  const user = useSelector((state) => state.user?.user);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="flex items-center justify-center gap-4 relative">
      {/* this is the photo and firstname division */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500">
        {/* if photoURL exists, display it */}
        {user?.photoURL ? (
          <>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={user?.photoURL}
              alt={user?.displayName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </>
        ) : (
          <p className="text-xl text-white font-semibold capitalize">
            {user?.email[0]} {/* else, get the first index of the user's emai*/}
          </p>
        )}
      </div>

      {/* this is the dropdown arrow */}
      <motion.div
        onClick={() => setIsMenu(!isMenu)}
        whileTap={{ scale: 0.9 }}
        className="p-4 rounded-md flex items-center justify-center bg-secondary cursor-pointer"
      >
        <FaChevronDown className="text-gray-400" />
      </motion.div>

      {/* maps the elements to their respective arrays indices in helpers.js then returns them then displays those elements */}
      <AnimatePresence>
        {isMenu && (
          <motion.div {...slideUpOut} className="bg-secondary absolute top-16 right-0 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px]">
            {Menus &&
              Menus.map((menu) => (
                <Link
                  to={menu.uri}
                  key={menu.id}
                  className="text-gray-400 text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md"
                >
                  {menu.name}
                </Link>
              ))}

            {/* this is the signout link button */}
            <motion.p
              onClick={signOutAction}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md cursor-pointer"
            >
              Sign Out
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfileDetails;
