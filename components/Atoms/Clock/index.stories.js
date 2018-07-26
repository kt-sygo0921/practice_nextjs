import React from 'react';
import { storiesOf } from '@storybook/react';
import Clock from './index';

storiesOf('Atoms Clock', module)
    .add('default',()=> {
        const props= {
            lastUpdate: 0,
            light: '',
        }
        return <Clock {...props}/>
    })
    .add('small',()=> {
        const props= {
            lastUpdate: 0,
            light: '',
            size: 'small'
        }
        return <Clock {...props}/>
    })
    .add('medium',()=> {
        const props= {
            lastUpdate: 0,
            light: '',
            size: 'medium'
        }
        return <Clock {...props}/>
    });