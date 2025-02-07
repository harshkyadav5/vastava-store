import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;