import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

function Checkout() {
    const [ { basket } ] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {/* TODO : Need to handle this later. */}
                {/* <img className="checkout__ad"/> */}

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. TO buy one or
                            "Add to "
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List of all checkout products. */}
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    {/* Subtotal Component */}
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout;