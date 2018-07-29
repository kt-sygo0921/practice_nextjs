import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './index';

storiesOf('Atoms_Heading', module)
    .add('default', ()=>{
        const props = {
            tag: 'span'
        }
        return <Heading {...props}>あいうえお</Heading>
    })