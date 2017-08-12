import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

export default class Filters extends Component {
    static propTypes = {
        filters: PropTypes.array,
        type: PropTypes.string
    }

    render() {
        const {
            filters,
            type
        } = this.props;

        return (
            <div>
                {filters.map(filter => (
                    <Filter key={filter.name} filter={filter} type={type} />
                ))}
            </div>
        );
    }
}
