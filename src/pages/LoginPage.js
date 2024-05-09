import { Link } from "react-router-dom"
import { InputComm } from "../components/inputComponent"
import { useState } from "react";

export const LoginPage = ()=>{
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        email: '',
      });
    
      const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Burada form değerlerini bir API'ye gönderebilir veya konsolda gösterebilirsiniz.
        console.log(formValues);
      };
    
      return (
        <div className="row">
            <form onSubmit={handleSubmit} className="card col-lg-3 d-flex py-4 px-2 mx-auto mt-5">
            <h4>Kaydol</h4>
            <hr/>
            <label className="mt-2">Ad</label>
            <input
                type="text"
                name="firstName"
                className="form-control"
                value={formValues.firstName}
                onChange={handleChange}
                placeholder="Ad"
            />
        
            <label className="mt-2">Soyad</label>
            <input
                type="text"
                name="lastName"
                className="form-control"
                value={formValues.lastName}
                onChange={handleChange}
                placeholder="Soyad"
            />

            <label className="mt-2">Telefon</label>
            <input
                type="text"
                name="phone"
                className="form-control"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="Telefon"
                maxlength="11"
            />
            
            <label className="mt-2">Email</label>
            <input 
                type="email"
                name="email"
                className="form-control"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Mail Adresi"
            />
        
            <button type="submit" className="btn btn-primary mt-3">Kaydet</button>
            </form>
        </div>
      );
    // return(
    //     <>
    //         <h1>Mainpage</h1>
    //         <Link to="/">Ana Sayfa</Link>
    //         <InputComm value="deneme"/>
    //     </>
    // )
    
}