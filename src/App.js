//import logo from './logo.svg';

import { useState, useEffect } from "react"; 

import './App.css';

import Nav from "./Nav";
import Productlist from "./Productlist.js";
import Basket from "./Basket.js";


function App() {

  const [products, setProducts] = useState ([]);


  // Basket
  const [basket, setBasket] = useState ([]);

  function addToBasket(payload) {

    // Check if item allready exists
    const inBasket = basket.findIndex((item) => item.id === payload.id);

    // If not, then add it
    if (inBasket === -1) {
      
      // Copy array
      const nextPayload = { ...payload };

      // Add amount 1
      nextPayload.amount = 1;

      // Update array
      setBasket((prevState) => [...prevState, nextPayload]);

    } else {

      //it exists, modify amount
      const nextBasket = basket.map((item) => {
        
        if (item.id === payload.id) {
          item.amount += 1;
        }

        return item;
      });

      // Update array
      setBasket(nextBasket);
    }
  }
  

  // Sort 
  const [sortKey, setSortKey] = useState("price");
  
  const copy = [...products];

  copy.sort((a, b) => {

    if (a[sortKey] < b[sortKey]) {
      return -1;
    }

    if (a[sortKey] > b[sortKey]) {
      return 1;
    }

    // a must be equal to b
    return 0;
  });


  // Fetch json data
  useEffect(() => {

    async function getFetch () {

      const data = await fetch("https://kea-alt-del.dk/t7/api/products");

      const allProducts = await data.json();

      setProducts(allProducts)
    };

    getFetch()

  }, []);
  

  return (

    <div className="App">

      <button onClick={() => setSortKey("price")}>Sort the price</button>

      <Nav />

      <Productlist info={products} addToBasket={addToBasket} />

      {/* <button onClick={addMore} >Add more</button> */}

      <Basket basket={basket}/>

    </div>
  );
}

export default App;
