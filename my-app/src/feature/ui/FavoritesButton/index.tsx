import { Icon } from "../../../shared/ui";
import styles from "../index.module.scss";
import { RoutePath } from "../../../app/router/router";
import { useNavigate } from "react-router-dom";

export const FavoritesButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.button}
      onClick={() => navigate(RoutePath.favorite)}
    >
      <Icon name="favorites" size={24} />
      <div>Избранное</div>
    </button>
  );
};
