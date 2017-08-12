import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateFilterArgument } from 'redux/filter/filter';

import './argument.scss';

@connect(state => ({
}), {
    updateFilterArgument,
})
export default class Argument extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        updateFilterArgument: PropTypes.func,
    }

    render() {
        return (
            <input className="argument" type="text" onChange={this.handleChange}/>
        );
    }

    handleChange = (event) => {
        const {
            index,
            name,
            type,
            updateFilterArgument,
        } = this.props;

        updateFilterArgument(type, name, index, event.target.value);
    }
}
