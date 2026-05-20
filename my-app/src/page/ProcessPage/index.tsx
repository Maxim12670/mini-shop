import { Process } from "../../shared/assets/image";
import { ContentContainer } from "../../shared/ui";
import styles from "./index.module.scss";

export const ProcessPage = () => {
  return (
    <ContentContainer>
      <div className={styles.container}>
        <img className={styles.img} src={Process} alt="в процессе разработки" />
        <h2>Упс... Данная страница в стадии разработки</h2>
      </div>
    </ContentContainer>
  );
};
