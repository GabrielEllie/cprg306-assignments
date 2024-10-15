"use client"

import { useState } from "react";


export default function NewItem(realItemName, realQuantity, realCategory) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

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

    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event);

        let item = {
            itemName: name,
            itemQuantity: quantity,
            itemCategory: category
        }

        alert(`
            Name: ${item.itemName} 
            Quantity: ${item.itemQuantity} 
            Category: ${item.itemCategory}
        `);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return(
        <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <div className="mb-2">
                <input type="text"
                placeHolder="item name"
                onChange={handleNameChange}
                className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg"
                value={name} />
            </div>
            <div className="flex justify-between">
                <div className="p-2 mt-1 mb-1 rounded-md bg-white text-white w-36">
                    <div className="flex justify-between">
                        <p className="text-black">{quantity}</p>
                        <div className="flex">
                            <button 
                            type="button"
                            className={btnStyle}
                            onClick={decrementQuantity} 
                            disabled={decrementDisable}
                            >-</button>
                            <button
                            type="button"
                            className={`${btnStyle} ml-1`}
                            onClick={incrementQuantity} 
                            disabled={incrementDisable}
                            >+</button>
                        </div>
                    </div>
                </div>
                <select className="ml-1 border-2 border-gray-300 p-2 rounded-lg" 
                        onChange={handleCategoryChange}
                            value={category}>
                            <option disabled value="">-- Select a Category --</option>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozenFoods">Frozen Foods</option>
                            <option value="cannedGoods">Canned Goods</option>
                            <option value="dryGoods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
            </div>
            <div className="w-full">
                <button type="submit"
                className="px-2 py-1 mt-3 rounded text-white bg-blue-600 hover:bg-blue-400 active:bg-blue-900 w-full" 
                onClick={handleSubmit}>Submit Registration</button>
            </div>
        </form>
    );
};