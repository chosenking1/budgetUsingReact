import React, {useEffect, useState} from 'react';
import "./BudgetBalance.css"
import axios from "axios";
import {useSelector} from "react-redux";

const BudgetBalance = (props) => {
    let initialValue = props.balance
    const [input, setInput] = useState("")
    const [exchangeRate, setExchangeRate] = useState({})
    const [selectOption, setSelectOption] = useState("")

    // let {budget} = props
    let{budget, setSelectOpt} = props
    const {budgetAmount} = useSelector(state => state.budgetReducer)

    const handleInput = (e) => {
      setInput(e.target.value)
    }

    const handleSelect = (e) => {
        // e.target.value === Object.keys(exchangeRate)[0] ?
        //    props.setBalance(1000 * exchangeRate[e.target.value]) :
            selectOption === ""?
                props.setBalance(props.balance * exchangeRate[e.target.value])
                :props.setBalance(props.balance / exchangeRate[selectOption] * exchangeRate[e.target.value])
        setSelectOption(e.target.value)

        for (let i = 0; i < budget.length; i++){
            budget[i]["budgetAmount"] = budget[i]["budgetAmount"]/exchangeRate[selectOption] * exchangeRate[e.target.value]
        }
            setSelectOption(e.target.value)
            setSelectOpt(e.target.value)
    }

    useEffect(() => {
        axios.get('https://v6.exchangerate-api.com/v6/423d8a43de63773b3fba7cda/latest/NGN').then(
            (response) =>{
                setExchangeRate(response.data.conversion_rates)
                setSelectOption(Object.keys(response.data.conversion_rates)[0])
            }
        )
    }, [])

    useEffect(() => {
        console.log("I just Mounted @ Budget Balance")
        return() =>{
            console.log("I just UnMounted @ Budget Balance")
        }
    }, [props.balance])


    return (
        <div className="budgetBalance">
           <div className="balance">
               {budgetAmount}
           </div>
            <select className="balance-dropdown" onChange={handleSelect}>
                {Object.keys(exchangeRate).length > 0 &&
                    Object.keys(exchangeRate).map((data, index) => <option key={index}>{data}</option>
                    )}
            </select>
            <div className="balance-button">
            <input onChange={handleInput}/>
            <button onClick={()=> props.setBalance(input)}>Update Balance</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default BudgetBalance;