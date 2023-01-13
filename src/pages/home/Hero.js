import React from "react";
import "./Hero.css";
import { Carousel, Button } from "antd";

const Hero = () => {
  const imgSlide = [
    {
      key: "1",
      title: "Take care of your body. It is the only place you have to live",
      img: "https://plus.unsplash.com/premium_photo-1663134042289-00c40d7e0d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      key: "2",
      title: "Training",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      key: "3",
      title: "Yoga",
      img: "https://images.unsplash.com/photo-1508048760491-01d8f9d592e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  function ClickonLearn() {
    alert("Hello");
  }
  return (
    <>
      <div className="hero-section">
        <Carousel autoplay infinite easing="linear">
          {imgSlide.map((image) => {
            return (
              <div key={image.key}>
                <div className="img-container">
                  <img className="containerImage" src={image.img} alt="" />

                  <div
                    className="btnHolder"
                    style={{
                      display: "flex",
                      justifycontent: "center",
                      alignitems: "center",
                    }}
                  >
                    <Button onClick={ClickonLearn} type="primary" size="large">
                      JOIN US
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
