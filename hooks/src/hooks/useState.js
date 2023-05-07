import { useState } from "react";
function FavouriteColor(){
    const [color, setColor] = useState("Blue");
    return <h2>My fav color is {color}!</h2>
}

export default FavouriteColor;