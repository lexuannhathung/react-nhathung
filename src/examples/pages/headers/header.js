import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return { 
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class HeaderConnected extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.Init();
    }
    componentWillUnmount() {
    }

    //events
    //functions
    Init(){
        
    } 

    render() {
        return (
            <div id="header">
            </div>
        );
    }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderConnected);
export default withRouter(Header);