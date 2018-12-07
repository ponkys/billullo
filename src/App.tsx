import React, { Component } from "react";

import "./assets/styles/main.min.css";
import "./main.scss";

import Calculator from './calculator/Calculator';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="of-util of-shared text-center">
                    <div className="nav-bar">Billullo</div>
                    <div className="main-layout of-content-layout display-flex flex-column calculator-content padding-horizontal-gutter margin-horizontal-auto">
                        <Calculator />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
