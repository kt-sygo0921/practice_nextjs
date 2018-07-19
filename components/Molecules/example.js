import {connect} from 'react-redux';
import Clock from '../Atoms/Clock';
import Counter from '../Atoms/Counter';

function Examples ( {lastUpdate, light}) {
    return (
        <div>
            <Clock lastUpdate={lastUpdate} light={light} />
            <Counter />
        </div>
    )
}

function mapStateToProps(state) {
    const {lastUpdate, light} = state.reducer;
    return {lastUpdate, light}
}

export default connect(mapStateToProps)(Examples)