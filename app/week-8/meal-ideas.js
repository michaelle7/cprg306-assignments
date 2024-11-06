// week-8/meal-ideas.js
"use client";
import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };

  useEffect(() => {
    if (ingredient) {
      const loadMealIdeas = async () => {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
      };

      loadMealIdeas();
    }
  }, [ingredient]); //got ai help, was too confusing

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li 
            key={meal.idMeal}
            className='p-2 cursor-pointer hover:bg-orange-700 bg-gray-900 border border-gray-300 rounded'>
                {meal.strMeal}</li>))
        ) : (
          <li>No meal ideas</li>
        )}
      </ul>
    </div>
  );
}
