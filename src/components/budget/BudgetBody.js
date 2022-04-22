import React, {useState} from 'react';
import "./BudgetBody.css"
import BudgetEntry from "./BudgetEntry";
import BudgetDetails from "./BudgetDetails";
import { useParams} from "react-router-dom";


const BudgetBody = (props) => {
    const {balance, setBalance, budget, setBudget, selectOpt} = props
    let { identity } = useParams()

    let myDate = new Date();
    let hrs = myDate.getHours()

    let greet ="Good Morning"

    if(hrs < 12)
        greet = "Good Morning"
    else if(hrs >= 12 && hrs <= 17)
        greet = "Good Afternoon"
    else if (hrs >= 17 && hrs < 24)
        greet = "Good Evening"
    return (

        <div className="budget-body">
            <div className="text-intro">
            <h1>{greet}, Welcome {identity} to your personal budget</h1>
            <p>Enter the price, description and give a special name to your expenditure</p>
            </div>
            <div className="budget-body-sectioned">
                <BudgetEntry budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
                <BudgetDetails budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance} selectOpt={selectOpt}/>
            </div>
        </div>

    );
};

export default BudgetBody;