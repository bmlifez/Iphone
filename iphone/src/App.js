import React, { Component } from 'react';
import PropTypes            from 'prop-types';

class App extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }


    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
