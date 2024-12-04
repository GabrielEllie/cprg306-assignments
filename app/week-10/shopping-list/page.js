"use client"

import NewItem from "./new-item";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service.js";
import { useUserAuth } from "../_utils/auth-context";
import { isAssetError } from "next/dist/client/route-loader";

export default function Page() {
    let itemsArray = [];
    const [itemsList, setItemsList] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();

    async function loadItems() {
        try {
            if (user) {
                setItemsList(getItems(user.id));    
            } else {
                setItemsList([]);
            }
            itemsArray = itemsList;
        } catch (error) {
            setItemsList([]);
            console.error("Couldn't get items");
        }
    }
    
    const addItemsList = (newItem) => {
        // if(itemsList == [] || itemsList == null) {
        //     setItemsList(newItem)  
        // } else {
        //     setItemsList([...itemsList, newItem])
        // }
        addItem(user.uid, newItem);
    }

    const handleItemSelect = (event) => {
        console.log('rawr');
        setSelectedItemName(event.target.getAttribute("ingredient-id"));
    }

    useEffect(() => {
        loadItems()
    }, [user]);
    
    if (!user) {
        return(
            <main>
                <p>You must be logged in to submit a new item.</p>
            </main>
        );
    }

    return(
        <main className="bg-slate-950">
            <div className="flex flex-row m-4 text-white">
                <div className="flex flex-col mr-4">
                    <NewItem addNewItemFunc={addItemsList}/>
                    <ItemList listOfItems={itemsArray} onItemsSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>  
        </main>
    );
};