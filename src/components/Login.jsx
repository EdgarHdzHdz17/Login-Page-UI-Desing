import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function LoginComponent() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend o hacer lo que necesites
    console.log("Name:", username);
    console.log("Password:", password);
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
        <div className="relative">
          <input
            className="rounded-md bg-gray-100 w-96 h-10 pl-10"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-3 top-3 text-gray-400"
          />
        </div>
        <div className="relative mt-5">
          <input
            className="rounded-md bg-gray-100 w-96 h-10 pl-10"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faLock}
            className="absolute left-3 top-3 text-gray-400"
          />
        </div>
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
        className="mt-5 rounded-md border border-white-500 w-60 h-10"
        type="submit"
      >
        <FontAwesomeIcon icon={faGoogle} className="mr-5" />
        Login with Google
      </button>
      <button
        className="mt-5 rounded-md border border-white-500 w-60 h-10 lg:mb-5"
        type="submit"
      >
        <FontAwesomeIcon icon={faFacebook} className="mr-5" />
        Login with Facebook
      </button>
    </div>
  );
}

export default LoginComponent;
