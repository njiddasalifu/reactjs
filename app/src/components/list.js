function Car(props){
    return <li>I am a {props.brand}</li>
}

function Garrage(){
    const cars = [
        // a key allow react to keep track of elements
        {id:1, brand: 'Ford'},
        {id:2, brand: 'BMW'},
        {id:3 , brand: 'Audi'}
    ];
    return(
        <>
        <h1>Who lives in my Garrage?</h1>
        <ul>
            {cars.map((car)=><Car key={car.id} brand={car.brand} />)}
        </ul>
        </>
    );
}

export default Garrage;