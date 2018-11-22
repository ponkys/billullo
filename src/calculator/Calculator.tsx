import React, { Component, ReactNode } from "react";

import { CalculatorButton } from './CalculatorButton';
import { CALCULATOR_CONTENT } from "./Calculator.constants";
import { assignValue } from "./Calculator.service";

interface CalculatorState {
    expense: {
        value: string,
        note: string
    },
    totalExpense: number
}

export class Calculator extends Component<{}, CalculatorState> {
    calculatorContent: string[] = CALCULATOR_CONTENT;

    constructor(props: {}) {
        super(props);
        this.state = {
            expense: {
                value: '',
                note: ''
            },
            totalExpense: 0
        };
    }

    handleBtnPressed = (content = '') => {
        let value = assignValue(this.state.expense.value, content);
        const expense = {
            value,
            note: ''
        }
        this.setState({
            expense
        })
    }

    onAdd = (value: string) => {
        let totalExpense = this.state.totalExpense;
        const newValue = Number(value);
        totalExpense = totalExpense + newValue;
        this.setState ({
            totalExpense,
            expense: {
                value: '',
                note: ''
            }
        })
    }

    createButtons = (): ReactNode => {
        return this.calculatorContent.map((content: string, index: number) => {
            return <CalculatorButton
                key={index}
                content={content}
                onBtnPressed={this.handleBtnPressed} />
        });
    }

    render() {
        const total = this.state.totalExpense;
        const expense = this.state.expense.value;
        return  (
            <div>
                <div>total: {total}</div>
                { expense.length > 0 &&
                    <div>expense: {expense}</div>
                }
                <div className="numbers-area margin-horizontal-auto">
                    {this.createButtons()}
                </div>
                <div onClick={() => this.onAdd(expense)}>Add</div>
            </div>
        )
    }
  
}
