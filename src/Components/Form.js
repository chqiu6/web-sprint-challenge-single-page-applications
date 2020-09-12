import React,{useState} from "react";
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.
    string()
    .min(2, "Atleast 2 chars")
    .required("Input name"),

    size : yup
    .string()
    .required("Select size"),

    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),

    specialInstruction: yup
    .string()
})

const Form = props => {
    const [pizza, setPizzas] = useState({
        name: "",
        size: "",
        pepperoni: false,
        pineapple: false,
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
    }
    return(
        <form onSubmit = {formSubmit}>
            <label htmlFor = "name">Name</label>
            <input 
            type = "text"
            name =  "name"
            value = {pizza.name}
            onChange = {changeHandler}
            />

            <label htmlFor = "size">Size</label>
            <select id = "size" name = "size" value = {pizza.size} onChange ={changeHandler}>
                <option value ="">Select size</option>
                <option value = "small">Small</option>
            </select>

            <h1>Topping</h1>
            <label htmlFor = "pepperoni">Pepperoni</label>
            <input 
            type = "checkbox"
            name = "pepperoni"
            checked = {pizza.pepperoni}
            onChange = {changeHandler}
            />

            <label htmlFor = "pineapple">Pineapple</label>
            <input 
            type = "checkbox"
            name = "pineapple"
            checked = {pizza.pineapple}
            onChange = {changeHandler}
            />

            <label htmlFor = "specialInstruction">Special Instruction</label>
            <input 
            type = "textarea"
            name = "specialInstruction"
            value = {pizza.specialInstruction}
            onChange = {changeHandler}
            />
            <button>Add New Order</button>
        </form>
    )
}

export default Form;