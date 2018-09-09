import { configure, addDecorator} from '@storybook/react';
import { injectGlobal } from 'styled-components';
import resetStyle from '../lib/reset-css';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import defaultTheme from '../constants/theme/default';

// automatically import all files ending in *.stories.js
const req = require.context('../components/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
   
injectGlobal`
    ${resetStyle}
`

addDecorator(story => (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
  </BrowserRouter>
))

configure(loadStories, module);
