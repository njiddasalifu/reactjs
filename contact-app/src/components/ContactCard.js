import React from "react";
import user from '../images/user.png'
export const ContactCard = (props)=>{

    const { id, name, email} = props.contact;
    return(
        <div className="item" >
                <img className="ui avatar image" src={user} />
                <div className="content" >
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon"
                style={{ color: "red"}}>
                </i>
            </div>
    )
}