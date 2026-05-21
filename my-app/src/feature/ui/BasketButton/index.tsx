import { useNavigate } from "react-router-dom";
import { ChipCount, Icon } from "../../../shared/ui";
import styles from "../index.module.scss";
import { RoutePath } from "../../../app/router/router";
import { useAppSelector } from "../../../app/store/hook";

export const BasketButton = () => {
  const navigate = useNavigate();
  const { basket } = useAppSelector((state) => state.product);

  return (
    <button
      className={styles.button}
      onClick={() => navigate(RoutePath.basket)}
    >
      {basket.length > 0 && (
        <ChipCount count={basket.length} style={styles.button_basket} />
      )}
      <Icon name="basket" size={24} />
      <div>Корзина</div>
    </button>
  );
};
