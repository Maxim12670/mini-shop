import { Icon } from "../../../shared/ui";
import styles from "../index.module.scss";

export const FavoritesButton = () => {
  return (
    <button className={styles.button}>
      <Icon name="favorites" size={24} />
      <div>Избранное</div>
    </button>
  );
};
