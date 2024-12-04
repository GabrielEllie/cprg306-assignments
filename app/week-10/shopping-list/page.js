"use client"

import NewItem from "./new-item";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service.js";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const [itemsList, setItemsList] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();

    async function loadItems() {
        try {
            if (user) {
                const items = await getItems(user.uid);
                setItemsList(items);   
            }     
        } catch (error) {
            setItemsList([]);
            console.error("Couldn't get items");
        }
    }
    
    const addItemsList = (newItem) => {
        addItem(user.uid, newItem);
    }

    const handleItemSelect = (event) => {
        setSelectedItemName(event.target.getAttribute("ingredient-id"));
    }

    useEffect(() => {
        loadItems()
    }, [user, itemsList]);
    
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
                    <ItemList listOfItems={itemsList} onItemsSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>  
        </main>
    );
};