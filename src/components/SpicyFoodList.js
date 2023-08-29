import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [option, setOption]= useState (ALL)

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const updatedFoods = [...foods, newFood]
    setFoods([...foods ,newFood]);
    console.log(newFood);
  }
function updateFoodHeat (id){
  const heat = foods.map (food => {
    return food.id === id? {...food, heatLevel: food.heatLevel +1}:food

  }
    )

    setFoods ([...heat])
}
function handleSelection (event){
  let value= event.target.value
  setOption(value)
}
const filteredFoods = foods.filter (food => option === 'ALL'? true: food.cuisine === option )


  const foodList = filteredFoods.map((food) => (

    <li key={food.id} onClick={() => updateFoodHeat(food.id)}> {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select onChange={(e)=>updateFoodHeat()} >
        <option value= "ALL"> ALL</option>
        <option value = "American"> American</option>
        <option value="Asian"  > Asian</option>
        <option value ="Mexican"> Mexican</option>
        <option value="Thai"> Thai</option>
        <option value="Vietnamese"> Vietnamese</option>

        </select>
    </div>
  );
}

export default SpicyFoodList;
