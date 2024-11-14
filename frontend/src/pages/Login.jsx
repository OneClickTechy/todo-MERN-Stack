import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginMutation } from "../app/services/userSlicer";
import { useNavigate } from "react-router";

const Login = () => {
  const [login] = useLoginMutation();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  //destruct from userInfo
  const { username, password } = userInfo;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const canSave = Boolean(username && password); //checkpoint for all fields

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(userInfo).unwrap();
      console.log(res);
      toast.success(res.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.data.error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="sr-only">
          Username:{" "}
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="username"
          autoComplete="on"
          minLength={3}
        />

        <label htmlFor="password" className="sr-only">
          Password:{" "}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
          minLength={6}
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!canSave}
        className={`${!canSave && "bg-black/50"}`}
      >
        Login
      </button>
      <ToastContainer />
    </form>
  );
};

export default Login;
