import React from 'react';
import {connect} from 'react-redux';
import { serverRenderClock, startClock } from '../actions/action';
import Example from '../components/Molecules/example';
import {withI18next} from '../lib/withI18next';


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
        return(
            withI18next(['common'])(({t,initialI18nStore})) => (
                <Example />
            )
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
export default connect(mapStateToProps,mapDispatchToProps)(Index)