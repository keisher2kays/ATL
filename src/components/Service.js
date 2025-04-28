import React, { useState, useEffect } from 'react';
import pantum from '../images/pantum.jpg'
import printer255 from '../images/255.jpg';
import printer4024 from '../images/olivetti-4024mf.jpg'
import laptops12gen from '../images/hp12gen.jpg'
import Toneroti from '../images/otitoner.jpg'
import toner255 from '../images/toner255.webp'
import laserjet from '../images/laserjet.png'
import stapler from '../images/Stapler-Black-1-scaled.jpg'
import flatfiles from '../images/flat files.png'
import flipcharts from '../images/flip charts.webp'
import leverfiles from '../images/lever files.png'
import paperpuncher from '../images/paper punch.jpg'
import penandpencils from '../images/pen ad pencils.jpg'
import staplepins from '../images/staple pins.jpg'
import typek from '../images/typek.jpg'

const Services = () => {
  const [showServicesContent, setShowServicesContent] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  // Add these state hooks at the top of your Services component
const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);
const [showDetailsModal, setShowDetailsModal] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const [orderComplete, setOrderComplete] = useState(false);
const [customerInfo, setCustomerInfo] = useState({
  name: '',
  email: '',
  phone: '',
  address: '',
  paymentMethod: 'ecocash'
});

  // Product database
  const products = [
    {
      id: 1,
      name: "HP 250 Dual Core Laptop",
      category: "laptops",
      price: 280.00,
      specs: [
       "Processor: Intel Celeron Dual Core (12th Gen 4500U or N4500)",
    "RAM: 8 GB DDR4 RAM",
    "Storage: 256 GB SSD",
    "Display: 15.6-inch HD (1366x768) display with 250 nits brightness and 45% NTSC color gamut",
    "Graphics: Intel Integrated Graphics",
    "Battery Life: Up to 3 hours",
    "Ports: 2 x USB 3.2 Type-A, 1 x HDMI port, RJ45 Ethernet port, USB Type-C port (on some models)",
    "Operating System: DOS or Windows 11 Home"
      ],
    image: laptops12gen,
      featured: true
    },
    
    {
      id: 3,
      name: "Olivetti D Copia 255",
      category: "printers",
      price: 2600.00,
      specs: [
        "Mono A3 multifunctional printer",
        "Print speed of up to 25 ppm A4",
        "4.3\" color touch panel for easy navigation",
        "1 GB RAM memory, expandable to 3 GB",
        "Optional SSD memory (32 GB or 128 GB)",
        "Supports network and mobile printing",
        "Includes a 50-sheet document feeder",
      "Print, copy, scan, and optional fax capabilities",
    "Resolution: 600 x 600 dpi, fine 1,200 x 1,200 dpi",
      ],
    image: printer255,
      featured: true
    },
    {
      id: 4,
      name: "Olivetti D Cpoia 4024",
      category: "printers",
      price: 1200.00,
      specs: [
        "Print, copy, scan, and optional fax capabilities",
        "Ideal for heavier duty volumes",
        "Speeds up to 40 ppm with a resolution of 1200 dpi",
        "Dual Scan Document Feeder: One pass scans both sides of the sheet",
        "Large toner capacity – up to 7,200 pages",
        "Standard 250-sheet input tray and optional 500-sheet tray",
        "150-sheet output capacity",
        "USB 2.0 and optional Ethernet/Wi-Fi connectivity",   
      ],
       image:printer4024 ,
      featured: false
    },
    {
      id: 5,
      name: "Olivetti B0357",
      category: "toners",
      price: 80.00,
      specs: [
        "Model: Olivetti B0357 (Black)",
    "Page Yield: Not specified for this exact model, but similar Olivetti models have page yields ranging from 7,200 pages",
    "Compatibility: Compatible toner cartridges are available from brands like FranceToner and InknToner UK"
      ],
    image: Toneroti,
      featured: true
    },
    {
      id: 6,
      name: "Olivetti B1272",
      category: "toners",
      price: 124.00,
      specs: [
        "Toner Model: Olivetti B1272 (Black)",
    "Page Yield: Approximately 15,000 pages",
    "Compatibility: Compatible with Olivetti d-Copia 255MF printer",
      ],
    image: toner255,
      featured: false
    },
    {
      id: 7,
      name: "PANTUM BM2305AW ",
      category: "printers",
      price: 34.99,
      specs: [
       "Print Speed: 22 pages per minute (A4) / 23 pages per minute (Letter)",
    "First Print Out Time: Less than 7.8 seconds",
    "Print Resolution: Up to 1200 x 1200 DPI",
    "Duplex Mode: Manual",
    "Recommended Monthly Volume: 250-2,000 pages",
    "Maximum Monthly Duty Cycle: 10,000 pages"
      ],
       image: pantum,
      featured: true
    },
    {
      id: 8,
      name: "HP LaserJet Pro MFP 4103fdn",
      category: "printers",
      price: 49.99,
      specs: [
        "Print Speed: Up to 40 ppm (A4), up to 42 ppm (Letter)",
    "First Page Out Time: As fast as 6.1 seconds (black, ready)",
    "Print Resolution: Up to 1200 x 1200 dpi (Fine Lines)",
    "Copy Speed: Up to 40 cpm (black text)",
    "Maximum Copy Resolution: 600 x 600 dpi",
    "USB Ports: 1 Hi-Speed USB 2.0, 1 rear host USB, 1 front USB port",
    "Ethernet: Gigabit Ethernet 10/100/1000 network",
    "Wi-Fi: 802.11b/g/n / 2.4 / 5 GHz Wi-Fi radio + BLE",
    "Input Capacity: 100-sheet tray 1, 250-sheet input tray 2"
      ],
    image: laserjet,
      featured: true
    },
    {
      id: 9,
      name: "Staple Pins",
      category: "stationery",
      price: 29.99,
      specs: [
        "Standard size 26/6",
        "Pack of 1000 staples",
        "Galvanized steel construction",
        "Compatible with most standard staplers",
        "Sharp precision points for clean stapling",
        "Box dimensions: 2\" x 1\" x 0.5\"",
        "Silver finish"
      ],
      image: staplepins,
      featured: false
    },
    {
      id: 10,
      name: "Flip Charp",
      category: "stationery",
      price: 0.50,
      specs: [
        "25 sheets per pad",
        "Paper size: 585mm x 810mm",
        "80gsm paper quality",
        "Perforated for easy tear-off",
        "Universal punching to fit most flip chart stands",
        "Plain white paper",
        "20mm grid pattern for neat writing"
      ],
      image: flipcharts,
      featured: false
    },
    {
      id: 11,
      name: "Flat Files",
      category: "stationery",
      price: 0.40,
      specs: [
        "A4 size document storage",
        "Made from durable polypropylene material",
        "Capacity: approximately 100 sheets",
        "Dimensions: 310mm x 240mm",
        "Available in multiple colors",
        "Clear front for document visibility",
        "Label space for easy identification"
      ],
      image: flatfiles,
      featured: false
    },
    {
      id: 12,
      name: "Pens and Pencil",
      category: "stationery",
      price: 0.15,  
      specs: [
        "Pack includes 10 ballpoint pens and 5 mechanical pencils",
        "Pen ink color: blue and black",
        "Medium 0.7mm pen tip",
        "Comfortable rubber grip",
        "Mechanical pencil: 0.5mm lead",
        "Retractable design",
        "Ideal for everyday writing tasks"
      ],
      image: penandpencils,
      featured: false
    },
    {
      id: 13,
      name: "Paper Puncher",
      category: "stationery",
      price: 4.50,
      specs: [
        "Two-hole punch design",
        "Punching capacity: up to 30 sheets",
        "Metal construction with non-slip base",
        "Adjustable paper guide for accurate punching",
        "Built-in paper alignment ruler",
        "Dimensions: 5\" x 3\" x 2.5\"",
        "Waste container for easy emptying"
      ],
      image: paperpuncher,
      featured: false
    },
    {
      id: 14,
      name: "Lever Arch Files",
      category: "stationery",
      price: 1.70,
      specs: [
        "Paper size: A4",
        "Spine width: 70mm",
        "Made from durable cardboard with plastic covering",
        "Metal lever arch mechanism",
        "Metal edge protectors",
        "Finger ring for easy removal from shelf",
        "Label holder on spine"
      ],
      image: leverfiles,
      featured: false
    },
    {
      id: 15,
      name: "A4 Bond Paper",
      category: "stationery",
      price: 4.50,
      specs: [
        "A4 size (210mm x 297mm)",
        "80gsm weight",
        "Bright white color",
        "500 sheets per ream",
        "Acid-free for archival quality",
        "Compatible with all printers and copiers",
        "Smooth surface for excellent print quality"
      ],
    image: typek,
      featured: false
    },
    {
      id: 16,
      name: "staple",
      category: "stationery",
      price: 4.00,
      specs: [
        "Heavy-duty metal construction",
        "Full strip capacity: 210 staples",
        "Stapling capacity: up to 20 sheets",
        "Built-in staple remover",
        "Anti-jam mechanism",
        "Dimensions: 6\" x 2.5\" x 1.5\"",
        "Compatible with standard 26/6 staples"
      ],
      image: stapler,
      featured: false
    }
  ];

  useEffect(() => {
    // Services content with delay for smooth scroll effect
    const servicesTimer = setTimeout(() => {
      setShowServicesContent(true);
    }, 800);
    
    // Observer for scroll-based animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowServicesContent(true);
        }
      },
      { threshold: 0.1 }
    );
    
    // Observe the services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      observer.observe(servicesSection);
    }
    
    return () => {
      clearTimeout(servicesTimer);
      if (servicesSection) {
        observer.unobserve(servicesSection);
      }
    };
  }, []);
// Add these functions to your Services component
const handleViewDetails = (product) => {
  setSelectedProduct(product);
  setShowDetailsModal(true);
};

const handleAddToCart = (product) => {
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    setCart(cart.map(item => 
      item.id === product.id ? {...item, quantity: item.quantity + 1} : item
    ));
  } else {
    setCart([...cart, {...product, quantity: 1}]);
  }
};

const handleRemoveFromCart = (productId) => {
  setCart(cart.filter(item => item.id !== productId));
};

const updateQuantity = (productId, newQuantity) => {
  if (newQuantity < 1) return;
  setCart(cart.map(item => 
    item.id === productId ? {...item, quantity: newQuantity} : item
  ));
};

const calculateTotal = () => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const handleCustomerInfoChange = (e) => {
  const { name, value } = e.target;
  setCustomerInfo({...customerInfo, [name]: value});
};

const handleSubmitOrder = (e) => {
  e.preventDefault();
  
  // Here you would normally send the email via a backend API
  // For demonstration, we'll just show the order complete message
  console.log("Order submitted:", {
    customerInfo,
    items: cart,
    total: calculateTotal()
  });
  
  // In a real implementation, you would call your backend API here
  // sendOrderEmail(customerInfo, cart, calculateTotal());
  
  setOrderComplete(true);
  setCart([]);
};
 
const filteredProducts = products.filter(product => {
  const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
  const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        (product.specs && product.specs.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())));
  return matchesCategory && matchesSearch;
});

  // Get featured products
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section 
      id="services" 
      className={`services-section ${showServicesContent ? 'fade-in' : ''}`}
    >
      <div className="services-container">
        <div className="services-header">
          <h2>Our Premium Office Products</h2>
          <p>Elevate your workspace with our carefully curated selection of high-quality office essentials</p>
        </div>
      
        
        {/* Search and filter controls */}
        <div className="product-controls">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="cart-icon-container">
  <button className="cart-icon" onClick={() => setShowCart(true)}>
    🛒 {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
  </button>
</div>
          <div className="category-filters">
            <button 
              className={`category-button ${selectedCategory === 'printers' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('printers')}
            >
              Printers
            </button>
            <button 
              className={`category-button ${selectedCategory === 'laptops' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('laptops')}
            >
              Laptops
            </button>
            <button 
              className={`category-button ${selectedCategory === 'toners' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('toners')}
            >
              Toners
            </button>
            <button 
              className={`category-button ${selectedCategory === 'stationery' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('stationery')}
            >
              Stationery
            </button>
            <button 
              className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Products
            </button>
          </div>
        </div>
        
        {/* Featured products section */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="featured-products">
            <h3>Featured Products</h3>
            <div className="featured-products-grid">
              {featuredProducts.map(product => (
                <div className="featured-product-card" key={product.id}>
                  <div className="featured-product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="featured-badge">Featured</div>
                  </div>
                  <div className="featured-product-details">
                    <h4>{product.name}</h4>
                    <p className="featured-product-price">${product.price.toFixed(2)}</p>
                    {/* <button className="view-details-btn">View Details</button> */}
                    <button className="view-details-btn" onClick={() => handleViewDetails(product)}>View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* All products grid */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  
                  <div className="product-specs">
  <h5>Specifications:</h5>
  <ul>
    {product.specs && product.specs.map((spec, index) => (
      <li key={index}>{spec}</li>
    ))}
  </ul>
</div>
                  <div className="product-actions">
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    {/* <button className="add-to-cart-btn">Add to Cart</button> */}
                    {/* <button className="inquiry-btn">Inquire</button> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products-message">
              <p>No products found matching your criteria. Please try a different search or category.</p>
            </div>
          )}
        </div>
        

       
      </div>
      {/* Product Details Modal */}
{showDetailsModal && selectedProduct && (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-header">
        <h3>{selectedProduct.name}</h3>
        <button className="close-modal" onClick={() => setShowDetailsModal(false)}>×</button>
      </div>
      <div className="modal-body">
        <div className="modal-product-image">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>
        <div className="modal-product-details">
          <p className="modal-product-price">${selectedProduct.price.toFixed(2)}</p>
          <div className="modal-product-specs">
            <h4>Specifications:</h4>
            <ul>
              {selectedProduct.specs && selectedProduct.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <button className="add-to-cart-btn" onClick={() => {
            handleAddToCart(selectedProduct);
            setShowDetailsModal(false);
            setShowCart(true);
          }}>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
)}

{/* Shopping Cart Modal */}
{showCart && (
  <div className="modal-overlay">
    <div className="modal-content cart-modal">
      <div className="modal-header">
        <h3>Your Shopping Cart</h3>
        <button className="close-modal" onClick={() => setShowCart(false)}>×</button>
      </div>
      <div className="modal-body">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-item" onClick={() => handleRemoveFromCart(item.id)}>×</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h4>Order Total: ${calculateTotal().toFixed(2)}</h4>
            </div>
            {!orderComplete ? (
              <form className="checkout-form" onSubmit={handleSubmitOrder}>
                <h4>Shipping Information</h4>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={customerInfo.name} 
                    onChange={handleCustomerInfoChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={customerInfo.email} 
                    onChange={handleCustomerInfoChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={customerInfo.phone} 
                    onChange={handleCustomerInfoChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Delivery Address</label>
                  <textarea 
                    name="address" 
                    value={customerInfo.address} 
                    onChange={handleCustomerInfoChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Payment Method</label>
                  <select 
                    name="paymentMethod" 
                    value={customerInfo.paymentMethod} 
                    onChange={handleCustomerInfoChange}
                  >
                    <option value="ecocash">EcoCash</option>
                    <option value="cash">Cash on Delivery</option>
                  </select>
                </div>
                <button type="submit" className="checkout-btn">Complete Order</button>
              </form>
            ) : (
              <div className="order-complete">
                <h3>Thank you for your order!</h3>
                <p>Your order has been sent to our team. You will receive a confirmation email shortly.</p>
                <p>Payment Method: {customerInfo.paymentMethod === 'ecocash' ? 'EcoCash' : 'Cash on Delivery'}</p>
                <button onClick={() => {
                  setOrderComplete(false);
                  setShowCart(false);
                }}>Continue Shopping</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default Services;