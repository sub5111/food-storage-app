import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Header from '../components/Header'

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class AppContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        // we can use ES6's object destructuring to effectively 'unpack' our props
        const { children } = this.props;
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
