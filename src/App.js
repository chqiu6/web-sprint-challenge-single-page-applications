import React,{useState} from "react";
import Form from "./Components/Form";
import PizzaList from "./Components/PizzaList";

const App = () => {
  const [order, setOrder] = useState([]);

  const addNewOrder = formPizzaOrder => {
    setOrder([...order, formPizzaOrder]);
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <Form addNewOrder = {addNewOrder}/>
      <PizzaList order = {order}/>
    </>
  );
};
export default App;
