import React, { Component } from "react";

import "./assets/styles/main.min.css";
import "./main.scss";

import { Calculator } from './calculator/Calculator';

import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import rootReducer from './reducers';

let initialStore = {
    expense: {
        value: '',
        note: ''
    },
    // totalExpense: 0
};

const store = createStore(rootReducer, initialStore);
console.log(store.getState());

class App extends Component {
    render() {
        return (
            <div className="of-util of-shared text-center">
                {/* <Provider store={store}> */}
                    <div className="nav-bar">Billullo</div>
                    <div className="main-layout of-content-layout display-flex flex-column calculator-content padding-horizontal-gutter margin-horizontal-auto">
                        <Calculator />
                    </div>
                {/* </Provider> */}
            </div>
        );
    }
}

export default App;
