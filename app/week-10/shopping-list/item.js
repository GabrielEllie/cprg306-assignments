"use client"
import { useState } from "react";

export default function Item({itemObj, onSelect}) {

    const {id, name, quantity, category} = itemObj;

    return( 
        <button className="flex flex-col justify-start items-start p-2 m-2 bg-slate-900 w-80 max-w-sm hover:bg-orange-500"
        ingredient-id={name}
        onClick={onSelect}>
            <h2 className="text-xl font-bold" >{name}</h2>
            <div>
                <p className="text-sm">Buy {quantity} in {category}</p>
            </div>
        </button>
    );
    
}