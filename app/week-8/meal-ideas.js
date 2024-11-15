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
            <h3 className="text-2xl text-white">Meal Ideas</h3>
            <ul>
                {meals == '' || meals == null ? 
                (<p> no meals for {ingredient} </p> 
                ) : (
                meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <p>{meal.strMeal}</p>
                    </li>
                )))
                }
                
            </ul>   
        </div>
    );
};