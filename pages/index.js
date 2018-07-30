import React from 'react';
import {connect} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import startI18 from '../lib/starti18n';
import {getTtranslation} from '../lib/translationHelpers';

import { serverRenderClock, startClock } from '../actions/action';
import Example from '../components/Molecules/example';

const lang = 'ja'
class Index extends React.Component {
    static async getInitialProps({reduxStore, req}) {
        const isServer = !!req;
        const translations = await getTtranslation(
            lang,
            ['common'],
            'http://localhost:8888/static/locales/'
        )
        reduxStore.dispatch(serverRenderClock(isServer))
        return {translations}
    }

    constructor(props) {
        super(props)
        this.i18n = startI18(props.translationHelpers, lang)
    }

    componentDidMount() {
        this.timer = setInterval((()=>{
            this.props.startClock();
        }),1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render(props) {
        return(
            <I18nextProvider i18n = {this.i18n}>
                <Example />
            </I18nextProvider>
        )
    }
}

function mapStateToProps(state) {
    return state.reducer;
}

function mapDispatchToProps(dispatch) {
    return {
        serverRenderClock() {
            dispatch(serverRenderClock())
        },
        startClock() {
            dispatch(startClock())
        }
    }
}export default connect(mapStateToProps,mapDispatchToProps)(Index)