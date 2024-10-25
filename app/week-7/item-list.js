"use client"
import { useState } from "react";
import Item from "./item";

export default function ItemList({listOfItems}) {
    const btnStyle = "text-white rounded p-1 m-2 active:bg-yellow-500 ";

    // state for checking what to sort the list by
    const [sortBy, setSortBy] = useState("name");

    // switches sortBy variable
    const sortByName = () => setSortBy("name");
    const sortByCategory = () => setSortBy("category");

    //sorts the current list depending on the sortBy variable
    listOfItems.sort( (a, b) => {
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
                <button className={`bg-orange-500 ${btnStyle}`} onClick={sortByName}>Sort Name</button>
                <button className={`bg-orange-600 ${btnStyle}`} onClick={sortByCategory}>Sort Category</button>
            </div>
            
            {listOfItems.map((obj) => (
                <Item itemObj={obj} key={obj.id}/>
            ))}
        </div>
    );

};