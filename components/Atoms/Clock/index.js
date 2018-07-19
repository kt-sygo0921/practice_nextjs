import React from 'react';
import styled from 'styled-components';

const pad = n => n < 10 ? `0${n}`:n
const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const ClockWapper = styled.div`
    padding: 15px;
    display: inline-block;
    color: #82FA58;
    font: 50px menlo, monaco, monospace;
    background-color: #000;
    &.light {
        background-color:#999;
    }
`

export default ({lastUpdate, light}) => {
    return (
        <ClockWapper className={light ? 'light': ''}>
            {format(new Date(lastUpdate))}
        </ClockWapper>
    )
}