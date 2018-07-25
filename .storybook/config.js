import { configure} from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

// automatically import all files ending in *.stories.js
const req = require.context('../components/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
