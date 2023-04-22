function LoginForm(){
    return(
        <>
        <p><h2 color="blue">Register with us!</h2></p>
         Name: <input type="text" placeholder="name" /> <br /> <br />
        Email: <input type="email" placeholder="e-mail" /> <br /> <br />
        Password: <input type="password"  placeholder="password" maxLength={10} min={6}/><br /><br />
        <button>login</button> <button>Register</button>
        </>
    );
}
export default LoginForm;