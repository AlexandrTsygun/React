import React, { useState, useEffect } from 'react';
import './ProductList.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(loading)
  // console.log(products)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=16')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);


  if (loading) return (
  <div className="loader-container">
    <div className="download-icon"></div>
    <p>Загружаем товары...</p>
  </div>
);

  return (
    <div className="products-page">
      <h1 className='page-title'>BeautyHub</h1>
      <h2 className='page-subtitle'>Products List</h2>

      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className='card-title'>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p className="description">{product.description}</p>
              <p className="rating">⭐ {product.rating}</p>
              <div className="buttons">
                <button className="btn-add">Add To Cart</button>
                <button className="btn-show__more">Show more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;