import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import useDataArticleList from '../../hooks/useDataArticleList';
import useDebounce from '../../hooks/useDebounce';

const Search = () => {
  const minLettersForSearch = 3;
  const [isLoading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [resultLinks, setResultLinks] = useState([]);
  const [articleList] = useDataArticleList();
  const inputValueDebounce = useDebounce(inputValue, 500);
  const refComponent = useRef(null);

  // Debounce вывод результатов поиска
  useEffect(() => {
    if (
      Array.isArray(articleList) && articleList.length
      && typeof inputValueDebounce === 'string' && inputValueDebounce.length >= minLettersForSearch
    ) {
      const filter = (item) => item.name.toLowerCase().includes(inputValueDebounce.toLowerCase());

      setResultLinks(articleList.filter(filter));
    } else {
      setResultLinks([]);
    }

    setLoading(false);
  }, [articleList, inputValueDebounce]);

  // Обработка outside-клика
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  function Result() {
    if (resultLinks.length) {
      return (
        <div className="search__result">
          {resultLinks.map((article) => <Link key={article.id} to={`/article/${article.id}`} onClick={handleResultLinkClick} className="search__result-link">{article.name}</Link>)}
        </div>
      );
    }

    return null;
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    setLoading(event.target.value.length >= minLettersForSearch);
  }

  function handleResultLinkClick() {
    setInputValue('');
    setResultLinks([]);
  }

  function handleClick(e) {
    if (!refComponent.current.contains(e.target)) {
      setResultLinks([]);
    }
  }

  return (
    <div className="search" ref={refComponent}>
      <div className="search__form">
        <div className="search__icon" />
        <input value={inputValue} onChange={handleInputChange} className="search__input" type="text" placeholder="Когнитивное искажение" autoCapitalize="none" autoComplete="none" maxLength="128" />

        <div className={`search__loading${isLoading ? ' search__loading_active' : ''}`}>
          <Loader />
        </div>
      </div>

      <Result />
    </div>
  );
};

export default Search;