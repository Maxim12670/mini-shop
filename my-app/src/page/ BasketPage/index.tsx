import { ContentContainer, Icon } from "../../shared/ui";
import styles from "./index.module.scss";
import { ProductItem } from "./ui/ProductItem";

export const BasketPage = () => {
  return (
    <ContentContainer>
      <section className={styles.page}>
        <div className={styles.page_title}>
          <div className={styles.page_title_count}>3</div>
          Корзина
        </div>
        <div className={styles.page_container}>
          <div className={styles.page_wrapper}>
            <div className={styles.btns}>
              <div className={styles.btns_all}>
                <Icon name="checkbox-delete" size={24} />
                <span>Выделить всё</span>
              </div>
              <div className={styles.btns_delete}>Удалить выбранные</div>
            </div>

            <div className={styles.page_list}>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
          <div className={styles.page_information}>
            <div className={styles.information_divider}></div>
            <div className={styles.information_wrapper}>
              <div className={styles.information_title}>3 товара</div>
              <div className={styles.information_price}>258,10 ₽ </div>
            </div>
            <div className={styles.information_divider}></div>
            <div className={styles.information_wrapper}>
              <div className={styles.information_title}>Итог</div>
              <div className={styles.information_price_total}>250,09 ₽ </div>
            </div>
            <button className={styles.information_btn}>Оформить заказ</button>
          </div>
        </div>
      </section>
    </ContentContainer>
  );
};
