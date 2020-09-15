import React from "react"
import {Link} from "react-router-dom";
import Pizzaimg from "../Image/Pizza.jpg";

const PizzaList = props => {
    console.log("App order props", props);
    return (
        <div className = "pizza-list">
            <Link to = "/PizzaForm">Pizza Form</Link>
            <Link to = "/">Home Link</Link>
            <img src = {Pizzaimg} alt = "pizzapic"></img>
        {
            props.order.map((pizzaOrder, index) =>(
                <div className = "pizza-order" key = {index}> 
                    <h1>Order # {index}</h1>
                    <h2>Name :{pizzaOrder.name}</h2>
                    <h2>Size: {pizzaOrder.size}</h2>
                    <div className = "order-topping">
                    <h1>Toppings</h1>
                    <p>{pizzaOrder.pepperoni }</p>
                    <p>{pizzaOrder.pineapple}</p>
                    <p>{pizzaOrder.bacon }</p>
                    <p>{pizzaOrder.chicken }</p>
                    </div>
                    <h2>Special Instructions: {pizzaOrder.specialInstruction}</h2>
                </div>
            ))
        }
        </div>
    )
}

export default PizzaList;