import React, { useState } from 'react';

export default function Offers() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('BOGO26');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="offers" className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5 section-title">
          <h5 className="text-danger fw-bold">Special Deals</h5>
          <h2 className="fw-bold">Exclusive Offers & Combos</h2>
        </div>
        
        {/* Promotional Banners */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div 
              className="offer-banner rounded-4 overflow-hidden position-relative shadow-sm h-100" 
              style={{
                background: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80') center/cover",
                minHeight: '280px'
              }}
            >
              <div className="offer-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
              <div className="position-relative z-index-1 p-5 text-white d-flex flex-column h-100 justify-content-center">
                <span className="badge bg-danger rounded-pill align-self-start mb-3 px-3 py-2 shadow-sm">Limited Time</span>
                <h3 className="fw-bold display-5 mb-2">50% OFF</h3>
                <h5 className="mb-4 fw-normal">On your first order</h5>
                <button className="btn btn-light text-danger rounded-pill px-4 py-2 fw-bold align-self-start btn-hover-scale shadow-sm">Claim Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div 
              className="offer-banner rounded-4 overflow-hidden position-relative shadow-sm h-100" 
              style={{
                background: "url('https://images.unsplash.com/photo-1594212691516-acbf1ea47d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80') center/cover",
                minHeight: '280px'
              }}
            >
              <div className="offer-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
              <div className="position-relative z-index-1 p-5 text-white d-flex flex-column h-100 justify-content-center">
                <span className="badge bg-warning text-dark rounded-pill align-self-start mb-3 px-3 py-2 shadow-sm">Weekend Special</span>
                <h3 className="fw-bold display-5 mb-2">Buy 1 Get 1</h3>
                <h5 className="mb-4 fw-normal">Free on all Burgers</h5>
                <div 
                  className="d-flex align-items-center bg-white rounded-pill p-1 align-self-start coupon-code shadow-sm"
                  onClick={handleCopyCode}
                  title="Click to copy coupon code"
                >
                  <span className="text-dark fw-bold px-3 border-end border-2 border-dashed border-secondary">BOGO26</span>
                  <button className="btn btn-sm btn-danger rounded-pill px-4 ms-2 fw-bold">
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Combo Offers */}
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm offer-card text-center overflow-hidden rounded-4">
              <div className="offer-ribbon bg-danger text-white fw-bold shadow-sm">Save 20%</div>
              <div className="card-body p-5 d-flex flex-column">
                <div className="mb-4">
                  <i className="fas fa-pizza-slice text-danger fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">Couple Combo</h4>
                <p className="text-muted flex-grow-1">1 Medium Pizza + 2 Garlic Breads + 2 Drinks</p>
                <div className="mb-4">
                  <span className="text-muted text-decoration-line-through me-2">$35.00</span>
                  <span className="fs-2 fw-bold text-danger">$28.00</span>
                </div>
                <button className="btn btn-outline-danger w-100 rounded-pill py-2 btn-hover-scale fw-bold">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm offer-card text-center overflow-hidden rounded-4 bg-danger text-white">
              <div className="offer-ribbon bg-warning text-dark fw-bold shadow-sm">Best Seller</div>
              <div className="card-body p-5 d-flex flex-column">
                <div className="mb-4">
                  <i className="fas fa-hamburger text-warning fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">Family Feast</h4>
                <p className="text-light opacity-75 flex-grow-1">4 Classic Burgers + 2 Large Fries + 4 Drinks</p>
                <div className="mb-4">
                  <span className="text-light opacity-50 text-decoration-line-through me-2">$55.00</span>
                  <span className="fs-2 fw-bold text-warning">$40.00</span>
                </div>
                <button className="btn btn-warning text-dark w-100 rounded-pill py-2 btn-hover-scale fw-bold">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm offer-card text-center overflow-hidden rounded-4">
              <div className="offer-ribbon bg-danger text-white fw-bold shadow-sm">Save 15%</div>
              <div className="card-body p-5 d-flex flex-column">
                <div className="mb-4">
                  <i className="fas fa-bowl-rice text-success fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">Biryani Special</h4>
                <p className="text-muted flex-grow-1">2 Chicken Biryani + 1 Dessert + 2 Drinks</p>
                <div className="mb-4">
                  <span className="text-muted text-decoration-line-through me-2">$42.00</span>
                  <span className="fs-2 fw-bold text-danger">$35.00</span>
                </div>
                <button className="btn btn-outline-danger w-100 rounded-pill py-2 btn-hover-scale fw-bold">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
