import { Link } from "react-router-dom"
import { InputComm } from "../components/inputComponent"

export const  VideoPage = ()=>{
    return(
        <>
            <h1>aaa</h1>
            <Link to="/">Ana Sayfa</Link>
            <Link to="/">Derslerim</Link>
            <InputComm value="deneme"/>
        </>
    )
}