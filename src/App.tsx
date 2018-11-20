import React, { Component } from "react";

import "./assets/styles/main.min.css";
import "./main.scss";

import { Calculator } from './calculator/Calculator';

class App extends Component {
    render() {
        return (
            <div className="of-util of-shared text-center">
                <div className="of-content-layout padding-horizontal-gutter margin-horizontal-auto">
                    <p>Budget</p>
                    <Calculator />
                </div>
            </div>
        );
    }
}

export default App;
