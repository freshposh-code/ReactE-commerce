import React from "react";
import "./App.css";
import Announcement from "../Component/Announcement";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";
import Categories from "../Component/Categories";
import Products from "../Component/Products";
import NewsLetter from "../Component/NewsLetter";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <HeroSection />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
