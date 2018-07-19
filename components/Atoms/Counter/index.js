import React, {Component} from 'react';
import {connect} from 'react-redux';
import { incrementCount, decrementCount, resetCount } from '../../../actions/action';


class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Count: <span>{this.props.count}</span></h1>
                <button onClick={this.props.increment}>+1</button>
                <button onClick={this.props.decrement}>-1</button>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {count} = state.reducer
    return {count}
}

function mapDispatchToProps(dispatch) {
    return {
        increment() {
            dispatch(incrementCount())
        },
        decrement() {
            dispatch(decrementCount())
        },
        reset() {
            dispatch(resetCount())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)