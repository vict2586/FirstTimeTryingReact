export default function MyBasket( {basket} ) {

  /* 
  const cart = [
    { name: "Shirt", amount: 1, id: 4 },
    { name: "Pants", amount: 3, id: 5 },
    { name: "Socks", amount: 2, id: 6 },
  ];
 */
    return (
  
      <section className="MyBasket">
  
        <p>You have {basket.length} item{basket.length === 1 ? "s" : ""} in your basket, totalling 0 DKK</p>

        <ul>
          {basket.map((item) => (
            <BasketItem 
            name={item.productdisplayname}
            amount={item.amount}
            key={item.id} />
          ))}
      </ul>
  
      </section>
    );
}

function BasketItem(props) {
  return (
    <li>
      {props.amount} {props.name}
    </li>
  );
}