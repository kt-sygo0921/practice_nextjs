import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tag = styled(({tag = 'h1', ...props}) => {
    return React.createElement(tag, props)
})``;

const Heading = ({...props}) => {
    return <Tag {...props}/>
};

Heading.defaultProps = {
    tag: ''
}

Heading.propTypes = {
    tag: PropTypes.string
}


export default Heading;