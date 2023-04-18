function Car(props){
    return <li> {props.brand}</li>
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
        <h2>Who lives in my Garrage?</h2>
        <ul>
            {cars.map((car)=><Car key={car.id} brand={car.brand} />)}
        </ul>
        </>
    );
}

export default Garrage;