import React from 'react';
import styled, {css} from 'styled-components';
import color from '../../../constants/color';
import fz from '../../../constants/font-size';
import space from '../../../constants/space';

const Button_Style = styled.a`
    display: inline-block;
    font-size: ${fz.s};
    padding: ${space.s} ${space.m};
        ${({lank}) => {
            switch(lank) {
                case 'primary':
                return css`
                    color: ${color.white};
                    background: ${color.orange};
                `
                case 'secondary':
                return css`
                    color: ${color.brown};
                    background: ${color.yellow};
                `
                default: 
                return css`
                    color: ${color.black};
                    background: ${color.gray};
                `
            }
        }
    }
`

const Button = ({lank, ...props}) => {
    return (
        <Button_Style lank={lank} {...props}/>
    )
}

export default Button;