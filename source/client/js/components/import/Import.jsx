import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { parseRoutes } from 'redux/routes/routes';

import './import.scss';

@connect(state => ({
}), {
    parseRoutes
})

export default class Import extends Component {
    static propTypes = {
        parseRoutes: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    render() {
        const { open } = this.state;

        return (
            <div>
                {open && <form className="import-form" onSubmit={this.handleSubmit}>
                    <textarea name="eskip"></textarea>
                    <button>Load</button>
                </form>}

                {!open && <button onClick={this.handleOpen}>Import</button>}
            </div>
        );
    }

    handleOpen = (event) => {
        this.setState({
            open: true,
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        const eskip = event.target.eskip.value;

        this.props.parseRoutes(eskip);

        this.setState({
            open: false,
        })
    }
}
