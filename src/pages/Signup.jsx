import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { isPending, error, signup} = useSignup()




  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName);
  };
  return (
    <div className="pt-24">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-8 w-96 mx-auto my-auto text-xl"
      >
        <label htmlFor="input1">
          email: <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            laceholder="email kiritin..."
            className="border border-black w-full rounded px-2 py-1 mt-1"
            id="input1"
            type="email"
            placeholder="email kiriting..."
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
        <label htmlFor="input3">
          displayName: <br />
          <input
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
            placeholder="Ismingizni kiriting kiriting..."
            className="border  border-black w-full rounded px-2 py-1 mt-1"
            id="input3"
            type="text"
          />
        </label>

        {!isPending && (
          <button className="hover:bg-green-600 hover:text-white transition-all delay-150 ease-linear border-green-600 p-1 w-32 rounded border-2 text-green-600 font-bold">
            Signup
          </button>
        )}
        {isPending && (
          <button className="hover:bg-green-600 hover:text-white transition-all delay-150 ease-linear border-green-600 p-1 w-32 rounded border-2 text-green-600 font-bold">
            Loading...
          </button>
        )}

          {error && <p>{error}</p>}

      </form>
    </div>
  );
}

export default Signup;
