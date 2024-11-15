"use client"
import { useEffect, useState } from "react";
export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    // gets meals from api
    async function fetchMealIdeas(ingredient){
        try {
            const ingredient_name = ingredient.replace(',', '').slice(0, ingredient.length - 2);
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient_name}`
            );
            if( !response.ok ) console.log(response.statusText);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return [''];
        }
    }

    async function loadMealIdeas() {
        let mealList;
        if (ingredient == "" || ingredient == null) {
            mealList = [];
        } else {
            mealList = await fetchMealIdeas(ingredient);
        }
        if ((mealList.meals != null || mealList.meals != '') && (mealList != null || mealList.meals != '') ) {
            setMeals(mealList.meals);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div>
            <h3 className="text-2xl text-white">Meal Ideas for {ingredient} </h3>
            <ul>
                {meals == '' || meals == null ? 
                (<p> None </p> 
                ) : (
                meals.map((meal) => (
                    <div className="flex flex-col justify-center border-2 border-cyan-800 max-w-60 p-2 m-2 text-center">
                        <li key={meal.idMeal}>
                            <img src={meal.strMealThumb} 
                            className="inline-block w-40"></img>
                            <p>{meal.strMeal}</p>
                        </li>
                    </div>
                    
                )))
                }
                
            </ul>   
        </div>
    );
};