import { useNavigate } from "react-router-dom";
import { Icon } from "../../../shared/ui";
import styles from "../index.module.scss";
import { RoutePath } from "../../../app/router/router";

export const BasketButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.button}
      onClick={() => navigate(RoutePath.basket)}
    >
      <Icon name="basket" size={24} />
      <div>Корзина</div>
    </button>
  );
};
