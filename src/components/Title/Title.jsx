import React from 'react';

const Title = ({ level, children }) => {
  const lvl = typeof level === 'number' && !Number.isNaN(level) && level >= 1 && level <= 6 ? level : 1;
  const Tag = `h${lvl}`;

  return <Tag className="title">{ children }</Tag>;
};

export default Title;