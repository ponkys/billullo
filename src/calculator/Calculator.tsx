import React, { Component, ReactNode } from "react";
import { connect } from 'react-redux';

import { CalculatorButton } from './CalculatorButton';
import { CALCULATOR_CONTENT } from "./Calculator.constants";
import { assignValue } from "./Calculator.service";
import { CalculatorProps } from "../interfaces/calculator.state";
import { addExpense } from '../actions/expense.actions';
import { ExpenseInterface } from "../interfaces/expense.interface";

class Calculator extends Component<CalculatorProps, { currentExpense: string }> {
    calculatorContent: string[] = CALCULATOR_CONTENT;
    state = {
        currentExpense: ''
    }

    handleBtnPressed = (value: string) => {
        const current = this.state.currentExpense;
        const currentExpense = assignValue(current, value);
        this.setState({
            currentExpense
        })
    }

    onAdd = (value: number) => {
        const expense: ExpenseInterface = {
            note: 'new',
            value,
        }
        this.setState({
            currentExpense: ''
        });
        // update state by dispatching actions. no need for local state.
        this.props.addExpense(expense);
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
        const total = this.props.totalExpense;
        const expense = this.state.currentExpense;
        return  (
            <div>
                <div>total: {total}</div>
                { expense &&
                    <div>expense: {expense}</div>
                }
                <div className="numbers-area margin-horizontal-auto">
                    {this.createButtons()}
                </div>
                <div
                    className="add-area display-flex"
                    onClick={() => this.onAdd(Number.parseFloat(expense))}>
                    Add
                </div>
            </div>
        )
    }
  
}

// this function when passed to react-redux connect function receives app root state
// select the values you need in your component and they will be accessible as props. 
const mapStateToProps = (state: any) => ({
    totalExpense: state.expense.totalExpense, 
    lastExpense: state.expense.lastExpense,
});

// pass whatever actions your component needs here
// the will be available as props
const mapActionsToProps = {
    addExpense: addExpense
}

// any component that needs to access redux state needs to be connected 
export default connect(mapStateToProps, mapActionsToProps)(Calculator);
