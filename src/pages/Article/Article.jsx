import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkExternalLinks from 'remark-external-links';
import Title from '../../components/Title';
import Text from '../../components/Text';
import useDataArticle from '../../hooks/useDataArticle';
import Loader from '../../components/Loader';

const Article = () => {
  const { id } = useParams();
  const [article, isError, isLoading] = useDataArticle(id);

  if (isError) {
    return (
      <Text>
        Ошибка, список статей не загружен!
      </Text>
    );
  }

  if (isLoading) {
    return (
      <Text>
        <Loader style={{ width: '40px' }} />
      </Text>
    );
  }

  return (
    <>
      <Title>
        {article.name}
      </Title>

      <Text>
        <ReactMarkdown skipHtml remarkPlugins={[remarkExternalLinks]}>
          {article.text}
        </ReactMarkdown>
      </Text>
    </>
  );
};

export default Article;