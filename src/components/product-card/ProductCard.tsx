import React from "react";
import "./ProductCard.scss";

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

export const ProductCard: React.FC<Item> = ({
  id,
  title,
  picture,
  price,
  author,
}) => {
  return (
    <div tabIndex={0} className="product">
      <div className="image-container">
        <img className="product-picture" src={picture} alt={title} />
      </div>
      <div className="description">
        <h2>{title}</h2>
        <div className="author">
          <img
            width="50px"
            height="50px"
            src={author.picture}
            alt={author.firstName}
          />
          <p className="author-name">
            {author.firstName} {author.lastName}
          </p>
        </div>
        <div className="prices-container">
          <div className="prices">
            <span className="crypto-currency">{price.crypto} MATIC</span>
            <span className="usd-currency">${price.usd} </span>
          </div>
          <div className="items-sold">
            <p>items sold</p>
            <p>256</p>
          </div>
        </div>
      </div>
    </div>
  );
};
