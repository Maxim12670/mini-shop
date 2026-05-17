import styles from "./index.module.scss";
import { ContentContainer } from "../../shared/ui";
import { Header, Footer } from "../../widgets/ui";
import { Products } from "../../shared/assets/image";
import { Map, ProductCard } from "../../feature/ui";
import { Article } from "./component/Article";

export const MainPage = () => {
  return (
    <>
      <Header />
      <section style={{ backgroundColor: "#FFFFFF", zIndex: 2 }}>
        <ContentContainer>
          <div className={styles.banner}>
            <img
              src={Products}
              alt="product order"
              className={styles.banner_img}
            />
            <h2 className={styles.banner_title}>
              Доставка бесплатно от 1000 ₽
            </h2>
          </div>
        </ContentContainer>
      </section>
      <div>
        <ContentContainer>
          <div className={styles["main-page_wrapper"]}>
            <section className={styles.new}>
              <h2 className={styles.title}>Новинки</h2>
              <div className={styles.new_wrapper}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </section>
            <section>
              <h2 className={styles.title}>Наши магазины</h2>
              <Map />
            </section>
            <section>
              <h2 className={styles.title}>Статьи</h2>
              <div className={styles.article}>
                <Article />
                <Article />
                <Article />
              </div>
            </section>
          </div>
        </ContentContainer>
      </div>
      <Footer />
    </>
  );
};
