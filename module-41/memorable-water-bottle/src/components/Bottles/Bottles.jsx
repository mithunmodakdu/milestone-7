import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilities/localStorage";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    // load cart from local storage
    useEffect(() =>{
        if(bottles.length > 0){
            const storedCart = getStoredCart();
        console.log(storedCart);
        }
    },[bottles])

    const handleAddToCart = bottle =>{
       
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h2>Bottles available: {bottles.length}</h2>
            <h3>Cart: {cart.length}</h3>
          <div className="bottle-container">
               {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
          </div>
            
        </div>
    );
};

export default Bottles;