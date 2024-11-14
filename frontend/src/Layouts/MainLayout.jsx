import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainLayout;
