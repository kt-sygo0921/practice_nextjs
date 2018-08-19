import { configure, addDecorator} from '@storybook/react';
import { injectGlobal } from 'styled-components';
import resetStyle from '../lib/reset-css';
import { withThemes } from 'storybook-styled-components'

import defaultTheme from '../constants/theme/default';

// automatically import all files ending in *.stories.js
const req = require.context('../components/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

injectGlobal`
    ${resetStyle}
`

addDecorator(withThemes(defaultTheme))

configure(loadStories, module);
