export interface Product {
  id: number;
  title: string;
  picture: string;
  price: {
    usd: number;
    crypto: number;
  };
  sold: number;
  author: {
    firstName: string;
    lastName: string;
    picture: string;
  };
}

export interface ResponseBody {
  author: {
    firstName: string;
    lastName: string;
  };
  products: Product[];
}
