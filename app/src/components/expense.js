import React from "react";

class Expense extends React.Component{
    render(){
        return(
            <>
            <h2><b>Expenses Listed Below</b></h2>
            <input type="text" placeholder="expense"></input>
            <button>add</button>
            <div><b>Item:</b><i>Phone</i></div>
            <div><b>Amount:</b><i>$100</i></div>
            <div><b>Category:</b><i>Mobile</i></div>
            </>
        );
    }
}
export default Expense;