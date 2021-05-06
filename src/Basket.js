import MyBasket from "./MyBasket";
import ChekOutForm from "./ChekOutForm.js";

export default function Basket(props) {
    return (
  
      <div className="Basket">
  
        <MyBasket basket={props.basket}/>
  
        {props.basket.length > 0 ? <ChekOutForm /> : <p>But more stuff</p>}
  
      </div>
    );
}