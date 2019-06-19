import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class SidebarConnected extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    //events

    render() {
        return (
            <div id="sidebar">
            </div>
        );
    }
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarConnected);
export default withRouter(Sidebar);