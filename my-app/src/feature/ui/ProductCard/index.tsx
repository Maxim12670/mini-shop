import { Icon } from "../../../shared/ui";
import styles from "./index.module.scss";
import imgProduct from "../../../page/MainPage/image.png";
import type { IProduct } from "../../../entity/model/product";

export const ProductCard = (props: IProduct) => {
  const { id, title, price, isFavorite, rating, image } = props;

  return (
    <div className={styles.card}>
      <img
        src={image ?? imgProduct}
        alt="product"
        className={styles.card_img}
        style={{ width: "100%", height: "160px", objectFit: "contain" }}
      />
      <div className={styles.card_favorite}>
        <Icon name="favorites" size={24} />
      </div>
      <div className={styles.card_container}>
        <div className={styles.card_price}>{price} ₽</div>
        <div className={styles.card_descr}>{title}</div>
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
