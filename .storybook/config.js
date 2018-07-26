import { configure} from '@storybook/react';
import { injectGlobal } from 'styled-components';
import resetStyle from '../lib/reset-css';

// automatically import all files ending in *.stories.js
const req = require.context('../components/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

injectGlobal`
    ${resetStyle}
`

configure(loadStories, module);
