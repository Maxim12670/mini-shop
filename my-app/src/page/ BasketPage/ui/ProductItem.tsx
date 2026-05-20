import { Products } from "../../../shared/assets/image";
import { Icon } from "../../../shared/ui";
import styles from "../index.module.scss";

export const ProductItem = () => {
  return (
    <div className={styles.product}>
      <Icon name="checkbox-add" size={24} className={styles.product_btn} />
      <img src={Products} className={styles.product_img} alt="product" />
      <h2 className={styles.product_name}>
        Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
      </h2>
      <div className={styles.product_price}>89,00 ₽</div>
    </div>
  );
};
