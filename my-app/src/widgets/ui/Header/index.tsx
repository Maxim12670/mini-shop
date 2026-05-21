import { useNavigate } from "react-router-dom";
import {
  BasketButton,
  FavoritesButton,
  OrderButton,
} from "../../../feature/ui";
import { Logo } from "../../../shared/assets/image";
import { ContentContainer } from "../../../shared/ui";
import styles from "./index.module.scss";
import { RoutePath } from "../../../app/router/router";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "relative",
        background: "#ffffff",
        boxShadow: "2px 4px 8px 0px #0000001A",
      }}
    >
      <ContentContainer>
        <>
          <div className={styles.header}>
            <div className={styles.header_wrapper}>
              <img
                src={Logo}
                alt="logo"
                onClick={() => navigate(RoutePath.main)}
                className={styles.logo}
              />
              <button onClick={() => navigate(RoutePath.main)}>Каталог</button>
            </div>

            <div className={styles.header_nav}>
              <FavoritesButton />
              <OrderButton />
              <BasketButton />
            </div>

            <button
              className={`${styles.burger_button} ${isMenuOpen ? styles.active : ""}`}
              onClick={toggleMenu}
              aria-label="Меню"
            >
              <span className={styles.burger_line}></span>
              <span className={styles.burger_line}></span>
              <span className={styles.burger_line}></span>
            </button>
          </div>

          <div
            className={`${styles.mobile_menu} ${isMenuOpen ? styles.mobile_menu_open : ""}`}
          >
            <div className={styles.mobile_menu_content}>
              <div className={styles.mobile_nav}>
                <FavoritesButton onClick={closeMenu} />
                <OrderButton onClick={closeMenu} />
                <BasketButton onClick={closeMenu} />
              </div>
            </div>
          </div>
        </>
      </ContentContainer>
    </header>
  );
};
