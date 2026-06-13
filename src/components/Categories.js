import React from 'react';

const categoriesData = [
  { id: 1, name: 'Pizza', icon: 'fas fa-pizza-slice', colorClass: 'text-danger' },
  { id: 2, name: 'Burgers', icon: 'fas fa-hamburger', colorClass: 'text-warning' },
  { id: 3, name: 'Biryani', icon: 'fas fa-bowl-rice', colorClass: 'text-success' },
  { id: 4, name: 'Desserts', icon: 'fas fa-ice-cream', colorClass: 'text-info' },
  { id: 5, name: 'Drinks', icon: 'fas fa-glass-cheers', colorClass: 'text-primary' }
];

export default function Categories() {
  return (
    <section id="categories" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5 section-title">
          <h5 className="text-danger fw-bold">Explore</h5>
          <h2 className="fw-bold">Food Categories</h2>
        </div>
        
        <div className="row g-4 justify-content-center text-center">
          {categoriesData.map((category) => (
            <div key={category.id} className="col-6 col-md-4 col-lg-2">
              <a href="#menu" className="text-decoration-none text-dark">
                <div className="category-card p-4 rounded-4 bg-white shadow-sm h-100">
                  <div className="category-icon-box bg-light rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3">
                    <i className={`${category.icon} fs-2 ${category.colorClass}`}></i>
                  </div>
                  <h6 className="fw-bold mb-0">{category.name}</h6>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
