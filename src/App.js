import React,{useState} from "react";
import Form from "./Components/Form";
import PizzaList from "./Components/PizzaList";
import {Route} from "react-router-dom";



const App = () => {
  const [order, setOrder] = useState([]);

  const addNewOrder = formPizzaOrder => {
    setOrder([...order, formPizzaOrder]);
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path = "/PizzaForm">
      <Form addNewOrder = {addNewOrder}/>
      </Route>
      <Route exact path = "/">
      <PizzaList order = {order}/>
      </Route>
    </>
  );
};
export default App;
