import { useSelector } from 'react-redux';
import './SingleArticle.css';
import { useParams } from 'react-router-dom';

const SingleArticle = () => {
  const articles = useSelector(state => state.articleState.entries);
  const { id } = useParams();

  const article = articles.find(article => article.id === id);

  console.log(article, articles, id);

  return (
    <div className='singleArticle'>
      {article ? (
        <>
          <h1>{article.title}</h1>
          <img src={article.imageUrl} alt='home' />
          <p>{article.content}</p>
        </>
      ) : (
        <p>No article found</p>
      )}
    </div>
  );
};

export default SingleArticle;
