import { Icon } from "../../../shared/ui";
import styles from "../index.module.scss";

export const OrderButton = () => {
  return (
    <button className={styles.button}>
      <Icon name="order" size={24} />
      <div>Заказы</div>
    </button>
  );
};
