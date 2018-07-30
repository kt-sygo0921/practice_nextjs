import React from 'react';
import styled from 'styled-components';
import {translate} from 'react-i18next';

const BaloonStyled = styled.span`
    background-color: #1a1a1a;
    border-radius: ${props => props.radius}px;
    color: white;
    display:inline-block;
    font-size: 0.8rem;
    padding: 0.4rem 0.5rem;
    position: relative;
    &:after {
        border-color: #1a1a1a transparent transparent transparent;
        border-style: solid;
        border-width: 3px 3px 0 3px;
        bottom: 0;
        content: "";
        display:block;
        height: 0;
        left: 50%;
        position: absolute;
        transform: translate(-50%, 100%);
        width: 0;
    }
`

const Baloon = props => (
    translate(['common'])((props) => (<BaloonStyled {...props}>{props.t('hello')}</BaloonStyled>))
    
)

export default  Baloon;