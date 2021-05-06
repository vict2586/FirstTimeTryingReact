import Product from "./Product.js";

export default function Productlist(props) {

  return (
  
    <main className="Productlist">
  
    <ul>
      {props.info.map((item) => (
        <Product addToBasket={props.addToBasket} {...item} key={item.id}/>
      ))}
    </ul>
  
    </main>
  );
}
