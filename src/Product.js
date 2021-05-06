import { useState } from "react";

export default function Product(props) {

  //console.log(props);

  // Amount
  const [amount, setAmount] = useState(0);

  function add() {
    setAmount((prevState) => { return prevState + 1});
  }

  function min() {
    setAmount((prevState) => { return prevState - 1});
  }

  // Other stuff
  return (
    
    <article className={props.soldout ? "Product soldout" : "Product"}>
    
        <h2>{props.productdisplayname}</h2>
    
        <h3>{props.price} DKK</h3>

        <p>We have {props.soldout} in stock</p>

        <div className="Buttons">

          <button disabled={amount === 0} onClick={min}>-</button>
          <p>{amount}</p>
          <button onClick={add}>+</button>

        </div>

        <button onClick={() => props.addToBasket(props)}>Add to basket</button>
  
    </article>
  
  );
}