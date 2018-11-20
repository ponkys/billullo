import React, { Component, ReactNode } from "react";

import { CalculatorButton } from './CalculatorButton';

export class Calculator extends Component {
    calculatorContent: string[] = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '',
        '0',
        'delete'
    ];

    createButtons = (): ReactNode => {
        return this.calculatorContent.map((content: string, index: number) => {
            return <CalculatorButton key={index} content={content}/>
        });
    }
    render() {
        return  (
            <div className="numbers-area margin-horizontal-auto">
                {this.createButtons()}
            </div>
        )
    }
  
}
