import '../../styles/react-zorba.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Common from '../../scripts/apps/common';

const isReact16 = ReactDOM.createPortal !== undefined;

const GetCreatePortal = () =>
    isReact16
        ? ReactDOM.createPortal
        : ReactDOM.unstable_renderSubtreeIntoContainer;

class ZorbaDialog extends React.Component {

    constructor(props) {
        super(props);
        this.class_name = new function () {
            this.container = "rzorba-dialog-container";
            this.identifier = "rzorba-dialog-identifier-" + Common.GetRandomInt(99999);
            this.disable_scroll = "rzorba-dialog-disable-scroll";
            this.mask = "rzorba-dialog-mask";
        }
        this.element = undefined;
        this.current_open = this.props.open;
        this.preventDefault = function(e){
            e.preventDefault();
        }
    }
    componentDidMount() {
        this.Init();
    }
    componentWillUnmount() {
    }
    componentWillReceiveProps(newProps) {
    }
    componentDidUpdate() {
        if (this.current_open != this.props.open) {
            this.current_open = this.props.open;
            if (this.current_open) {
                this.OpenDialog();
            } else {
                this.CloseDialog();
            }
        }

    }
    //events

    //functions
    Init() {
        if (this.props.open) {
            this.OpenDialog();
        }
    }
    OpenDialog() {
        this.CloseDialog();
        //disable scrollbar
        document.body.classList.add(this.class_name.disable_scroll);
        document.body.addEventListener('touchmove', this.preventDefault, { passive: false });
    }
    CloseDialog() {
        //enable scrollbar
        document.body.classList.remove(this.class_name.disable_scroll);
        document.body.removeEventListener('touchmove', this.preventDefault);
    }

    render() {
        if (!this.props.open) {
            return null;
        }

        let main = (
            <div id={this.class_name.identifier} className={this.class_name.container + (this.props.className != undefined ? " " + this.props.className : "")}>
                <div className={this.class_name.mask}></div>
                {this.props.children}
            </div>
        )
        const createPortal = GetCreatePortal();
        return createPortal(
            main,
            document.body,
        );
    }
}

export default ZorbaDialog;