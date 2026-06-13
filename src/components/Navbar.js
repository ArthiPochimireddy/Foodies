import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand fw-bold text-danger fs-3" href="#home">
            <i className="fas fa-utensils me-2"></i>Foodie
          </a>
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto fw-semibold">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
              <li className="nav-item"><a className="nav-link" href="#categories">Categories</a></li>
              <li className="nav-item"><a className="nav-link" href="#offers">Offers</a></li>
            </ul>
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <a href="#cart" className="text-dark position-relative fs-5 btn-hover-scale me-2 text-decoration-none cart-icon">
                <i className="fas fa-shopping-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>0</span>
              </a>
              <button id="navLoginBtn" className="btn btn-outline-danger rounded-pill px-4 btn-hover-scale" data-bs-toggle="modal" data-bs-target="#authModal" onClick={() => {
                const btn = document.getElementById('loginTabBtn');
                if (btn) btn.click();
              }}>Login</button>
              <button id="navRegisterBtn" className="btn btn-danger rounded-pill px-4 btn-hover-scale" data-bs-toggle="modal" data-bs-target="#authModal" onClick={() => {
                const btn = document.getElementById('registerTabBtn');
                if (btn) btn.click();
              }}>Register</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <div className="modal fade" id="authModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header border-0 pb-0 px-4 pt-4">
              <h4 className="modal-title fw-bold"><i className="fas fa-utensils text-danger me-2"></i>Foodie</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body px-4 pb-4">
              {/* Tabs */}
              <ul className="nav nav-pills nav-fill mb-4 rounded-3 bg-light p-1">
                <li className="nav-item">
                  <button className="nav-link active rounded-3 fw-semibold" id="loginTabBtn" data-bs-toggle="pill" data-bs-target="#loginTab">Sign In</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link rounded-3 fw-semibold" id="registerTabBtn" data-bs-toggle="pill" data-bs-target="#registerTab">Create Account</button>
                </li>
              </ul>
              <div className="tab-content">
                {/* Login Tab */}
                <div className="tab-pane fade show active" id="loginTab">
                  <form id="loginForm" noValidate onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email Address</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0"><i className="fas fa-envelope text-muted"></i></span>
                        <input type="email" id="loginEmail" className="form-control border-start-0 shadow-none ps-0" placeholder="you@example.com" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0"><i className="fas fa-lock text-muted"></i></span>
                        <input type="password" id="loginPassword" className="form-control border-start-0 shadow-none ps-0" placeholder="Your password" required />
                      </div>
                    </div>
                    <button type="submit" id="loginBtn" className="btn btn-danger w-100 rounded-pill py-3 fw-bold fs-5 btn-hover-scale">Sign In</button>
                  </form>
                </div>
                {/* Register Tab */}
                <div className="tab-pane fade" id="registerTab">
                  <form id="registerForm" noValidate onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Full Name</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0"><i className="fas fa-user text-muted"></i></span>
                        <input type="text" id="regName" className="form-control border-start-0 shadow-none ps-0" placeholder="John Doe" required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email Address</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0"><i className="fas fa-envelope text-muted"></i></span>
                        <input type="email" id="regEmail" className="form-control border-start-0 shadow-none ps-0" placeholder="you@example.com" required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Phone <span className="text-muted fw-normal">(Optional)</span></label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0"><i className="fas fa-phone text-muted"></i></span>
                        <input type="tel" id="regPhone" className="form-control border-start-0 shadow-none ps-0" placeholder="+1 555 000 0000" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0"><i className="fas fa-lock text-muted"></i></span>
                        <input type="password" id="regPassword" className="form-control border-start-0 shadow-none ps-0" placeholder="Min. 6 characters" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Confirm Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0"><i className="fas fa-shield-alt text-muted"></i></span>
                        <input type="password" id="regConfirmPassword" className="form-control border-start-0 shadow-none ps-0" placeholder="Repeat password" required />
                      </div>
                    </div>
                    <button type="submit" id="registerBtn" className="btn btn-danger w-100 rounded-pill py-3 fw-bold fs-5 btn-hover-scale">Create Account</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
