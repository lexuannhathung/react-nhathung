import React from 'react';
import Dialog from './components/react-nhathung-dialogs/react-nhathung-dialog';

class App extends React.Component {
    constructor() {
        super();
        this.state = new function () {
            this.open = true;
        }
    }

    render() {
        return (
            <div className="App" >
                kkkkkkkkkkkk
                <Dialog open={this.state.open}>
                    hello
                </Dialog>
            </div>
        );
    }
}
export default App;
