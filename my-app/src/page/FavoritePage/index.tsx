import styles from "./index.module.scss";
import { ContentContainer } from "../../shared/ui";
import { ProductCard } from "../../feature/ui";

export const FavoritePage = () => {
  return (
    <ContentContainer>
      <section className={styles.favorite}>
        <h2 className={styles.favorite_title}>Избраное</h2>
        <div className={styles.favorite_wrapper}>
          <div className={styles.favorite_filters}>
            <div className={styles.favorite_filters_title}>Фильтр</div>
            <div className={styles.price}>
              <div className={styles.price_wrapper}>
                <span className={styles.price_title}>Цена</span>
                <button className={styles.price_btn}>Очистить</button>
              </div>
              <div className={styles.price_container}>
                <input type="text" className={styles.price_input} />
                <div className={styles.price_divider}></div>
                <input type="text" className={styles.price_input} />
              </div>
            </div>
            <button className={styles.favorite_btn}>Применить</button>
          </div>
          <div className={styles.favorite_list}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </ContentContainer>
  );
};
