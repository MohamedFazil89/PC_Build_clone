import React, { useState } from "react";
import Navbar from './Components/Navbar';
import Images from "./Components/Images";
import Drawer from "./Components/DrawerNav";
// import { Modal } from '@mui/material';
import ImageSlide from './Components/ImageSlideContainer';
import image1 from './Components/assets/Valorant_Yoru_G_d0f0919d-15e9-4531-8c8b-430313883b73-removebg-preview.png'
import image2 from './Components/assets/A sleek and fut 63826037-c287-4610-b0d3-072445276fb2.png';
import image3 from './Components/assets/A sleek and fut c2790aad-450a-428a-8cd2-c8d6f45fd186.png';
import './App.css';
// import BuildPC from './Components/BuildPC';


export default function App() {
  const arrays = [image1, image2, image3];
  const [check, setCheck] = useState(false);

  const ShowNav = () => {
    setCheck(!check);
  }

  return (
    <>
      <Navbar ShowNav={ShowNav} />
      {check ? <Drawer CloseNav={ShowNav} cName={check ? "navs Active" : "navs"}/>: null}

      <Images />
      <div className="line"></div>

      <div className="imageContainer">
        <ImageSlide array={arrays} />
        
      </div>
      <br />
      <div className="line"></div>


      <ImageSlide array={arrays} />




    </>
  )
}