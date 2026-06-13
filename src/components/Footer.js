import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5 section-title">
            <h5 className="text-danger fw-bold">Why Choose Us</h5>
            <h2 className="fw-bold">Our Excellent Services</h2>
          </div>
          <div className="row g-4 text-center">
            <div className="col-lg-4 col-md-6">
              <div className="service-box p-4 rounded bg-white shadow-sm h-100">
                <div className="icon-wrapper bg-danger text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3">
                  <i className="fas fa-motorcycle fs-3"></i>
                </div>
                <h4 className="fw-bold mb-3">Fast Delivery</h4>
                <p className="text-muted">We promise to deliver your food piping hot and fresh within 30 minutes.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box p-4 rounded bg-white shadow-sm h-100">
                <div className="icon-wrapper bg-danger text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3">
                  <i className="fas fa-utensils fs-3"></i>
                </div>
                <h4 className="fw-bold mb-3">Quality Food</h4>
                <p className="text-muted">We only partner with top-rated restaurants to ensure the best quality meals.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box p-4 rounded bg-white shadow-sm h-100">
                <div className="icon-wrapper bg-danger text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3">
                  <i className="fas fa-headset fs-3"></i>
                </div>
                <h4 className="fw-bold mb-3">24/7 Support</h4>
                <p className="text-muted">Our dedicated support team is always available to help you with your orders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5 section-title">
            <h5 className="text-danger fw-bold">Testimonials</h5>
            <h2 className="fw-bold">What Our Customers Say</h2>
          </div>
          
          <div className="row g-4 justify-content-center">
            {/* Review 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm review-card rounded-4 p-4">
                <div className="card-body">
                  <i className="fas fa-quote-left fa-2x text-danger opacity-25 mb-4"></i>
                  <p className="card-text text-muted mb-4 fst-italic">"The food is always piping hot and delicious. Their Margherita pizza is exactly like what I had in Italy. The delivery is incredibly fast too!"</p>
                  <div className="d-flex align-items-center mt-auto">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" className="rounded-circle shadow-sm me-3" width="60" height="60" />
                    <div>
                      <h6 className="fw-bold mb-1">Sarah Johnson</h6>
                      <div className="text-warning small">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm review-card rounded-4 p-4">
                <div className="card-body">
                  <i className="fas fa-quote-left fa-2x text-danger opacity-25 mb-4"></i>
                  <p className="card-text text-muted mb-4 fst-italic">"I've been ordering from Foodie for months. Their burgers are juicy and the family combos save us so much time and money on weekends!"</p>
                  <div className="d-flex align-items-center mt-auto">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" className="rounded-circle shadow-sm me-3" width="60" height="60" />
                    <div>
                      <h6 className="fw-bold mb-1">Michael Chen</h6>
                      <div className="text-warning small">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Review 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm review-card rounded-4 p-4">
                <div className="card-body">
                  <i className="fas fa-quote-left fa-2x text-danger opacity-25 mb-4"></i>
                  <p className="card-text text-muted mb-4 fst-italic">"The customer service is outstanding. I had a special request for my biryani and they nailed it perfectly. Highly recommended!"</p>
                  <div className="d-flex align-items-center mt-auto">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Rodriguez" className="rounded-circle shadow-sm me-3" width="60" height="60" />
                    <div>
                      <h6 className="fw-bold mb-1">Emily Rodriguez</h6>
                      <div className="text-warning small">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-dark text-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <h3 className="fw-bold text-danger mb-4"><i className="fas fa-utensils me-2"></i>Foodie</h3>
              <p className="text-muted mb-4">Making online food ordering fast, easy and reliable. Delivering happiness directly to your doorstep.</p>
              <div className="d-flex gap-3 social-icons">
                <a href="#facebook" className="text-light fs-4"><i className="fab fa-facebook"></i></a>
                <a href="#twitter" className="text-light fs-4"><i className="fab fa-twitter"></i></a>
                <a href="#instagram" className="text-light fs-4"><i className="fab fa-instagram"></i></a>
                <a href="#youtube" className="text-light fs-4"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#home" className="text-muted text-decoration-none footer-link">Home</a></li>
                <li className="mb-2"><a href="#menu" className="text-muted text-decoration-none footer-link">Menu</a></li>
                <li className="mb-2"><a href="#categories" className="text-muted text-decoration-none footer-link">Categories</a></li>
                <li className="mb-2"><a href="#offers" className="text-muted text-decoration-none footer-link">Offers</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-4">Contact Info</h5>
              <ul className="list-unstyled text-muted">
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-map-marker-alt text-danger mt-1 me-3"></i>
                  <span>123 Food Street, Culinary District, New York, NY 10001</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fas fa-phone-alt text-danger me-3"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fas fa-envelope text-danger me-3"></i>
                  <span>support@foodie.com</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-4">Newsletter</h5>
              <p className="text-muted mb-3">Subscribe to get latest updates and offers.</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control bg-transparent text-light border-secondary shadow-none" placeholder="Enter your email" aria-label="Recipient's email" />
                <button className="btn btn-danger px-3" type="button"><i className="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
          <hr className="border-secondary mt-5 mb-4" />
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted">
            <p className="mb-0">&copy; 2026 Foodie. All rights reserved.</p>
            <div className="mt-3 mt-md-0">
              <a href="#privacy" className="text-muted text-decoration-none me-3 hover-text-white">Privacy Policy</a>
              <a href="#terms" className="text-muted text-decoration-none hover-text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
