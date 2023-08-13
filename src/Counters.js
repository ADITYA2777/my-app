
import { useState } from "react";
function Counter(){
//  const [x,setX]= useState(0);
//  const [y,setY]= useState(0);
   const [tods,setTools]= useState(['tod 1','tods 2'])
    return(
        <ul>

            {tods.map((tod)=><li>{tod}</li>)}
            <button onClick={()=>setTools([...tods,'another tods'])}>Click</button>
        {/* Count:{x}
        <button onClick={()=> setX(x+1)}>INC</button>
        <button onClick={()=> setX(x-1)}>DEC</button>

        <br/>
        Count:{y}
        <button onClick={()=> setY(x+1)}>INC</button>
        <button onClick={()=> setY(x-1)}>DEC</button> */}
        </ul>
    )
}

export default Counter;