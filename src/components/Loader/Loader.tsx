import React, { CSSProperties } from 'react';

type Props = {
  style?: CSSProperties
}

const Loader: React.FC<Props> = ({ style }) => (
  <div className="loader" style={style} />
);

export default Loader;