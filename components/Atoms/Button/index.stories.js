import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Atoms Button', module)
    .add('Default',()=> {
        return <Button>Default</Button>
    })
    .add('Primary',()=> {
        const props = {
            lank: 'primary'
        }
        return <Button {...props}>Primary</Button>
    })
    .add('Secondary',()=> {
        const props = {
            lank: 'secondary'
        }
        return <Button {...props}>Secondary</Button>
    });