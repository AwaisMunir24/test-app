import React, { Component } from "react";
import "./HomePage.css";
import Slider from "react-slick";
import ContactUs from "./contactus/ContactUs";
import banner2 from '../../Assestes/photos/banner-sec2.jpg';
import Testimonials from "./Testimonial/Testimonials";


const HomePage = () => {
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
              <Slider {...settings}>
                <div className="d-flex text-start justify-content-center align-items-center">
                  {/* <div className="discription ">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, whe
                    </p>
                  </div> */}

                  <div className="Image">
                    <img src={banner2} alt="image" className="img-fluid" />
                  </div>
                </div>
                <div className="d-flex text-start justify-content-center align-items-center">
                  {/* <div className="discription w-50">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, whe
                    </p>
                  </div> */}

                  <div className="Image">
                    <img src={banner2} alt="image" className="img-fluid" />
                  </div>
                </div>
                <div className="d-flex text-start justify-content-center align-items-center">
                  {/* <div className="discription w-50">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, whe
                    </p>
                  </div> */}

                  <div className="Image">
                    <img src={banner2} alt="image" className="img-fluid" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <Testimonials/>
        <ContactUs/>
      </section>
    </>
  );
};
export default HomePage;
