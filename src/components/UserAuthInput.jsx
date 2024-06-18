import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa6";
import { motion } from "framer-motion";

// reusable code for user input
// go to SignUP.jsx and create two separate monitoring states for email and password
// then you use exported function as a single element i.e <UserAuthInput/> for it to be reused where you want
const UserAuthInput = ({
  label,
  placeHolder,
  isPass,
  setStateFunction,
  Icon,
  setGetEmailValidationStatus
}) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(false); //the default(false), is that we don't want to display the password. the eye-icon is closed
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleTextChange = (e) => {
    setValue(e.target.value);
    setStateFunction(e.target.value);

    //   email validation
    if (placeHolder === "example@gmail.com") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const status = emailRegex.test(value);
      setIsEmailValid(status);
      setGetEmailValidationStatus(status);
    }
  };
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{label}</label>
      <div //highlight color red if the email is not valid
        className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 ${
          !isEmailValid &&
          placeHolder === "example@gmail.com" &&
          value.length > 0 &&
          "border-2 border-red-500"
        }`}
      >
        {" "}
        {/*this piece of code is reused for both email and password*/}
        <Icon className="text-text555 text-2xl" />
        <input
          type={isPass && showPass ? "password" : "text"}
          placeholder={placeHolder}
          className="flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-text555 text-lg"
          value={value}
          onChange={handleTextChange}
        />
        {/* toggle the eye-icon to show password and hide password */}
        {isPass && (
          <motion.div
            onClick={() => setShowPass(!showPass)}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            {showPass ? (
              <FaEyeSlash className="text-tex555 text-2xl" />
            ) : (
              <FaEye className="text-tex555 text-2xl" />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserAuthInput;
