import axios from "axios";
import type { INews } from "../model/news";

const apiKey = "67e147d4a9184d4d821029d2241029ba";

export const getNews = async () => {
  const response = await axios.get("https://newsapi.org/v2/everything", {
    params: {
      q: "Россия",
      pageSize: 50,
      apiKey,
    },
  });

  const newsWithImages = response.data.articles.filter(
    (item: INews) =>
      item.urlToImage !== null &&
      item.urlToImage !== "" &&
      item.urlToImage !== "null",
  );

  return newsWithImages.slice(0, 3) as INews[];
};
