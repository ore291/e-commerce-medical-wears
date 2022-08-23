import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/NewFooter";
import Navbar from "../components/NewNav";
import Shop from "../components/Shop";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";

const IntroText = styled.p`
    width: 100%;
    max-width: 800px;
    font-weight: 400;
    font-size: 1.8rem;
    text-align: center;
    margin-top: 10px;
    margin-left: auto;
    margin-right:auto;
    padding: 10px;
`;
const Home = () => {
  return (
    <div>
    
      <Slider />
      <IntroText>
        The Leading Brand for Medical Coats and Scrub Suits in Manila. Made with the Utmost Comfort & Style for Our Modern Day Heroes.
      </IntroText>
      <Shop />
      <Categories />
      <Products/>
      <Newsletter/>
     
    </div>
  );
};

export default Home;
