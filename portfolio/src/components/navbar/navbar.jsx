import React from "react";
function Navbar(){
    return(
        <>
        <Routes>
            <Route path="/" element= {<Home />} />
        </Routes>
        </>
    )
}
//exporting the Navbar to enable usage anywhere.
export default Navbar;