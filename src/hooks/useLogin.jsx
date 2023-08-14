import React, { useContext, useState } from "react";
import { projectAuth } from "../components/firebase.config";
import { Context } from "../context/AuthContext";
import { toast } from "react-toastify";

function useLogin() {
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

   const { loginIn } = useContext(Context);

  const login = async (email, password) => {
    try {
      setIspending(true);

      const req = await projectAuth.signInWithEmailAndPassword(email, password);


      loginIn(req.user);
      setIspending(false);

      toast.success("Login Succesfully!")

    } catch (err) {
      setError(err.message);
      setIspending(false);
    }
  };
  return { isPending, error, login };
}

export { useLogin };
