import React, { useContext, useState } from 'react'
import { useLogin } from '../hooks/useLogin';
import { Context } from '../context/AuthContext';

function Login() {
  const { isPending, error, login} = useLogin()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");


   

    const handleSubmit = (e) => {
      e.preventDefault();
      login(email, password, displayName);
    };


  return (
    <div className="pt-24">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-8 w-96 mx-auto text-xl bg"
      >
        <label htmlFor="input1">
          email: <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email kiritin..."
            className="border border-black w-full rounded px-2 py-1 mt-1"
            id="input1"
            type="email"
          />
        </label>
        <label htmlFor="input2">
          password: <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password kiriting..."
            className="border  border-black w-full rounded px-2 py-1 mt-1"
            id="input2"
            type="text"
          />
        </label>

        <button className="hover:bg-green-600 hover:text-white transition-all delay-150 ease-linear border-green-600 p-1 w-32 rounded border-2 text-green-600 font-bold">
          login
        </button>
        {error && <>{error}</>}
      </form>
    </div>
  );
}

export default Login