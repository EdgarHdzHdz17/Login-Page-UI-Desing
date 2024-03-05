import React, { useState } from "react";

function LoginComponent() {
  const [userName, setUserName] = useState("");
  const [passwonrd, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend o hacer lo que necesites
    console.log("Name:", userName);
    console.log("Password:", passwonrd);
  };

  return (
    <div className=" w-full mx-5 flex flex-col text-center items-center">
      <h1 className="mt-10 font-bold text-6xl text-violet-500">LOGIN</h1>
      <p className="mt-10 text-lg">
        How to I get started lorem ipsum dolor at?
      </p>
      <form
        className="mt-10 flex flex-col text-lg items-center w-screen"
        onSubmit={handleSubmit}
      >
        <label className="text-lg mt-5">
          <input
            className="rounded-md bg-gray-100 w-96 h-10"
            type="text"
            value={userName}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label className="mt-5 text-lg">
          <input
            className="rounded-md bg-gray-100 w-96 h-10"
            type="email"
            placeholder="Password"
            value={passwonrd}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="mt-10 rounded-md w-60 h-16 mb-5 bg-violet-500 text-white"
          onPress
          type="submit"
        >
          Login Now
        </button>
      </form>
      <p className="mt-10">Login whith Others</p>
      <button
        className="mt-10 rounded-md border border-white-500 w-60 h-10"
        type="submit"
      >
        Login with Google
      </button>
      <button
        className="mt-10 rounded-md border border-white-500 w-60 h-10"
        type="submit"
      >
        Login with Facebook
      </button>
    </div>
  );
}

export default LoginComponent;
