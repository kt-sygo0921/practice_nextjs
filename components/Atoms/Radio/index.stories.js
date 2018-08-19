import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Atoms Radio', module)
    .add('default', ()=> (
    <div>
        <Button id="id" buttonname="name" value="ああああ">
        テスト・テスト
        </Button>
        <Button id="aidi" buttonname="name" value="ああああ">
        テスト・テスト
        </Button>
      </div>
    ));