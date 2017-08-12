import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Route extends Component {
    static propTypes = {
        route: PropTypes.object
    }

    render() {
        const {
            id,
            predicates,
            filters,
            backend
        } = this.props.route;

        return (
            <div>
                <span>{id}: </span>
                <span>{predicates.map(predicate => (
                    <b key={predicate.name}>{predicate.name}({predicate.args.map((arg, index) => (
                        <i key={index}>{arg}</i>
                    ))})</b>
                ))}</span>
                <span>{filters.map(filter => (
                    <span key={filter.name}> -&gt; <b>{filter.name}({filter.args.map((arg, index) => (
                        <i key={index}>{arg}</i>
                    ))})</b>
                    </span>
                ))}</span>
                <span> -&gt; {backend}</span>
                <hr/>
            </div>
        );
    }
}
