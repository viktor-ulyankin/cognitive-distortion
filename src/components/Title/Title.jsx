import React from 'react';

const Title = ({ isNotSemantic = false, level, children }) => {
  const lvl = typeof level === 'number' && !Number.isNaN(level) && level >= 1 && level <= 6 ? level : 1;
  const Tag = isNotSemantic ? 'div' : `h${lvl}`;

  return <Tag className={`title title_${lvl}`}>{ children }</Tag>;
};

export default Title;