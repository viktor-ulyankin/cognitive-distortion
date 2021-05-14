import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkExternalLinks from 'remark-external-links';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Loader from '../../components/Loader';
import { actionLoadDataArticle } from '../../store/actions';

const Article = () => {
  const { id } = useParams();
  const article = useSelector((state) => state.articles?.[id]);
  const dispatch = useDispatch();

  if (!article) {
    dispatch(actionLoadDataArticle(id));

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