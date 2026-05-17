import styles from "./index.module.scss";
import Articles from "./article.png";

export const Article = () => {
  return (
    <div className={styles.article_item}>
      <img src={Articles} alt="article" className={styles.article_img} />
      <div className={styles.article_container}>
        <span className={styles.article_date}>05.03.2021</span>
        <span className={styles.article_title}>
          Режим использования масок и перчаток на территории магазинов
        </span>
        <span className={styles.article_descr}>
          Подробная информация о режимах использования масок и перчаток на
          территории магазинов "ЛЕНТА". Информация обновляется каждый будний
          день.
        </span>
        <button className={styles.article_btn}>Подробнее</button>
      </div>
    </div>
  );
};
