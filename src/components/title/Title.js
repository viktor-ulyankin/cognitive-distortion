import React from 'react';

const Title = ({ level, children }) => {
    const Tag = `h${ (level < 1 || level > 6) ? 1 : level }` ;

    return <Tag>{ children }</Tag>;
}

export default Title;