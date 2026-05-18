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

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        background: "#ffffff",
        boxShadow: "2px 4px 8px 0px #0000001A",
      }}
    >
      <ContentContainer>
        <div className={styles.header}>
          <div className={styles.header_wrapper}>
            <img
              src={Logo}
              alt="logo"
              onClick={() => navigate(RoutePath.main)}
            />
            <button onClick={() => navigate(RoutePath.main)}>Каталог</button>
          </div>
          <div className={styles.header_nav}>
            <FavoritesButton />
            <OrderButton />
            <BasketButton />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
