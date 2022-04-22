import React, {useState} from 'react';
import './Budget.css'
import BudgetBalance from "./components/budget/BudgetBalance";
import BudgetBody from "./components/budget/BudgetBody";

const Budget = () => {
    const [balance,setBalance] = useState(50000000)
    const [selectOpt, setSelectOpt] = useState("NGN")
const [budget, setBudget] = useState([])
    return (
        <div className="budget-container">
            <BudgetBalance balance={balance} setBalance={setBalance} setBudget={setBudget} budget={budget} setSelectOpt={setSelectOpt}/>
            <BudgetBody balance = {balance} setBalance = {setBalance} setBudget={setBudget} budget={budget} selectOpt={selectOpt}/>
        </div>
    );
};

export default Budget;