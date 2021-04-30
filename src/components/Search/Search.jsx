import React, { useState } from 'react';
import Loader from '../Loader';

const Search = () => {
  const [isLoading, setLoading] = useState(false);

  setLoading(); // Переделать

  return (
    <div className="search">
      <div className="search__form">
        <div className="search__icon" />
        <input className="search__input" type="text" placeholder="Когнитивное искажение" autoCapitalize="none" autoComplete="none" maxLength="128" />
        <div className={`search__loading${isLoading ? ' search__loading_active' : ''}`}>
          <Loader />
        </div>
      </div>
    </div>
  );
};

export default Search;