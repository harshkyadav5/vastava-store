import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import './ProductsPage.css';

function ProductsPage({ products }) {
  useEffect(() => {
    console.log('Products:', products);
  }, [products]);

  return (
    <div id='products-page'>
      {/* <h1>Products</h1> */}
      <ProductList products={products} />
    </div>
  );
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsPage;
