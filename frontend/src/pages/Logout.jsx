import { toast, ToastContainer } from "react-toastify";
import { useGetmeQuery, useLogoutMutation } from "../app/services/userSlicer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const res = await logout().unwrap();
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
          navigate("/login");
        }, 2000);
      } catch (error) {
        console.log(error);
        toast.error(error, {
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
    handleLogout();
  }, []);
  return <div>
    <ToastContainer />
  </div>;
};

export default Logout;
