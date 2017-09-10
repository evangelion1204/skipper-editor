import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFiltersByType } from 'redux/filter/filter';
import { uniqBy } from 'lodash';
import Icon from 'components/Global/Icon';
import Filters from 'components/eskip/Filters';
import Routes from 'components/eskip/Routes';
import TreeView from 'components/tree/TreeView';

const routes = [
    {"id":"root","backend":"http://localhost:9080","predicates":[{"name":"Path2","args":["/"]}],"filters":[{"name":"Frontend","args":[]}]},
    {"id":"product","backend":"http://localhost:9080","predicates":[{"name":"Path","args":["/products/:sku1"]}],"filters":[{"name":"Frontend","args":[]}]},
    {"id":"product_new","backend":"http://localhost:9080","predicates":[{"name":"Path","args":["/products/:sku2"]}],"filters":[{"name":"Frontend","args":[]}]},
    {"id":"catalog","backend":"http://localhost:9090","predicates":[{"name":"Path","args":["/categories/:category"]}],"filters":[{"name":"Frontend","args":[]},{"name":"hardLogin","args":[]}]}
];

@connect(state => ({
    filterFilters: getFiltersByType(state, 'filter'),
    predicateFilters: getFiltersByType(state, 'predicate'),
}), {})
export default class Dashboard extends Component {
    static propTypes = {
        filterFilters: PropTypes.object,
        predicateFilters: PropTypes.object,
        dispatch: PropTypes.func,
    }

    render() {
        const {
            filterFilters,
            predicateFilters
        } = this.props;

        const filters = uniqBy(routes
            .map(route => route.filters)
            .reduce((result, filters) => {
                return [...result, ...filters];
            }, []), filter => filter.name);

        const predicates = uniqBy(routes
            .map(route => route.predicates)
            .reduce((result, predicates) => {
                return [...result, ...predicates];
            }, []), predicate => predicate.name);

        const filterInactive = !filterFilters || Object.keys(filterFilters).every(key => !filterFilters[key].active);
        const predicateInactive = !predicateFilters || Object.keys(predicateFilters).every(key => !predicateFilters[key].active);

        const filteredRoutes = routes
            .filter(route => {
                return filterInactive || route.filters.some(({name}) => filterFilters[name] && filterFilters[name].active)
            })
            .filter(route => {
                return predicateInactive || route.predicates.some(({name, args}) => {
                    const predicate = predicateFilters[name];

                    return (
                        predicate &&
                        predicate.active &&
                        (!predicate.args || predicate.args.every((pattern, index) => args[index].indexOf(pattern) !== -1))
                    );
                })
            });

        return (
            <div className='Dashboard'>
                <h1>Predicates</h1>
                <Filters filters={predicates} type="predicate" />
                <h1>Filters</h1>
                <Filters filters={filters} type="filter" />
                <h1>Routes</h1>
                <Routes routes={filteredRoutes} />
                <h1>Tree</h1>
                <TreeView routes={filteredRoutes} />
          </div>
        );
    }
}
