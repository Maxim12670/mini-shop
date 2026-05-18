import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { BasketPage, FavoritePage, MainPage } from "../../page";

export class RoutePath {
  static main = "/";
  static favorite = "favorite";
  static basket = "basket";
}

export const router = createBrowserRouter([
  {
    path: RoutePath.main,
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: RoutePath.favorite,
        element: <FavoritePage />,
      },
      {
        path: RoutePath.basket,
        element: <BasketPage />,
      },
    ],
  },
]);
