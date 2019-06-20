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

class DialogConnected extends React.Component {

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
            <div id="component-dialog">
                Component Dialog
            </div>
        );
    }
}

const Dialog = connect(mapStateToProps, mapDispatchToProps)(DialogConnected);
export default withRouter(Dialog);