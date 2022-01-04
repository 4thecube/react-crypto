import { useEffect, useState } from "react";
import axios from "axios";

import { Products } from "./components/products/Products";

import { ResponseBody } from "./types/product";

import "./App.scss";

function App() {
  const [response, setResponse] = useState<ResponseBody>({} as ResponseBody);
  const { products, author } = response;

  const caller = async () => {
    const { data } = await axios.get<ResponseBody>(
      "https://json-mock-data.herokuapp.com/"
    );
    setResponse(data);
  };

  useEffect(() => {
    caller();
  }, []);

  return (
    <div className="app">
      <div className="title-container">
        <h1 className="title">
          <p>sunburst pathway on denial</p>
          <p className="title-author">
            <img
              width="50px"
              height="50px"
              className="author-picture"
              src={author?.picture}
              alt="user"
            ></img>
            <span>
              {author?.firstName} {author?.lastName}
            </span>
          </p>
        </h1>
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
