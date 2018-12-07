import React, { Component, ReactNode } from "react";
import { connect } from 'react-redux';

import { CalculatorButton } from './CalculatorButton';
import { CALCULATOR_CONTENT } from "./Calculator.constants";
import { assignValue } from "./Calculator.service";
import { CalculatorState } from "../interfaces/calculator.state";
import { updateExpense, addExpense } from '../actions/expense.actions';
import { ExpenseInterface } from "../interfaces/expense.interface";

class Calculator extends Component<CalculatorState> {
    calculatorContent: string[] = CALCULATOR_CONTENT;

    // this is not needed.
    // if you are using redux you should keep your state in the store
    // generally local state is not needed.

    // constructor(props: {}) {
    //     super(props);
    //     this.state = {
    //         expense: {
    //             value: '',
    //             note: ''
    //         },
    //         totalExpense: 0
    //     };
    // }

    handleBtnPressed = ( value: string ) => {
        this.props.updateExpense(Number(value))

        // removing call to calculation service
        // components should be dumb as possible
        // rather handle data manipulation/ stater maintenance in reducer
    
        // let value = assignValue(this.state.expense.value, content);
        // const expense = {
        //     value,
        //     note: ''
        // }
        // this.setState({
        //     expense
        // })
    }

    onAdd = (value: number) => {
        const expense: ExpenseInterface = {
            note: 'new',
            value,
        }

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
        const expense = this.props.expense.value;
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
                    onClick={() => this.onAdd(expense)}>
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
    expense: state.expense.expense,
});

// pass whatever actions your component needs here
// the will be available as props
const mapActionsToProps = {
    updateExpense: updateExpense,
    addExpense: addExpense
}

// any component that needs to access redux state needs to be connected 
export default connect(mapStateToProps, mapActionsToProps)(Calculator);
