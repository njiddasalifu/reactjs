import React from "react";

function Loginform(){
    return (
        <div className="form-inner">
            <h2>LOGIN FORM</h2>
             {/* ERROR */}
             `<div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id
                ="name" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id
                ="email" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id
                ="password" />
                </div>
            <input type="submit" value="LOGIN" />
        


        </div>
    )
}

export default Loginform;