import React, { useState } from "react";
import "./HomePage.css";
import Slider from "react-slick";
import ContactUs from "./contactus/ContactUs";
import banner2 from "../../Assestes/photos/banner-sec2.jpg";
import Testimonials from "./Testimonial/Testimonials";
import Abs_HomeSli from "../../AbstractComponent/Abs_HomeSli/Abs_HomeSli";

const HomePage = () => {
  const [slider, setSlider] = useState([
    {
      img: banner2,
    },
    {
      img: banner2,
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="">
        <div className="container-fluid homepage">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="slider-sli">
                <Slider {...settings}>
                  {slider.map((e, idx) => (
                    <Abs_HomeSli sliderImg={e.img} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <ContactUs />
      </section>
    </>
  );
};
export default HomePage;
