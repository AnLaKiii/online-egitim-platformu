import { Link } from "react-router-dom"
import { InputComm } from "../components/inputComponent"

export const  EducationPage = ()=>{
    return(
        <>
            <h1>Eğitimlerim</h1>
            <Link to="/">Ana Sayfa</Link>
            <InputComm value="deneme"/>
        </>
    )
}