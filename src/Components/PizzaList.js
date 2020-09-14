import React from "react"
import {Link} from "react-router-dom";

const PizzaList = props => {
    console.log("App order props", props);
    return (
        <div className = "pizza-list">
            <Link to = "/PizzaForm">Pizza Form</Link>
            <Link to = "/">Home Link</Link>
        {
            props.order.map((pizzaOrder, index) =>(
                <div className = "pizza-order" key = {index}> 
                    <h1>{pizzaOrder.name}</h1>
                    <h2>{pizzaOrder.size}</h2>
                    <h2>{pizzaOrder.pepperoni}</h2>
                    <h2>{pizzaOrder.pineapple}</h2>
                    <h2>{pizzaOrder.specialInstruction}</h2>
                </div>
            ))
        }
        </div>
    )
}

export default PizzaList;