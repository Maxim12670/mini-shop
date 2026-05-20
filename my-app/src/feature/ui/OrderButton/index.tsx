import { useNavigate } from "react-router-dom";
import { Icon } from "../../../shared/ui";
import styles from "../index.module.scss";
import { RoutePath } from "../../../app/router/router";

export const OrderButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.button}
      onClick={() => navigate(RoutePath.process)}
    >
      <Icon name="order" size={24} />
      <div>Заказы</div>
    </button>
  );
};
