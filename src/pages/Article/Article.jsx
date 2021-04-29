import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Text from '../../components/Text';

const Article = () => {
  const { id } = useParams();

  return (
    <Layout>
      <Title>
        Страница статьи:
        { id }
      </Title>

      <Text>
        <p>
          Статья статья статья статья статья статья статья статья статья статья статья статья
          статья статья статья статья статья статья статья статья статья статья статья статья
          статья статья статья статья статья статья статья статья статья статья статья статья
          статья статья статья статья статья статья статья статья статья статья статья статья
          статья статья статья статья статья статья статья статья статья статья статья статья.
        </p>
      </Text>
    </Layout>
  );
};

export default Article;