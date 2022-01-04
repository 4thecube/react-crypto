import { FC, useRef } from "react";

import { ArrowButton } from "../arrow-button/ArrowButton";
import { ProductCard } from "../product-card/ProductCard";
import { Loader } from "../loader/Loader";

import { Product } from "../../types/product";

import "./Products.scss";

interface ProductsProps {
  products: Product[];
}

export const Products: FC<ProductsProps> = ({ products }) => {
  const productsContainerRef = useRef<HTMLDivElement>(null);

  const srollOffset = 1000;
  return (
    <>
      <>
        <ArrowButton
          productsContainerRef={productsContainerRef}
          text="&#x02039;"
          offset={-srollOffset}
        />
        <div ref={productsContainerRef} className="card-list">
          {products.length ? (
            products.map((item: Product) => (
              <ProductCard key={item.id} {...item} />
            ))
          ) : (
            <Loader />
          )}
        </div>
        <ArrowButton
          productsContainerRef={productsContainerRef}
          text="&#x0203A;"
          offset={srollOffset}
        />
      </>
    </>
  );
};
