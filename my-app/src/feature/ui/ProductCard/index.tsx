import { Icon } from "../../../shared/ui";
import styles from "./index.module.scss";
import imgProduct from "../../../page/MainPage/image.png";
import type { IProduct } from "../../../entity/model/product";
import { useAppDispatch } from "../../../app/store/hook";
import {
  addItemBasket,
  toggleItemFavorite,
} from "../../../app/store/productSlice";

export const ProductCard = (props: IProduct) => {
  const { id, title, price, isFavorite, rating, image } = props;

  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <img
        src={image ?? imgProduct}
        alt="product"
        className={styles.card_img}
        style={{ width: "100%", height: "160px", objectFit: "contain" }}
      />
      <div
        className={styles.card_favorite}
        onClick={() => dispatch(toggleItemFavorite(id))}
      >
        <Icon
          name="favorites"
          size={24}
          className={isFavorite ? styles.card_favorite_active : ""}
        />
      </div>
      <div className={styles.card_container}>
        <div className={styles.card_price}>{Math.round(price)} ₽</div>
        <div className={styles.card_descr}>{title}</div>
        <div className={styles.card_rating}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon
              key={star}
              name="star"
              size={16}
              className={`${styles.card_rating_item} ${
                star >= rating.rate && styles.card_rating_item_inactive
              }`}
            />
          ))}
        </div>
        <button
          className={styles.card_btn_order}
          onClick={() => dispatch(addItemBasket(props))}
        >
          В корзину
        </button>
      </div>
    </div>
  );
};
