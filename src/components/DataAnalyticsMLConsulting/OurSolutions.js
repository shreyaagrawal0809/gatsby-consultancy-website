import React from "react";
import { Link } from "gatsby";

import StarIcon from "../../assets/images/star-icon.png";

const OurSolutions = () => {
  return (
    <section className="solutions-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={StarIcon} alt="image" />
            Our Solutions
          </span>
          <h2>We Different From Others Should Choose Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-shopping-basket"></i>
              </div>
              <h3>
                <Link to="/service-details">Retail</Link>
              </h3>
              <p>
                We provide end to end solution for setting up retail store
                across the India and helps the existing as well as upcoming
                entrepreneurs to launch their stores in cost effective and in
                smooth manner.
              </p>

              <Link to="/service-details" className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-settings"></i>
              </div>

              <h3>
                <Link to="/service-details">Distributions</Link>
              </h3>

              <p>
                Aralia team helps in setting up distribution network for
                regional and upcoming FMCG brands across geography both in
                general trade market and modern retail such as Metro, Reliance,
                Big Basket, Amazon.
              </p>

              <Link to="/service-details" className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 offset-lg-0 offset-sm-3">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-idea"></i>
              </div>

              <h3>
                <Link to="/service-details">Startups</Link>
              </h3>

              <p>
                Our team is equipped with vast experience in converting any idea
                in to business opportunity and make it successful.
              </p>

              <Link to="/service-details" className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 offset-lg-0 offset-sm-3">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-house"></i>
              </div>

              <h3>
                <Link to="/service-details">Franchise Opportunity </Link>
              </h3>

              <p>
                Aralia SuperMart is an opportunity for the people who wants to
                associate with the brand and wants to open franchise department
                store. We provide all the support to open our own franchise for
                the first time entrepreneurs.
              </p>

              <Link to="/service-details" className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
