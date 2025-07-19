import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductPage.scss';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className='product-page'>

      <div className='product-page-content'>

      <Link to="/" className='page-title-link'><h1>BeautyHub</h1></Link>
      <h2 className='page-subtitle'>Products List</h2>

      <div className='product-gallery'>
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className='product-details'>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Rating: ⭐ {product.rating}</p>
        <p>{product.description}</p>
        <Link to="/" className='back-link'>Вернуться назад</Link>
      </div>

      </div>
    </div>
  );
};

export default ProductPage;