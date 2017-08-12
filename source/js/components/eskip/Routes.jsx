import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Route from './Route';

export default class Routes extends Component {
    static propTypes = {
        routes: PropTypes.array
    }

    render() {
        const {
            routes
        } = this.props;

        return (
            <div>
                {routes.map(route => (
                    <Route key={route.id} route={route} />
                ))}
            </div>
        );
    }
}
