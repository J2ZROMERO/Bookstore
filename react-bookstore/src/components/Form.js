import React from "react"
import './Form.css'
const Form = ()=>{

    return (

        <form className="form">
         <h1 className="addNbook">ADD NEW BOOK</h1>
    <input type='text'></input>
    <select id="cars" name="carlist" form="carform">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
  <button className="addBook">ADD BOOK</button>
        </form>
    )
}

export default Form