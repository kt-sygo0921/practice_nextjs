import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Atoms Button', module)
    .add('Lank',()=> {
        return (
            <div>
                <Button>Default</Button>
                <Button lank={'primary'}>Primary</Button>
                <Button lank={'secondary'}>Secondary</Button>
            </div>
        )
    })