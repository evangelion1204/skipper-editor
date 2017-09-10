import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Arguments from './Arguments';
import { activateFilter, deactivateFilter } from 'redux/filter/filter';

@connect(state => ({
}), {
    activateFilter,
    deactivateFilter
})
export default class Filter extends Component {
    static propTypes = {
        filter: PropTypes.object.isRequired,
        type: PropTypes.string,
        activateFilter: PropTypes.func,
        deactivateFilter: PropTypes.func
    }

    render() {
        const {
            filter,
            type
        } = this.props;

        return (
            <div>
                <label>
                    <input type="checkbox" onChange={this.handleChange} /> {filter.name}
                </label>
                <Arguments type={type} filter={filter} />
            </div>
        );
    }

    handleChange = (event) => {
        const {
            filter,
            type,
            activateFilter,
            deactivateFilter
        } = this.props;

        if (event.target.checked) {
            activateFilter(type, filter.name)
        }
        else {
            deactivateFilter(type, filter.name);
        };
    }
}
