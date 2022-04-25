import React, {useState} from 'react';
import budget from "../../Budget";
import {useDispatch} from "react-redux";
import {addItemToBudget} from "../../redux/action/budget";

const BudgetEntry = (props) => {
    let {budget, setBudget, balance,setBalance} = props

    const dispatch = useDispatch()
    // const [input, setInput] =useState({budgetName:'', budgetAmount:'', budgetDescription:''})

    const [input, setInput] = useState({budgetName:'', budgetAmount:'', budgetDescription:'', date:''})

    const handleInput = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }


    const createBudget = () => {
        if (input.budgetAmount <= balance) {

            let budgetData = [{...input, date: Date.now()}, ...budget]
            let budgetStoreData = {...input, date: Date.now()}
            setBudget(budgetData)
            dispatch(addItemToBudget(budgetStoreData))
            setBalance(balance - input.budgetAmount)
        }
    //     let savedBudget = {...input}
    // }
    //     if(!(balance - savedBudget.budgetAmount < 0)){
    //         setBudget(budgetData)
    //
    //         let newBalance = balance - savedBudget.budgetAmount
    //         setBalance(newBalance)
    //     }
    //     else setBalance((initial)=> {
    //         setTimeout(() => setBalance(initial), 5000)
    //         return "Budget limit exceeded"
    //     })
    //
    }
    return (
        <div className="budget-entry-container">
            <div className="budgetEntry">
                <p>Budget Name</p>
                <input name="budgetName" onChange={handleInput}/>
            </div>
            <div className="budgetEntry">
                <p>Budget Amount</p>
                <input name="budgetAmount" onChange={handleInput}/>
            </div>
            <div className="budgetEntry">
                <p>Budget Description</p>
                <input name="budgetDescription" onChange={handleInput}/>
            </div>
            <button onClick={createBudget}>Enter</button>

        </div>
    );
};

export default BudgetEntry;