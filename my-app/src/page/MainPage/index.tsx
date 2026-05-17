import styles from "./index.module.scss";
import { ContentContainer } from "../../shared/ui";
import { Header } from "../../widgets/ui";
import { Products } from "../../shared/assets/image";

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
    </>
  );
};
