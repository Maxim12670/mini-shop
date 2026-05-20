export interface IProduct {
  id: number;
  title: string;
  price: number;
  isFavorite: boolean;
  rating: { rate: number; count: number };
  image: string;
}
