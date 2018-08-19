import React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme'

const ButtonStyled = styled.input `

`;

const LabelStyled = styled.label`
    font-family: ${font('pre')};
`;

const Button = ({id, buttonname, value, children}) => (
    <LabelStyled htmlFor={id}>
        {children}
        <ButtonStyled id={id} name={buttonname} value={value} type="radio" />
    </LabelStyled>
);

export default Button;