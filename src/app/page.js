import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product";

const page = () => {
  return (
    <>
      <div>
      
        <Navbar />
        <Home/>
        <Product/>
        <Footer/>
      </div>
    </>
  );
};

export default page;
