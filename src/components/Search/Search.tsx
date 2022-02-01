import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import useDebounce from '../../hooks/useDebounce';
import { actionSearchChange, actionSearchReset, actionSearchResult } from '../../store/actions';
import { SEARCH } from '../../helpers/js/const';
import { RootState } from '../../store/reducers';
import { ArticleWithoutText } from '../../types';

const Search: React.FC = () => {
  const thisState = useSelector((state: RootState) => state.search);
  const articleList = useSelector((state: RootState) => state.articleList);
  const dispatch = useDispatch();
  const inputValueDebounce = useDebounce(thisState.inputValue.length >= SEARCH.MIN_QTY_LETTERS ? thisState.inputValue : '', 500);
  const refComponent = useRef<HTMLInputElement>(null);

  // Debounce вывод результатов поиска
  useEffect(() => {
    if (
      inputValueDebounce.length >= SEARCH.MIN_QTY_LETTERS
      && Array.isArray(articleList) && articleList.length
    ) {
      // setTimeout(() => {
      const filter = (item: ArticleWithoutText) => item
        .name
        .toLowerCase()
        .includes(inputValueDebounce.toLowerCase());

      dispatch(actionSearchResult(articleList.filter(filter)));
      // }, 500); // эмуляция задержки сетевого соединения
    } else {
      dispatch(actionSearchResult());
    }
  }, [articleList, dispatch, inputValueDebounce]);

  // Обработка outside-клика
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target || !refComponent?.current?.contains(e.target)) {
        dispatch(actionSearchReset());
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [dispatch]);

  function Result() {
    if (thisState.result.length) {
      return (
        <div className="search__result">
          {thisState.result.map((article) => <Link key={article.id} to={`/article/${article.id}`} onClick={handleResultLinkClick} className="search__result-link">{article.name}</Link>)}
        </div>
      );
    }

    return null;
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(actionSearchChange(event.target.value));
  }

  function handleResultLinkClick() {
    dispatch(actionSearchReset());
  }

  return (
    <div className="search" ref={refComponent}>
      <div className="search__form">
        <div className="search__icon" />
        <input value={thisState.inputValue} onChange={handleInputChange} className="search__input" type="text" placeholder="Когнитивное искажение" autoCapitalize="none" autoComplete="none" maxLength={128} />

        <div className={`search__loading${thisState.isLoading ? ' search__loading_active' : ''}`}>
          <Loader />
        </div>
      </div>

      <Result />
    </div>
  );
};

export default Search;