import styles from "./index.module.scss";
import { ContentContainer } from "../../shared/ui";
import { Products } from "../../shared/assets/image";
import { Map, ProductCard } from "../../feature/ui";
import { Article } from "./component/Article";
import { getProducts } from "../../entity/api/product";
import { useLayoutEffect, useState } from "react";
import { getNews } from "../../entity/api/news";
import { type INews } from "../../entity/model/news";
import { useAppDispatch, useAppSelector } from "../../app/store/hook";
import { initializeProduct } from "../../app/store/productSlice";

export const MainPage = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);

  useLayoutEffect(() => {
    const fetchProductsAndNews = async () => {
      setIsLoading(true);
      try {
        const productResult = await getProducts();
        const newsResult = await getNews();
        dispatch(initializeProduct(productResult));
        setNews(newsResult);
      } catch (error) {
        console.log("Ошибка загрузки:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsAndNews();
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "#FFFFFF" }}>
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
                {product.map((item, i) => (
                  <ProductCard key={i} {...item} />
                ))}
              </div>
            </section>
            <section>
              <h2 className={styles.title}>Наши магазины</h2>
              <Map />
            </section>
            <section>
              <h2 className={styles.title}>Статьи</h2>
              <div className={styles.article}>
                {news.map((item, i) => (
                  <Article {...item} key={i} />
                ))}
              </div>
            </section>
          </div>
        </ContentContainer>
      </div>
    </>
  );
};
