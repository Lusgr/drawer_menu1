import { memo } from "react";

const Button = ({func, style}) =>{

    console.log(style);
 
    return(
        <>
            <div>
                <button onClick={func} style={style}>Next</button>
            </div>
        </>
    )
}

export default memo(Button)