import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import products from './productdatabase'; // Adjust the path as necessary

const Services = () => {
  const [showServicesContent, setShowServicesContent] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'ecocash'
  });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("u2piV_KgwGirgwhzN");
    
    const servicesTimer = setTimeout(() => {
      setShowServicesContent(true);
    }, 800);
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowServicesContent(true);
        }
      },
      { threshold: 0.1 }
    );
    
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

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowDetailsModal(true);
    // document.body.style.overflow = 'hidden'; // Prevent background scrolling for details modal
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

  const prepareOrderDetails = () => {
    // Create a nicely formatted order summary for the email
    const cartItemsList = cart.map(item => 
      `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    return `
Order Details:
--------------
${cartItemsList}

Total: $${calculateTotal().toFixed(2)}

Customer Information:
-------------------
Name: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}
Delivery Address: ${customerInfo.address}
Payment Method: ${customerInfo.paymentMethod === 'ecocash' ? 'EcoCash' : 'Cash on Delivery'}
`;
  };

  // const handleSubmitOrder = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setEmailError(null);
    
  //   // Prepare the email parameters
  //   const orderDetails = prepareOrderDetails();
    
  //   // Important: The parameter names must match EXACTLY what your EmailJS template expects
  //   // Common EmailJS template parameters include:
  //   // - user_name, user_email, message, etc.
  //   // Check your EmailJS template to ensure these match
  //   const templateParams = {
  //     from_name: customerInfo.name,
  //     reply_to: customerInfo.email,    // This is typically required by EmailJS
  //     to_name: 'Store Owner',
  //     user_email: customerInfo.email,  // Common EmailJS parameter
  //     email: customerInfo.email,       // Try alternative parameter name
  //     phone: customerInfo.phone,
  //     address: customerInfo.address,
  //     payment_method: customerInfo.paymentMethod === 'ecocash' ? 'EcoCash' : 'Cash on Delivery',
  //     message: orderDetails,
  //     to_email: 'katererekeisher4@gmail.com'  ,
  //     total: `${calculateTotal().toFixed(2)}`
  //   };

  //   // Log the parameters to help debug
  //   console.log("Sending email with parameters:", templateParams);

  //   try {
  //     // Send the email using EmailJS
  //     const response = await emailjs.send(
  //       'service_1oshs8o',
  //       'template_pz4eflo',
  //       templateParams,
  //       'u2piV_KgwGirgwhzN'
  //     );
      
  //     console.log("Email sent successfully:", response);
      
  //     setOrderComplete(true);
  //     setCart([]);
  //   } catch (error) {
  //     console.error('Failed to send email:', error);
  //     // More detailed error message
  //     setEmailError(`Failed to send your order. Error: ${error.text || error.message || 'Unknown error'}`);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  // const handleSubmitOrder = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setEmailError(null);
    
  //   // Generate a simple order ID
  //   const orderId = `ORD-${Date.now().toString().slice(-6)}`;
    
  //   // Prepare the email parameters
  //   const orderDetails = prepareOrderDetails();
    
  //   // Common parameters for both emails
  //   const commonParams = {
  //     from_name: customerInfo.name,
  //     reply_to: customerInfo.email,
  //     phone: customerInfo.phone,
  //     address: customerInfo.address,
  //     payment_method: customerInfo.paymentMethod === 'ecocash' ? 'EcoCash' : 'Cash on Delivery',
  //     message: orderDetails,
  //     total: `${calculateTotal().toFixed(2)}`,
  //     order_id: orderId
  //   };
  
  //   try {
  //     // 1. Send notification to company
  //     const companyResponse = await emailjs.send(
  //       'service_1oshs8o',
  //       'template_jyoadcd', // Use your actual template ID here
  //       commonParams,
  //       'u2piV_KgwGirgwhzN'
  //     );
      
  //     console.log("Company notification sent:", companyResponse);
      
  //     // 2. Send confirmation to customer
  //     const customerResponse = await emailjs.send(
  //       'service_714vlgl',
  //       'template_pz4eflo', // Use your actual template ID here
  //       commonParams,
  //       'u2piV_KgwGirgwhzN'
  //     );
      
  //     console.log("Customer confirmation sent:", customerResponse);
      
  //     // Show order complete message and reset cart
  //     setOrderComplete(true);
  //     setCart([]);
  //   } catch (error) {
  //     console.error('Failed to send email:', error);
  //     setEmailError(`Failed to send your order. Error: ${error.text || error.message || 'Unknown error'}`);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailError(null);
    
    // Generate a simple order ID
    const orderId = `ORD-${Date.now().toString().slice(-6)}`;
    
    // Prepare the email parameters
    const orderDetails = prepareOrderDetails();
    
    try {
      // Remove the check for window.emailjs
      
      // 1. Send notification to company
      const companyResponse = await emailjs.send(
        'service_1oshs8o',
        'template_jyoadcd',
        {
          from_name: customerInfo.name,
          reply_to: customerInfo.email,
          phone: customerInfo.phone,
          address: customerInfo.address,
          payment_method: customerInfo.paymentMethod === 'ecocash' ? 'EcoCash' : 'Cash on Delivery',
          message: orderDetails,
          total: `${calculateTotal().toFixed(2)}`,
          order_id: orderId,
          // Add explicit recipient for company notification
          to_email: "your-company-email@example.com" // Replace with actual company email
        },
        'u2piV_KgwGirgwhzN'
      );
      
      console.log("Company notification sent:", companyResponse);
      
      // 2. Send confirmation to customer
      const customerResponse = await emailjs.send(
        'service_1oshs8o',
        'template_pz4eflo',
        {
          from_name: customerInfo.name,
          reply_to: customerInfo.email,
          phone: customerInfo.phone,
          address: customerInfo.address,
          payment_method: customerInfo.paymentMethod === 'ecocash' ? 'EcoCash' : 'Cash on Delivery',
          message: orderDetails,
          total: `${calculateTotal().toFixed(2)}`,
          order_id: orderId,
          // Add explicit recipient for customer confirmation
          to_email: customerInfo.email
        }, 
        'u2piV_KgwGirgwhzN'
      );
      
      console.log("Customer confirmation sent:", customerResponse);
      
      // Show order complete message and reset cart
      setOrderComplete(true);
      setCart([]);
    } catch (error) {
      console.error('Failed to send email:', error);
      setEmailError(`Failed to send your order. Error: ${error.text || error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (product.specs && product.specs.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

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
        <div className="cart-icon-container">
          <button className="cart-icon" onClick={() => {
            setShowCart(true);
            // Allow background scrolling when cart modal is opened
          }}>
            🛒 {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </button>
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
                    {/* <button className="view-details-btn" onClick={() => handleViewDetails(product)}>View Details</button> */}
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
              <button className="close-modal" onClick={() => {
                setShowDetailsModal(false);
                document.body.style.overflow = 'auto'; // Re-enable background scrolling
              }}>×</button>
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
                  // Allow background scrolling when cart modal is opened
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
              <button className="close-modal" onClick={() => {
                setShowCart(false);
                document.body.style.overflow = 'auto'; // Allow background scrolling
              }}>×</button>
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
                          <p>${Number(item.price).toFixed(2)}</p>
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
                    <form className="order-checkout-form" onSubmit={handleSubmitOrder}>
                      <h4 className="order-form-title">Shipping Information</h4>
                      {emailError && <div className="email-error-message">{emailError}</div>}
                      <div className="order-input-group">
                        <label className="order-input-label">Full Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          value={customerInfo.name} 
                          onChange={handleCustomerInfoChange}
                          required 
                          className="order-input-field"
                        />
                      </div>
                      <div className="order-input-group">
                        <label className="order-input-label">Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={customerInfo.email} 
                          onChange={handleCustomerInfoChange}
                          required 
                          className="order-input-field"
                        />
                      </div>
                      <div className="order-input-group">
                        <label className="order-input-label">Phone</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={customerInfo.phone} 
                          onChange={handleCustomerInfoChange}
                          required 
                          className="order-input-field"
                        />
                      </div>
                      <div className="order-input-group">
                        <label className="order-input-label">Delivery Address</label>
                        <textarea 
                          name="address" 
                          value={customerInfo.address} 
                          onChange={handleCustomerInfoChange}
                          required 
                          className="order-textarea-field"
                        />
                      </div>
                      <div className="order-input-group">
                        <label className="order-input-label">Payment Method</label>
                        <select 
                          name="paymentMethod" 
                          value={customerInfo.paymentMethod} 
                          onChange={handleCustomerInfoChange}
                          className="order-select-field"
                        >
                          <option value="ecocash">EcoCash</option>
                          <option value="cash">Cash on Delivery</option>
                        </select>
                      </div>
                      <button 
                        type="submit" 
                        className="order-submit-button"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : 'Complete Order'}
                      </button>
                    </form>
                  ) : (
                    <div className="order-complete">
                      <h3>Thank you for your order!</h3>
                      <p>Your order has been sent to our team. You will receive a confirmation email shortly.</p>
                      <p>Payment Method: {customerInfo.paymentMethod === 'ecocash' ? 'EcoCash' : 'Cash on Delivery'}</p>
                      <button onClick={() => {
                        setOrderComplete(false);
                        setShowCart(false);
                        document.body.style.overflow = 'auto'; // Allow background scrolling
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

