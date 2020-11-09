import React from "react";
import { Link } from "gatsby";

import AboutImage from "../../assets/images/about/about-img10.png";
import AboutShape from "../../assets/images/about/about-shape1.png";
import StarIcon from "../../assets/images/star-icon.png";
import OurMissionShape from "../../assets/images/our-mission/our-mission-shape2.png";
import CircleShape from "../../assets/images/shape/circle-shape1.png";

const AboutArea = () => {
  return (
    <section className="about-area pb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-img">
              <img src={AboutImage} alt="About Image" />
              <div className="shape">
                <img src={AboutShape} alt="About Shape" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">
                <span className="sub-title">
                  <img src={StarIcon} alt="Star Icon" />
                  About Us
                </span>
                <h2>Consultancy for Startups,E-commerce,Retail and FMCG</h2>
                <p>
                  Founder of Aralia Consultancy <strong>Gaurav Garg</strong> is
                  FMCG and Retail expert with over 20 years experience in
                  leadership roles in Metro, Future Retail, Home Stores &
                  Organic Tattva. Aralia Consultancy provides team of
                  experienced vendors to launch products and grow your buisness.
                </p>

                <ul className="about-list">
                  <li>
                    <i className="flaticon-tick"></i>
                    Experienced Team
                    <img src={OurMissionShape} alt="Our Mission Shape" />
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Tried & Tested Vendors
                    <img src={OurMissionShape} alt="Our Mission Shape" />
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Providing Software Support
                    <img src={OurMissionShape} alt="Our Mission Shape" />
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Brand Fixture From Companies
                    <img src={OurMissionShape} alt="Our Mission Shape" />
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Promoting Brands
                    <img src={OurMissionShape} alt="Our Mission Shape" />
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Fixture & Settings
                    <img src={OurMissionShape} alt="Our Mission Shape" />
                  </li>
                  {/* <li>
                    <i className="flaticon-tick"></i>
                    Business Intelligence
                    <img src={OurMissionShape} alt="Our Mission Shape" />
                  </li> */}
                </ul>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p> */}
                {/* 
                <Link to="/about-us-two" className="default-btn">
                  <i className="flaticon-right"></i>
                  More About Us
                  <span></span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-shape1">
        <img src={CircleShape} alt="Circle Shape" />
      </div>
    </section>
  );
};

export default AboutArea;
