import React, { useState } from 'react';

const foodItems = [
  { 
    id: 1, 
    name: "Margherita Pizza", 
    category: "pizza", 
    price: 14.99, 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    desc: "Classic Italian pizza with fresh tomatoes, mozzarella cheese, and basil." 
  },
  { 
    id: 2, 
    name: "Chicken Burger", 
    category: "burger", 
    price: 10.50, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    desc: "Crispy fried chicken breast with fresh lettuce, mayo, and pickles." 
  },
  { 
    id: 3, 
    name: "Hyderabadi Biryani", 
    category: "biryani", 
    price: 16.00, 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    desc: "Authentic aromatic basmati rice cooked with tender chicken and spices." 
  },
  { 
    id: 4, 
    name: "Creamy Pasta", 
    category: "pasta", 
    price: 13.50, 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    desc: "Creamy Alfredo pasta with grilled chicken, herbs and parmesan cheese." 
  },
  { 
    id: 5, 
    name: "Vanilla Ice Cream", 
    category: "dessert", 
    price: 6.50, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    desc: "Rich vanilla ice cream topped with chocolate syrup and fresh cherries." 
  },
  { 
    id: 6, 
    name: "Fresh Salad", 
    category: "salad", 
    price: 8.99, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    desc: "Healthy mix of fresh greens, cherry tomatoes, and vinaigrette dressing." 
  }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'burger', label: 'Burger' },
  { id: 'biryani', label: 'Biryani' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'salad', label: 'Salad' }
];

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(25);

  const filteredItems = foodItems.filter((item) => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchPrice = item.price <= maxPrice;
    return matchCategory && matchSearch && matchPrice;
  });

  return (
    <section id="menu" className="py-5 bg-light">
      <div className="container py-4">
        <div className="text-center mb-5 section-title">
          <h5 className="text-danger fw-bold">Our Menu</h5>
          <h2 className="fw-bold">Most Popular Dishes</h2>
        </div>
        
        {/* Filter Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="bg-white p-4 rounded-4 shadow-sm filter-section">
              <div className="row g-3 align-items-center">
                <div className="col-md-4">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <i className="fas fa-search text-muted"></i>
                    </span>
                    <input
                      type="text"
                      id="searchInput"
                      className="form-control border-start-0 ps-0 shadow-none"
                      placeholder="Search food..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-8 d-flex gap-2 overflow-auto py-2 category-filters">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`btn rounded-pill px-4 filter-btn ${
                        activeCategory === cat.id ? 'btn-danger active' : 'btn-outline-danger'
                      }`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 d-flex align-items-center gap-3">
                  <label htmlFor="priceRange" className="fw-semibold text-muted mb-0 text-nowrap">
                    Max Price: $<span id="priceValue">{maxPrice}</span>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="priceRange"
                    min="5"
                    max="25"
                    step="1"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Food Grid */}
        <div className="row g-4 justify-content-center" id="foodGrid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 food-item"
              style={{
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                opacity: 1,
                transform: 'scale(1)'
              }}
            >
              <div className="card h-100 border-0 shadow-sm food-card">
                <img
                  src={item.image}
                  className="card-img-top food-img"
                  alt={item.name}
                />
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title fw-bold mb-0">{item.name}</h5>
                    <span className="badge bg-warning text-dark">
                      <i className="fas fa-star text-danger"></i> {item.rating}
                    </span>
                  </div>
                  <p className="card-text text-muted flex-grow-1">{item.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fs-4 fw-bold text-danger">${item.price.toFixed(2)}</span>
                    <button className="btn btn-danger rounded-pill px-4 btn-hover-scale">
                      <i className="fas fa-shopping-cart me-2"></i>Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <div className="col-12 text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h5 className="text-muted">No dishes match your filters</h5>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
