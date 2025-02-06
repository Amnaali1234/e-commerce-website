export interface Product {
  imageUrl: string;
  discountPercent: any;
  sizes: any;
  title: string;
  originalPrice: number;
  colors: any;
  rating: string;
  oldPrice: any;
  category: string;
  inventory: number;
  _id: string;
  name: string;
  _type: "products";
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  description?: string;
  slug: {
    _type: "slug";
    current: string;
  };
}
