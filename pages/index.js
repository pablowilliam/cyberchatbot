import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Price from "../components/Prices";
import Product from "../components/Product";
import Product1 from "../components/Product1";
import Product2 from "../components/Product2";
import React from "react";
import Whatsapp from "../components/Whatsapp";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Product />
      <Product1 />
      <Product2 />
      <Price />
      <Footer />
      <Whatsapp />
    </div>
  );
};

export default HomePage;
