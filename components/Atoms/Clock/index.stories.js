import React from 'react';
import { storiesOf } from '@storybook/react';
import Clock from './index';

const props= {
    lastUpdate: 0,
    light: ''
}

storiesOf('Clock', module)
    // .add('default',()=> {
        
    //     return (<Clock {...props}/>, {notes: 'Simple Clock Component'})
    // });
    .add('default',()=> <Clock {...props}/>, {notes: 'Simple Clock Component'});
    // .add('default',()=> <Clock {...props}/>);
    