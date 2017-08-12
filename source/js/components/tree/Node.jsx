import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './node.scss';

export default class Node extends Component {
    static propTypes = {
        node: PropTypes.object
    }

    constructor() {
        super();

        this.state = { collapsed: false };
    }

    render() {
        const {
            node
        } = this.props;

        const {
            collapsed
        } = this.state;


        const hasChilds = node.children.length > 0;

        return (
            <div className="node">
                {hasChilds && <span className={collapsed ? 'collapsed' : ''} onClick={this.handleClick}></span>}
                {node.path}
                {hasChilds && !collapsed && node.children.map(child => {
                    return <Node node={child} />
                })}
                {hasChilds && collapsed && <div>...</div>}
            </div>
        );
    }

    handleClick = () => {
        const {
            collapsed
        } = this.state;

        this.setState({
            collapsed: !collapsed
        });
    }
}
