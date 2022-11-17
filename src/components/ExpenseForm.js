import React from "react";
import './ExpenseForm.css';


const ExpenseFrom = ()=> {
    const titleChangeHandler =(event)=>{
        console.log(event.target.value);
    };
    
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                 <label>Amount</label>
                  <input type='number' min='0.01' step='0.01'  onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2022-11-17' max='2024-12-31'/>
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>

    );
};
export default ExpenseFrom;