import { useEffect, useState } from 'react';
import './FilterMenu.css';

function FilterMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="filter-menu">
      <h2>Filters</h2>
      {categories.map((category) => (
        <div className="filter-option" key={category}>
          <label>
            <input type="checkbox" />
            {category}
          </label>
        </div>
      ))}
    </div>
  );
}

export default FilterMenu;
