import React, {useState} from 'react';
import './BudgetBody.css'
import {toDatetimeLocal} from "../../util";
import {useDispatch, useSelector} from "react-redux";
import {deleteBudgetAction} from "../../redux/action/budget";
import {useLocation} from "react-router-dom";

const BudgetDetails = (props) => {
    let {budget, setBudget, balance, setBalance, selectOpt} = props

    const  { budgetState } = useSelector((state) => state.budgetReducer)
    const dispatch = useDispatch()


    const [input, setInput] = useState("")

    const handleInput = (e) =>{
        setInput(e.target.value)
    }
    const filterTable = () => {
        let newObject = [...budget]
        setBudget(newObject.filter((data)=> input === data["budgetDescription"] || input === data["budgetName"]))
    }

    const deleteEntry = (objectId, amount) => {
        // let newObject = [...budget]
        // setBudget(newObject.filter((data, index)=>index !== objectId))
        // let reverseBalance = balance + budgetAmount
        // setBalance(reverseBalance)
        dispatch(deleteBudgetAction({id:objectId,amount}))
    }

    let location = useLocation()
    let currency = new URLSearchParams(location.search).get("currency")

    return (
        <div className="budget-details-container">
            <div>
            <h1>Details</h1>
                <div>
                    <label>Search For: </label>
                    <input onChange={handleInput}/>
                    <button onClick={filterTable}>Search</button>
                </div>

            </div>
            {budgetState.length > 0
                ?
                <table>
                    <tr className="table-header">
                        <th>Date</th>
                        <th>Budget Name</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    {budgetState.map( (data, index) =>
                    <tr key={index} className="data-row">
                        <td>{toDatetimeLocal(data.date)}</td>
                        <td>{data.budgetName}</td>
                        <td>{selectOpt}{data.budgetAmount}</td>
                        <td>{data.budgetDescription}</td>
                        <td><button style={{backgroundColor:"red", color:"white", padding:"2px 10px", border:"unset"}} onClick={()=> deleteEntry(index, +data.budgetAmount)}>Delete</button> </td>
                    </tr>
                    )}
            </table>
                : "Empty"}
        </div>
    );
};

export default BudgetDetails;