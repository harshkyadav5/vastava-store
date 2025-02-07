import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import FilterMenu from './components/FilterMenu';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=15');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div id='main'>
      <FilterMenu />
      {/* <div className='a'> */}
      <div>
        {/* <h1>Store Products</h1> */}
        <div className="group">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            className="input"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
    </>
  );
}

export default App;
