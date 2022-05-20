import React, { Component } from "react";
import { Router, Route, Routes } from "react-router-dom";

import Login from "../Login/Login";
import Categories from "../Categories/Categories";
import history from '../../history';

export default class RoutesX extends Component {
    render() {
        return (
            <Router history={history}>
                <Routes>
                    <Route path="../Login.jsx" component={Login} />
                    <Route path="../Categories.jsx" component={Categories} />
                </Routes>
            </Router>
        )
    }
}