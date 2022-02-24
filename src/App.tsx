import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './types/Product';
import { CardList } from './components/card-list/card-list.component';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(response => response.json())
      .then((prods: Product[]) => {
        setProducts([...prods]);
        console.log({component: "App", prods});
      })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <CardList products={products}>
        </CardList>
      </header>
    </div>
  );
}

export default App;
