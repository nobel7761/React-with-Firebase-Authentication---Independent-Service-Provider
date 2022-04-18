import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../../imgs/Banner-img/banner-1.jpeg";
import banner2 from "../../../../imgs/Banner-img/banner-2.jpeg";
import banner3 from "../../../../imgs/Banner-img/banner-3.jpeg";
const Banner = () => {
  return (
    <section >
      <Carousel fade>
        <Carousel.Item className="banner-item">
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="">
            <h2 style={{ fontSize: '45px', color: 'white', fontWeight: 'bold' }}>Car Accident</h2>
            <p style={{ fontSize: '25px', color: 'white', fontWeight: 'bold' }}>
              Accidents happen. We hear it all the time.
            </p>
            <button className="btn btn-danger">Book Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner-item">
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h2 style={{ fontSize: '45px', color: 'black', fontWeight: 'bold' }}>Divorce</h2>
            <p style={{ fontSize: '25px', color: 'black', fontWeight: 'bold' }}>
              Divorce entails the cancellation or reorganization of the legal
              responsibilities.
            </p>
            <button className="btn btn-danger">Book Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner-item">
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h2 style={{ fontSize: '45px', color: 'black', fontWeight: 'bold' }}>Criminal Defence</h2>
            <p style={{ fontSize: '25px', color: 'black', fontWeight: 'bold' }}>
              Criminal law is the body of law that relates to crime.
            </p>
            <button className="btn btn-danger">Book Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
