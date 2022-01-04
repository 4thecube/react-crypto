import { FC, useEffect, useState } from "react";
import axios from "axios";

import { Products } from "./components/products/Products";

import { Product } from "./types/product";

import "./App.scss";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const caller = async () => {
    const { data } = await axios.get("https://json-mock-data.herokuapp.com/");
    setProducts(data);
  };

  useEffect(() => {
    caller();
  }, []);

  return (
    <div className="app">
      <div className="title-container">
        <h1 className="title">sunburst pathway on denial</h1>
      </div>
      <div className="subtitle-container">
        <h2 className="subtitle">🔥 the drop is live! 🔥</h2>
      </div>
      <div className="product-container">
        <Products products={products} />
      </div>
    </div>
  );
}

export default App;
