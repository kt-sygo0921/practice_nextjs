import React from 'react';
import styled, {css} from 'styled-components';
import color from '../../../constants/color';

const pad = n => n < 10 ? `0${n}`:n
const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const ClockWapper = styled.div`
    display: inline-block;
    color: #82FA58;
    font-family: menlo, monaco, monospace;
    background-color: ${color.black};
    &.light {
        background-color:#999;
    }
        ${({size}) => {
            switch(size) {
                case 'small':
                return css`
                    font-size: 25px;
                    padding: 10px;
                `
                case 'medium':
                return css`
                    font-size: 35px;
                    padding: 12px;
                `
                default: 
                return css`
                    font-size: 50px;
                    padding: 15px;
                `
            }
        }
    }
`

export default ({lastUpdate, light, ...props}) => {
    return (
        <ClockWapper className={light ? 'light': ''} {...props}>
            {format(new Date(lastUpdate))}
        </ClockWapper>
    )
}