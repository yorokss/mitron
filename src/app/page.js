import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
const page = () => {
  return (
    <>
      <div>
        <Navbar />
        <ProductCard/>
        <Footer/>
      </div>
    </>
  );
};

export default page;
