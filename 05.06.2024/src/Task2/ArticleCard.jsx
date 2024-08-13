import { styled } from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  text-align: center;
  padding: 30px;
  background: linear-gradient(rebeccapurple, magenta);
  border-radius: 10px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

export default function ArticleCard({ article }) {
  return (
    <Div>
      <h1>{article.title}</h1>
      <span>{article.description}</span>
      <span>{article.author}</span>
      <h3>Дата публикаций: </h3>
      <p>{article.publicationDate}</p>
      <p>{article.content}</p>
    </Div>
  );
}
