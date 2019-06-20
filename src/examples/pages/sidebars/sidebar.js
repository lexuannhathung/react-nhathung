import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CONSTANTS from '../../scripts/apps/constants';
import rootAction from '../../actions/action';


const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
        sidebarSetState: _data => dispatch(rootAction.sidebar.setState(_data))
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
    goToPage = (pageId) => {
        let { history } = this.props;
        switch (pageId) {
            case CONSTANTS.SIDEBAR_PAGEID.COMPONENT_DIALOG:
                history.push({ pathname: CONSTANTS.NAVIGATION_URL.COMPONENT_DIALOG });
                break;
        }
    }

    render() {
        return (
            <div id="sidebar">
                <div className="sidebar-content">
                    <div className="sidebar-element" onClick={this.goToPage.bind(this, CONSTANTS.SIDEBAR_PAGEID.COMPONENT_DIALOG)}>
                        Dialog
                    </div>
                </div>
            </div>
        );
    }
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarConnected);
export default withRouter(Sidebar);