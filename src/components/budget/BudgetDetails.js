import React from 'react';
import './BudgetBody.css'
import {toDatetimeLocal} from "../../util";

const BudgetDetails = (props) => {
    let {budget, setBudget, balance, setBalance, selectOpt} = props

    const deleteEntry = (objectId, budgetAmount) => {
        let newObject = [...budget]
        setBudget(newObject.filter((data, index)=>index !== objectId))
        let reverseBalance = balance + budgetAmount
        setBalance(reverseBalance)
    }

    return (
        <div className="budget-details-container">
            <h1>Details</h1>
            {budget.length > 0
                ?
                <table>
                    <tr className="table-header">
                        <th>Date</th>
                        <th>Budget Name</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    {budget.map( (data, index) =>
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