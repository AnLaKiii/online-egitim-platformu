import { Link } from "react-router-dom"
import { InputComm } from "../components/inputComponent"

export const  BasketPage = ()=>{
    return(
        <>
            <h1>Sepetim</h1>
            <Link to="/">Ana Sayfa</Link>
            <Link to="/">Derslerim</Link>
            <InputComm value="deneme"/>
        </>
    )
}