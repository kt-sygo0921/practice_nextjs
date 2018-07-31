import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import fz from '../../../constants/font-size';

const Tag = styled(({tag, ...props}) => {
    return React.createElement(tag, props)
})`
    font-weight: 700;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    font-size: ${fz.s}
    &.h1 {
        font-size: ${fz.l};
    }
    &.h2 {
        font-size: ${fz.m};
    }
`;

const Heading = ({tag, ...props}) => {
    return <Tag tag={tag} className={tag} {...props}/>
};

Heading.defaultProps = {
    tag: 'h1'
}

Heading.propTypes = {
    tag: PropTypes.string
}


export default Heading;