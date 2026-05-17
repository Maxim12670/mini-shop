import { Icon } from "../../../shared/ui";
import styles from "../index.module.scss";

export const BasketButton = () => {
  return (
    <button className={styles.button}>
      <Icon name="basket" size={24} />
      <div>Корзина</div>
    </button>
  );
};
