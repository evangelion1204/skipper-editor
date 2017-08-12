import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Argument from './Argument';

@connect(state => ({
}), {
})
export default class Arguments extends Component {
    static propTypes = {
        filter: PropTypes.object.isRequired,
        type: PropTypes.string.isRequired
    }

    render() {
        const {
            filter,
            type,
        } = this.props;

        return (
            <span>(
                { filter.args.map((value, index) => <Argument key={index} type={type} index={index} name={filter.name} />) }
            )</span>
        );
    }
}
