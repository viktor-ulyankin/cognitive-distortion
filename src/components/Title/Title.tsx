import React from 'react';

type Props = {
  isNotSemantic?: boolean,
  level?: 1 | 2 | 3 | 4 | 5 | 6
}
type TypeTag = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Title: React.FC<Props> = ({ isNotSemantic = false, level = 1, children }) => {
  const Tag: TypeTag = isNotSemantic ? 'div' : `h${level}`;

  return <Tag className={`title title_${level}`}>{ children }</Tag>;
};

export default Title;