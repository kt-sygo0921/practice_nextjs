import React from 'react';
import { storiesOf } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Icon from './index';

storiesOf('Atoms Icon', module)
    .add('default', () => {
        const props = {
            src: '/icons/trash-can.svg',
            alt: 'アイコン',
        }
        return <Icon {...props} />
    })
    .add('clickable', () => {
        const props = {
            src: '/icons/trash-can.svg',
            alt: 'アイコン',
            onClick: action('アイコンがクリックされました')
        }
        return <Icon {...props} />
    });