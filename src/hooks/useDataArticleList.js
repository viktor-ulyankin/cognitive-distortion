import { useEffect, useState } from 'react';
import axios from 'axios';

function useDataArticleList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios.get(`/data/articles.json?timestamp=${new Date().getTime()}`)
      .then((response) => {
        setIsError(false);
        setIsLoading(false);
        setData(response.data);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return [data, isLoading, isError];
}

export default useDataArticleList;