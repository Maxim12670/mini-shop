import { Icon, ChipCount } from "../../../shared/ui";
import styles from "../index.module.scss";
import { RoutePath } from "../../../app/router/router";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/store/hook";

export const FavoritesButton = () => {
  const navigate = useNavigate();
  const { product } = useAppSelector((state) => state.product);
  const favoriteProduct = product.filter((item) => item.isFavorite === true);

  return (
    <button
      className={styles.button}
      onClick={() => navigate(RoutePath.favorite)}
    >
      {favoriteProduct.length > 0 && (
        <ChipCount
          count={favoriteProduct.length}
          style={styles.button_favorite}
        />
      )}
      <Icon name="favorites" size={24} />
      <div>Избранное</div>
    </button>
  );
};
