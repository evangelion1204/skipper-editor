import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tree } from 'radix-tree';

import Node from './Node';

function findNode(root, part) {
    return root.children.find(node => node.path === part);
}

function appendRoute(tree, route) {
    const pathPredicate = route.predicates.find(predicate => predicate.name === 'Path')

    const [path] = pathPredicate.args;

    const parts = path.split('/').filter(part => part !== '');

    parts.reduce((root, part) => {
        let node = findNode(root, parts);

        if (!node) {
            node = { children: [], path: part };
            root.children.push(node);
        }

        return node;
    }, tree);

    return tree;
}

function buildTree(routes) {
    // const tree = { children: [] };
    const tree = new Tree();

    return routes
        .filter(route => {
            return route.predicates.find(predicate => predicate.name === 'Path');
        })
        .reduce((root, route) => {
            const path = route.predicates.find(predicate => predicate.name === 'Path');
            return root.add(path.args[0]);
        }, tree);
}

export default class TreeView extends Component {
    static propTypes = {
        routes: PropTypes.array
    }

    render() {
        const {
            routes
        } = this.props;

        const tree = buildTree(routes);

        return (
            ( tree.root && <Node node={tree.root} /> )
        );
    }
}
