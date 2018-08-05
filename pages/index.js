import React from 'react';
import {connect} from 'react-redux';
import { translate } from 'react-i18next';
import {compose} from 'recompose'

// import {withI18next} from '../lib/withI18next';
import { serverRenderClock, startClock } from '../actions/action';
import Example from '../components/Molecules/example';

class Index extends React.Component {
    static getInitialProps({reduxStore, req}) {
        const isServer = !!req;
        reduxStore.dispatch(serverRenderClock(isServer))
        return {}
    }

    componentDidMount() {
        this.timer = setInterval((()=>{
            this.props.startClock();
        }),1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const { t } = this.props;
        console.log(t);
        return(
            // withI18next(['common'])((t, initialI18nStore) => (
            //     <div>
            //         <p>{t('integrates_react-i18next')}</p>
            //         <Example />
            //     </div>
            // ))
            <p>{t('integrates_react-i18next')}</p>
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
}

export default compose(translate(),connect(mapStateToProps,mapDispatchToProps)(Index))