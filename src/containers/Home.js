import { connect } from 'react-redux';
import Home from '../components/Home.jsx';
import { push } from 'react-router-redux'
import { add_count } from '../actions/actionCreators/counter';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_count(count){
            dispatch(add_count(count))
        },
        show_about(){
            dispatch(push('/about'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)