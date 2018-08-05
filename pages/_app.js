import App, {Container} from 'next/app';
import React from 'react';
import {Provider} from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import withReduxStore from '../lib/with-redux-store';
import {injectGlobal} from 'styled-components';
import resetStyle from '../lib/reset-css';
import withI18next from '../lib/withI18next';

injectGlobal`
    ${resetStyle}
`

class MyApp extends App {
    render() {
        const {Component, pageProps, reduxStore} = this.props;
        return (
            <Container>
                <Provider store = {reduxStore}>
                    <I18nextProvider i18n={withI18next}>
                        <Component {...pageProps}/>
                    </I18nextProvider>
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)