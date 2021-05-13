import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import { actionLoadDataArticleList } from '../../store/actions';

const ListMenu = () => {
  const articleList = useSelector((state) => state.articleList);
  const dispatch = useDispatch();

  if (!articleList.length) {
    dispatch(actionLoadDataArticleList());

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