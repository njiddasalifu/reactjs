import { useState } from "react";
function FavouriteColor(){
    const [color, setColor] = useState("");
    return (
        <>
        My fav color is {color}!
        <button
        type="button" onClick={()=>setColor("Blue")}>
            color</button>
        </>
    )
    }
export default FavouriteColor;