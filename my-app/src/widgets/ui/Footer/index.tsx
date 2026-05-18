import styles from "./index.module.scss";
import { MiniLogo } from "../../../shared/assets/icon";
import { ContentContainer, Icon } from "../../../shared/ui";

export const Footer = () => {
  return (
    <div
      style={{
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
        padding: "24px 0 27px 0",
        backgroundColor: "#F9F4E2",
      }}
    >
      <ContentContainer>
        <div className={styles.header}>
          <div className={styles.header_wrapper}>
            <img src={MiniLogo} alt="logo" className={styles.header_logo} />
            <ul className={styles.header_list}>
              <li>О компании</li>
              <li>Контакты</li>
              <li>Вакансии</li>
              <li>Статьи</li>
              <li>Политика обработки персональных данных</li>
            </ul>
          </div>
          <div className={styles.header_phone}>
            <Icon name="phone" size={24} style={{ color: "black" }} />
            <h2>8 800 777 33 33</h2>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
