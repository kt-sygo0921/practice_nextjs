import App, {Container} from 'next/app';
import React from 'react';
import {Provider} from 'react-redux';
import withReduxStore from '../lib/with-redux-store';

import {ThemeProvider, injectGlobal} from 'styled-components';
import resetStyle from '../lib/reset-css';
import defaultTheme from '../constants/theme/default';

injectGlobal`
    ${resetStyle}
`

class MyApp extends App {
    render() {
        const {Component, pageProps, reduxStore} = this.props;
        return (
            <Container>
                <Provider store = {reduxStore}>
                    <ThemeProvider theme={defaultTheme}>
                        <Component {...pageProps}/>
                    </ThemeProvider>
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)