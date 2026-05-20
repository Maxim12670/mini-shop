import styles from "./index.module.scss";
import Articles from "./article.png";
import { type INews } from "../../../../entity/model/news";

export const Article = (props: INews) => {
  const { title, description, url, urlToImage, publishedAt } = props;

  function formatDate(value: string) {
    const date = new Date(value);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  return (
    <div className={styles.article_item}>
      <img
        src={urlToImage ?? Articles}
        alt="article"
        className={styles.article_img}
      />
      <div className={styles.article_container}>
        <span className={styles.article_date}>{formatDate(publishedAt)}</span>
        <span className={styles.article_title}>{title}</span>
        <div className={styles.article_descr}>{description}</div>
        <button className={styles.article_btn} onClick={() => window.open(url)}>
          Подробнее
        </button>
      </div>
    </div>
  );
};
