import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';

const mapStateToProps = state => {
    return {
        
    };
}
const mapDispatchToProps = dispatch => {
    return {
        sidebarSetState: _data => dispatch(rootAction.sidebar.setState(_data))
    };
};

class NotFoundPageConnected extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.Init();
    }
    componentWillUnmount() {
    }

    //events

    //functions
    Init() {
        this.props.sidebarSetState({ selected_pageid: CONSTANTS.SIDEBAR_PAGEID.NONE });
    }

    render() {
        return (
            <div id="not-found-page">
                <img className="background-image" src="/images/not-found-page.jpg" />
            </div>
        );
    }
}

const NotFoundPage = connect(mapStateToProps, mapDispatchToProps)(NotFoundPageConnected);
export default NotFoundPage;