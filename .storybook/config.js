import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import Container from './Container';

addDecorator(story => <Container story={story}/>);
setAddon(withNotes);

// automatically import all files ending in *.stories.js
const req = require.context('../components/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
