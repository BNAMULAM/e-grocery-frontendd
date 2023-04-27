import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../component/signupandsignin/login.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
  };

  return (
    <div>
      <Nav />
      <br></br>
      <br></br>
      <Slider {...settings}>
        <div style={{ margin: "0 10px" }}>
          <Link to="/login">
            <div className="image-container">
              <img
                src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/6e07db09-0a44-4a9f-a7a4-32cd67e287fa-Banner-Carousel_Organic-Fruits-&-Vegetables-2.png"
                alt="Image 1"
              />
            </div>
          </Link>
        </div>
        <div style={{ margin: "0 10px" }}>
          <Link to="/login">
            <div className="image-container">
              <img
                src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/0053a802-b556-4907-904e-24af14af544a-Carousel_Healthy-oils.png"
                alt="Image 2"
              />
            </div>
          </Link>
        </div>
        <div style={{ margin: "0 10px" }}>
          <Link to="/login">
            <div className="image-container">
              <img
                src="https://cdn.zeptonow.com/production///tr:w-420,ar-692-471,pr-true,f-webp,q-80/inventory/category/80f85556-668a-4953-975d-c9b8c7147ddf-Atta,_Rice,_Oil_&_Dals-01.png"
                alt="Image 3"
              />
            </div>
          </Link>
        </div>
        <div style={{ margin: "0 10px" }}>
          <Link to="/login">
            <div className="image-container">
              <img
                src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/8a31fe40-f635-4267-be23-6be06e58395f-Carousel_Check_our_pulse.png"
                alt="Image 4"
              />
            </div>
          </Link>
        </div>
        <div style={{ margin: "0 10px" }}>
          <Link to="/login">
            <div className="image-container">
              <img
                src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/a0daf7bf-733c-429d-b0f3-1b4d1a71997c-Banner-Carousel_Daily-Basket_(3).png"
                alt="Image 5"
              />
            </div>
          </Link>
        </div>
        <div style={{ margin: "0 10px" }}>
          <Link to="/login">
            <div className="image-container">
              <img
                src="https://cdn.zeptonow.com/production///tr:w-420,ar-664-452,pr-true,f-webp,q-80/inventory/category/fad86a63-828f-4381-b9e8-58b39d48ed41-Frame_11049_(1).png"
                alt="Image 6"
              />
            </div>
          </Link>
        </div>
      </Slider>
      <div style={{ margin: "30px 10px" }}>
        <Link to="/login">
          <div>
            <img
              src="https://cdn.zeptonow.com/production///tr:w-1029,ar-1029-306,pr-true,f-webp,q-80/inventory/banner/27166f39-69b9-4a8c-b1d5-69c6550361a2-Top_Flours.png"
              alt="Image 2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
