import React, { Component } from "react";

import "./assets/styles/main.min.css";
import "./main.scss";

import { Calculator } from './calculator/Calculator';

class App extends Component {
    render() {
        return (
            <div className="main-layout of-util of-shared text-center">
                <div className="nav-bar">Billullo</div>
                <div className="of-content-layout display-flex flex-column calculator-content padding-horizontal-gutter margin-horizontal-auto">
                    <Calculator />
                </div>
                <div className="add-area display-flex">Add</div>
                {/* <div onClick={() => this.onAdd(expense)}>Add</div> */}
            </div>
        );
    }
}

export default App;
