import React from 'react'
import { connect } from 'react-redux'
import { pushBreadcrumd } from '../../store/index'

function Home(props) {
    return (
        <>
            <div onClick={props.pushBreadcrumd}>statistics</div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        breadcrumd: state.breadcrumd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pushBreadcrumd: () => {
            dispatch(pushBreadcrumd(11))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);