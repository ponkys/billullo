import React, { Component } from "react";

interface CalculatorButtonPropsInterface {
    content: string,
    onBtnPressed: any
}

export class CalculatorButton extends Component<CalculatorButtonPropsInterface, {}> {

    onBtnClick = (content: string): any => {
        this.props.onBtnPressed(content);
    }

    render() {
        const { content } = this.props;
        return  (
            <div className="number-area" onClick={() => this.onBtnClick(content)}>
                <span>{content}</span>
            </div>
        )
    }
}

