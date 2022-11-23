import React from "react";
import S from "./ConfidentialPage.module.scss";
import { articlesInfo } from "../../assets/content/articles";
import { ArticleInterface } from "../../interfaces/Article.interface";

const ConfidentialPage = () => {
  const articles: ArticleInterface[] = articlesInfo.articles;
  return (
    <div className={S.wrapper}>
      <h1>Политика обработки персональных данных</h1>
      <div className={S.articles}>
        {articles.map((article) => (
          <div className={S.article}>
            <h2>{article.header}</h2>
            {article.points.map((point) => (
              <p>{point}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfidentialPage;
