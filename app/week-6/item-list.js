"use client"
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
    const btnStyle = "text-white rounded p-1 m-2 active:bg-yellow-500 ";
    let itemsList = items.map( (item) => ({...item}));

    // state for checking what to sort the list by
    const [sortBy, setSortBy] = useState("name");

    // switches sortBy variable
    const sortByName = () => setSortBy("name");
    const sortByCategory = () => setSortBy("category");

    //sorts the current list depending on the sortBy variable
    itemsList.sort( (a, b) => {
        if (isNaN(parseInt(a[sortBy]))) {
            
            let varA = a[sortBy];
            let varB = b[sortBy];

            if (varA < varB ) {
                return -1;
            }
            if (varB < varA ) {
                return 1;
            }
        }
    });

    return(
        <div>
            <div className="inline-block">
                <label>Sort by:</label>
                <buttton className={`bg-orange-500 ${btnStyle}`} onClick={sortByName}>Sort Name</buttton>
                <buttton className={`bg-orange-600 ${btnStyle}`} onClick={sortByCategory}>Sort Category</buttton>
            </div>
            
            {itemsList.map((obj) => (
                <Item itemObj={obj} key={obj.id}/>
            ))}
        </div>
    );

};