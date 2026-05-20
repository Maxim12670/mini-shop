import type { IProduct } from "../../../entity/model/product";
import { Icon } from "../../../shared/ui";
import styles from "../index.module.scss";

interface ProductItemProps {
  isSelected: boolean;
  product: IProduct;
  onClick: (id: number) => void;
}

export const ProductItem = ({
  isSelected,
  product,
  onClick,
}: ProductItemProps) => {
  const { id, price, image, title } = product;
  return (
    <div className={styles.product}>
      {isSelected ? (
        <Icon
          name="checkbox-add"
          size={24}
          className={styles.product_btn}
          onClick={() => onClick(id)}
        />
      ) : (
        <Icon
          name="checkbox-delete"
          size={24}
          className={styles.product_btn}
          onClick={() => onClick(id)}
        />
      )}
      <img src={image} className={styles.product_img} alt="product" />
      <h2 className={styles.product_name}>{title}</h2>
      <div className={styles.product_price}>{Math.round(price)} ₽</div>
    </div>
  );
};
