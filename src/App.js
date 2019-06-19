import React from 'react';
import Header from './examples/pages/headers/header';
import Sidebar from './examples/pages/sidebars/sidebar';

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

                    </div>
                </div>
            </div>
        );
    }
}
export default App;
