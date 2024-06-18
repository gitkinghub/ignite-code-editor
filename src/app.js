import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home, NewProject } from "./container";
import { auth, db } from "./config/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { Spinner } from "./components";
import { useDispatch } from "react-redux";
import { SET_USER } from "./context/actions/userActions";

const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // this monitors the page load
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log(userCred?.providerData[0]); //the email address of the user is not being displayed in firebase, check this part of code later
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(
          () => {
            // dispatch action to store to firebase
            dispatch(SET_USER(userCred?.providerData[0]));
            navigate("/home/projects", { replace: true });
          }
        );
      } else {
        navigate("/home/auth", { replace: true });
      }

      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });

    // cleanup listener event
    return () => unsubscribe();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
          <Spinner />
        </div>
      ) : (
        <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
          <Routes>
            <Route path="/home/*" element={<Home />} />
            <Route path="/newProject" element={<NewProject />} />

            {/* if the route is not matching */}
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
