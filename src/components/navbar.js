import React from 'react'
import { Link } from "react-router-dom"
import "../style/navbar.css"

export default function Navbar() {
  return (
    <div className='nav-body'>
    <div>
        <Link to="/LoginPage">Giriş</Link>
        <Link to="/EducationPage">Eğitimleirm</Link>

    </div>
    <div>
        <Link to="/BasketPage">Sepetim</Link>
    </div>  
    </div>
  )
}
