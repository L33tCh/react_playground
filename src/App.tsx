import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './types/Product';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchField, setSearchField] = useState<string>('');

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(response => response.json())
      .then((prods: Product[]) => {
        setAllProducts([...prods]);
        console.log({ component: "App", prods });
      });
  }, []);

  useEffect(() => {
    console.log({ products });
  }, [products]);

  useEffect(() => {
    console.log({ searchField });
    setProducts(allProducts.filter(p => p.name.toLowerCase().includes(searchField.toLowerCase())));
  }, [searchField, allProducts]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <SearchBox classesName='Search Names' placeHolder='Search Items' handleChange={setSearchField} />
        <CardList products={products}>
        </CardList>
      </header>
    </div>
  );
}

export default App;
