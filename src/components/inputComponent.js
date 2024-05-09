import { Link } from "react-router-dom"

export const InputComm = ({value=10})=>{
    return(
        <>
            <h1>{value}</h1>
            <input type="text"/>
        </>
    )
}
