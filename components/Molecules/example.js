import {connect} from 'react-redux';
import Clock from '../Atoms/Clock';
import Counter from '../Atoms/Counter';
import styled from 'styled-components';

const MoleculesWrapper = styled.div`
    
`

const Clock_style = styled(Clock)`
    margin-left: 10px;
`

function Examples ( {lastUpdate, light}) {
    return (
        <MoleculesWrapper>
            <Clock_style lastUpdate={lastUpdate} light={light}/>
            <Counter />
        </MoleculesWrapper>
    )
}

function mapStateToProps(state) {
    const {lastUpdate, light} = state.reducer;
    return {lastUpdate, light}
}

export default connect(mapStateToProps)(Examples)