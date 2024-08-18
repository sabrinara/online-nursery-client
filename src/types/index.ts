export type TProducts = {
  _id: string;
  title: string;
  description: string;
  rating: number;
  isStock: boolean;
  imageUrl: string;
  quantity: number;
  price: number;
  category: string;
};

export type TCategories = {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
};
