import { Icon } from "../../../shared/ui";
import styles from "./index.module.scss";
import imgProduct from "../../../page/MainPage/image.png";

export const ProductCard = () => {
  return (
    <div className={styles.card}>
      <img src={imgProduct} alt="product" className={styles.card_img} />
      <div className={styles.card_favorite}>
        <Icon name="favorites" size={24} />
      </div>
      <div className={styles.card_container}>
        <div className={styles.card_price}>599,99 ₽</div>
        <div className={styles.card_descr}>
          Комбайн КЗС-1218
          <br />
          «ДЕСНА-ПОЛЕСЬЕ GS12»
        </div>
        <div className={styles.card_rating}>
          <Icon name="star" size={16} className={styles.card_rating_item} />
          <Icon name="star" size={16} className={styles.card_rating_item} />
          <Icon name="star" size={16} className={styles.card_rating_item} />
          <Icon name="star" size={16} className={styles.card_rating_item} />
          <Icon name="star" size={16} className={styles.card_rating_item} />
        </div>
        <button className={styles.card_btn_order}>В корзину</button>
      </div>
    </div>
  );
};
