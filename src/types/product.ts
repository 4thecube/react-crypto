export interface Product {
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
