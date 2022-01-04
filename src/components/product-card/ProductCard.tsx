import { Product } from "../../types/product";

import "./ProductCard.scss";

export const ProductCard: React.FC<Product> = ({
  sold,
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
        <h2 className="product-title">{title}</h2>
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
            <p className="grey">last price</p>
            <div className="prices-value">
              <span className="crypto-currency">{price.crypto} MATIC</span>
              <span className="usd-currency">${price.usd} </span>
            </div>
          </div>
          <div className="items-sold">
            <p className="grey">{sold} sold</p>
          </div>
        </div>
      </div>
    </div>
  );
};
