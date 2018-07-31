import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './index';

storiesOf('Atoms Heading', module)
    .add('default', ()=>{
        return <Heading>あいうえお</Heading>
    })
    .add('Heading1', ()=>{
        const props = {
            tag: 'h1',
        }
        return <Heading {...props}>あいうえお</Heading>
    })
    .add('Heading2', ()=>{
        const props = {
            tag: 'h2',
        }
        return <Heading {...props}>あいうえお</Heading>
    });