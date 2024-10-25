"use client"

import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";
import ItemList from "./item-list";

export default function Page() {
    let itemsArray = items.map( (item) => ({...item}));

    const [itemsList, setItemsList] = useState(itemsArray);

    const addItemsList = (newItem) => {
        setItemsList([...itemsList, newItem])
    }

    return(
        <main className="bg-slate-950">
            <div className="m-4 text-white">
                <NewItem addNewItemFunc={addItemsList}/>
                <ItemList listOfItems={itemsList}/>
            </div>  
        </main>
    );
};