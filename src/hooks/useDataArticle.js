import { useEffect, useState } from 'react';
import axios from 'axios';

function useDataArticles(id) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlArticlesList = `/data/articles.json?timestamp=${new Date().getTime()}`;
    const urlArticleMd = `/data/articles/${id}.md?timestamp=${new Date().getTime()}`;

    Promise.all([
      axios.get(urlArticlesList),
      axios.get(urlArticleMd),
    ])
      .then((responses) => {
        const dataTargetArticle = [];

        responses.forEach((response) => {
          if (response.config.url === urlArticlesList) {
            const targetArticle = response.data.find((item) => item.id === parseInt(id));

            dataTargetArticle.id = targetArticle.id;
            dataTargetArticle.name = targetArticle.name;
          }

          dataTargetArticle.text = response.data;
        });

        setIsError(false);
        setIsLoading(false);
        setData(dataTargetArticle);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });

    return () => {
      setIsError(false);
      setIsLoading(true);
    };
  }, [id]);

  return [data, isError, isLoading];
}

export default useDataArticles;