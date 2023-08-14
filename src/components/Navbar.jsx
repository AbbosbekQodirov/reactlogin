import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/AuthContext";
import { toast } from "react-toastify";

function Navbar() {
  const { user, logOut } = useContext(Context);
  // console.log(user.displayName);

  return (
    <div className="flex justify-between bg-green-400  p-6 px-24">
      <div>
        <Link to="/">
          <h1>MyMoney</h1>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <h1>Hello, {user.displayName} </h1>
            <button
              onClick={() => {
                logOut()
                toast("Log Out succesfully!")
              }}
              className="btn bg-orange-900 text-white px-6 py-1 rounded-lg"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/signup">SignUp</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
