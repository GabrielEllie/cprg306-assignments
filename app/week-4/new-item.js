"use client"

import { useState } from "react";

export default function NewItem(itemName, realQuantity, cateegory) {
    const [quantity, setQuantity] = useState(1);
    const btnStyle = "w-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400";

    const incrementQuantity = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        };
    };
    
    const decrementQuantity = () => {
        if (quantity > 1 ) {
            setQuantity(quantity - 1);
        };
    };
    
    let incrementDisable = false;
    let decrementDisable = false;

    if (quantity <= 1) {
        decrementDisable = true;
    }

    if (quantity >= 20) {
        incrementDisable = true;
    }

    return(
        <div className="flex justify-center w-full">
            <div className="p-2 m-4 bg-white text-white w-36">
                <div className="flex justify-between">
                    <p className="text-black">{quantity}</p>
                    <div className="flex">
                        <button 
                        className={btnStyle}
                        onClick={decrementQuantity} 
                        disabled={decrementDisable}
                        >-</button>
                        <button
                        className={`${btnStyle} ml-1`}
                        onClick={incrementQuantity} 
                        disabled={incrementDisable}
                        >+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};