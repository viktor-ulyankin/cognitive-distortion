import React from 'react';
import { NavLink } from 'react-router-dom';
import useDataArticleList from '../../hooks/useDataArticleList';
import Loader from '../Loader';

const ListMenu = () => {
  const [articleList, isLoading, isError] = useDataArticleList();

  if (isError) {
    return (
      <nav className="list-menu">
        Ошибка, список статей не загружен!
      </nav>
    );
  }

  if (isLoading) {
    return (
      <nav className="list-menu">
        <Loader style={{ width: '40px' }} />
      </nav>
    );
  }

  return (
    <nav className="list-menu">
      <ul className="list-menu__list">
        {articleList.map((article) => (
          <li key={article.id} className="list-menu__item">
            <NavLink className="list-menu__link" activeClassName="list-menu__link_active" to={`/article/${article.id}`}>
              {article.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ListMenu;