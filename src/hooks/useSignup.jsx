import React, { useContext, useState } from "react";
import { projectAuth } from "../components/firebase.config";
import { Context } from "../context/AuthContext";
import { toast } from "react-toastify";

function useSignup() {
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

   const { loginIn } = useContext(Context);

  const signup = async (email, password, displayName) => {
    try {
      setIspending(true);
      const req = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await req.user.updateProfile({ displayName });
      loginIn(req.user);
      setIspending(false);
      toast.success("SignUp Succesfully!");
    } catch (err) {
      setError(err.message);
      setIspending(false)
    }
  };
  return { isPending, error, signup };
}

export { useSignup };
