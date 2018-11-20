import React, { Component } from "react";


export class CalculatorButton extends Component<{content: string}, {}> {
    constructor(props: {content: string}){
        super(props);
    }
    render() {
        return  (
            <div className="number-area">
                <span>{this.props.content}</span>
            </div>
        )
    }
}

