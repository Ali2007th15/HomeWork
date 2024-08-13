import ArticlesData from "./articles.js";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import ArticleCard from "./ArticleCard";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(ArticlesData);
  }, []);
  return (
    <Div>
      {articles.map((article, index) => {
        return <ArticleCard key={index} article={article} />;
      })}
    </Div>
  );
}
