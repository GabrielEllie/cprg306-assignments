"use client"

import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
    let itemsArray = items.map( (item) => ({...item}));

    const [itemsList, setItemsList] = useState(itemsArray);
    const [selectedItemName, setSelectedItemName] = useState("");

    const addItemsList = (newItem) => {
        setItemsList([...itemsList, newItem])
    }

    const handleItemSelect = (event) => {
        console.log('rawr');
        setSelectedItemName(event.target.getAttribute("ingredient-id"));
    }
    
    return(
        <main className="bg-slate-950">
            <div className="flex flex-row m-4 text-white">
                <div className="flex flex-col mr-4">
                    <NewItem addNewItemFunc={addItemsList}/>
                    <ItemList listOfItems={itemsList} onItemsSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>  
        </main>
    );
};