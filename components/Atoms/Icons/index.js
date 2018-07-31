import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const TrashCanIcon = styled.img`
    display: inline;
    &.clickable {
        cursor: pointer;
    }
`

const Icon = ({src, onClick, className, alt, ...props}) => {
    if(onClick) className += ' clickable';
    return(
        <TrashCanIcon className={className} src={src} onClick={onClick} alt={alt} {...props}/>
    )
}

Icon.defaultProps = {
    src: '',
    className: '',
    alt: '',
    onClick: null
}

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func
}

export default Icon;