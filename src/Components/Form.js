import React,{useState} from "react";
import axios from "axios";
import * as yup from "yup";
import {Link} from "react-router-dom";

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, "Atleast 2 chars")
    .required("Input name"),

    size : yup
    .string(),
    

    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),

    specialInstruction: yup
    .string()
})

const Form = props => {
    const [pizza, setPizzas] = useState({
        name: "",
        size: "Small",
        pepperoni: false,
        pineapple: false,
        bacon: false,
        chicken: false,
        specialInstruction: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        // pepperoni: "",
        // pineapple: "",
    });

    const validate = e => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
        .reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
            setErrors({...errors, [e.target.name] : ""});
        })
        .catch(err => {
            setErrors({...errors, [e.target.name] : err.errors[0]});
         });
    };
   

    const changeHandler = e => {
        e.persist();
        console.log(e.target.value);
        console.log("pizza data:", pizza);
        validate(e);
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setPizzas({...pizza, [e.target.name]: value});
    }

    const formSubmit = e => {
        e.preventDefault();
        console.log("pizza form data: ", pizza);
        axios
        .post("https://reqres.in/api/users", pizza)
        .then(res => {
            props.addNewOrder(res.data)
        })
        .catch(err => {
            console.log("axios error data :", err);
        })
    }
    return(
        <div className = "form-list">
        <Link to = "/">Home </Link>

        <form onSubmit = {formSubmit}>
            <label htmlFor = "name">Name</label>
            <input 
            type = "text"
            name =  "name"
            value = {pizza.name}
            onChange = {changeHandler}
            data-cy = "name"
            />
            {errors.name.length > 0 ? (
            <p className = "error">{errors.name}</p>)
             : null}

            <label htmlFor = "size">Size</label>
            <select  name = "size" value = {pizza.size} onChange ={changeHandler} data-cy = "size" >
                <option value = "Small">Small</option>
                <option value = "Medium">Medium</option>
                <option value = "Large">Large</option>
            </select>
            {errors.name.length > 0 ? (
            <p className = "error">{errors.size}</p>)
             : null}
             

            <h1>Topping</h1>
            <label htmlFor = "pepperoni">Pepperoni</label>
            <input 
            type = "checkbox"
            name = "pepperoni"
            checked = {pizza.pepperoni}
            // value = "pepperoni"
            onChange = {changeHandler}
            data-cy = "pepperoni"
            />

            <label htmlFor = "pineapple">Pineapple</label>
            <input 
            type = "checkbox"
            name = "pineapple"
            checked = {pizza.pineapple}
            // value = "pineapple"
            onChange = {changeHandler}
            data-cy = "pineapple"
            />

            <label htmlFor = "bacon">Bacon</label>
            <input 
            type = "checkbox"
            name = "bacon"
            checked = {pizza.bacon}
            // value = "bacon"
            onChange = {changeHandler}
            data-cy = "bacon"
            />

            <label htmlFor = "chicken">Chicken</label>
            <input 
            type = "checkbox"
            name = "chicken"
            checked = {pizza.chicken}
            //value = "chicken"
            onChange = {changeHandler}
            data-cy = "chicken"
            />

            <label htmlFor = "specialInstruction">Special Instruction</label>
            <textarea 
            type = "textarea"
            name = "specialInstruction"
            value = {pizza.specialInstruction}
            onChange = {changeHandler}
            data-cy = "specialInstructions"
            />
            <button data-cy = "button" type = "button">Add New Order</button>
        </form>
        </div>
    )
}

export default Form;