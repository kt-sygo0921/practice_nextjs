import React from 'react';
import { storiesOf } from '@storybook/react';
import Clock from './index';

storiesOf('Clock', module)
    .add('default',()=> {
        const props= {
            lastUpdate: 0,
            light: ''
        }
        return <Clock {...props}/>
    })