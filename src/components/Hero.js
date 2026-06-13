import React from 'react';

export default function Hero() {
  return (
    <header id="home" className="hero-section d-flex align-items-center">
      <div className="container position-relative z-index-1">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-center text-lg-start hero-content">
            <span className="badge bg-danger rounded-pill px-3 py-2 mb-3 shadow-sm">
              Fastest Delivery &nbsp;🚀
            </span>
            <h1 className="display-3 fw-bold mb-4 text-white">
              Delicious Food Delivered To Your Doorstep
            </h1>
            <p className="lead mb-4 text-light">
              Discover the best food & drinks in your city. Order online for super fast delivery or pickup.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <a href="#menu" className="btn btn-danger btn-lg rounded-pill shadow px-5 btn-hover-scale">
                Order Now
              </a>
              <a href="#services" className="btn btn-light btn-lg rounded-pill shadow px-5 btn-hover-scale text-danger fw-semibold">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </header>
  );
}
