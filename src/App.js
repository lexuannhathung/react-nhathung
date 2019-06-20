import React from 'react';
import Header from './examples/pages/headers/header';
import Sidebar from './examples/pages/sidebars/sidebar';
import { Route } from 'react-router-dom';
import CONSTANTS from './examples/scripts/apps/constants';
import Dialog from './examples/pages/dialogs/dialog';

class App extends React.Component {
    constructor() {
        super();
        this.state = new function () {
            this.open = true;
        }
    }

    render() {
        return (
            <div className="main" >
                <Header />
                <div className="container">
                    <Sidebar />
                    <div className="content">
                        <Route path={CONSTANTS.NAVIGATION_URL.COMPONENT_DIALOG} component={Dialog} />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
