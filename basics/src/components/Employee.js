
function Employee(props){ // Note: each componrnt starts with an uppercase letter
    //else it will not work
return (
<>
<p><b>Here is an employeee by name:</b> {props.name}</p>
<p><p><b>Role:</b> </p>{props.role ? props.role : 'No role'}</p>

</>
);
}

export default Employee; 