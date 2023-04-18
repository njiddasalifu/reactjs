function Car(props){
    return <li>I am a {props.brand}</li>
}

function Garrage(){
    const cars = ['Ford', 'BMW', 'Audi']
    return(
        <>
        <h1>Who lives in my Garrage?</h1>
        <ul>
            {cars.map((car)=><Car brand={car} />)}
        </ul>
        </>
    );
}

export default Garrage;