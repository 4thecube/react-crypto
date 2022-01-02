import axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";
import "./App.scss";
import { ArrowButton } from "./components/arrow-button/ArrowButton";

import { ProductCard } from "./components/product-card/ProductCard";

/*

1. Create mocked data, which contain: image itself, author name, price in crypto, price in $, how many items sold
2. Create card component
3. Create (CardList) ItemList component, whith 2 scroll items
3. Work with animations;
4. Should set magic numbers to variables and wtf

*/

interface Item {
  id: number;
  title: string;
  picture: string;
  price: {
    usd: number;
    crypto: number;
  };
  author: {
    firstName: string;
    lastName: string;
    picture: string;
  };
}

function Welcome(item: Item) {
  return (
    <div className="card">
      <h2>{item.title}</h2>
      <p>{item.price.usd}</p>
    </div>
  );
}

function App(): JSX.Element {
  const [visibleItems, setVisible] = useState<Item[]>([]);
  const [api, setApi] = useState<Item[]>([]);
  let [start, setStart] = useState(0);

  const caller = useCallback(async () => {
    const { data } = await axios.get("https://json-mock-data.herokuapp.com/");
    setApi(data);
    console.log("You made API call");
    setVisible(data.slice(start, start + 3));
  }, []);

  const slicer = () => {
    console.log("Slicer have been called with start", start);
    return setVisible(api.slice(start, start + 3));
  };

  useEffect(() => {
    caller();
    console.log("Rerender");
  }, [caller]);

  function moveBefore() {
    slicer();
    if (start === 0) {
      if (visibleItems) {
        setStart(api.length - 3);
      }
    } else {
      setStart((prev) => prev - 1);
    }
  }

  function moveForward() {
    if (
      visibleItems &&
      visibleItems[visibleItems.length - 1].id === api[api.length - 1].id
    ) {
      setStart((prev) => prev * 0);
      console.log("FORWARD 1! So you fall into first if ");
      slicer();
    } else {
      setStart((prev) => prev + 1);
      console.log("FORWARD 2! So you fall into SECOND if ");
      slicer();
    }
  }

  const isFirstItem = api[0]?.id !== visibleItems[0]?.id;
  const isLastItem = api?.length !== visibleItems[2]?.id;

  const ref = useRef<HTMLDivElement>(null);

  console.log(ref);
  return (
    <div className="app">
      <ArrowButton div={ref} text="PREV" offset={-720}></ArrowButton>
      <div ref={ref} className="card-list">
        {api.map((item: Item) => (
          <ProductCard {...item}></ProductCard>
        ))}
      </div>
      <ArrowButton div={ref} text="NEXT" offset={720}></ArrowButton>
    </div>
  );
}

export default App;
