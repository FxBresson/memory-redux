import { connect } from 'react-redux'
import Container from '../components/Container'

const mapStateToProps = state => ({
    status: state.gameLogic.status
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)