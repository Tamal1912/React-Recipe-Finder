import React, { useEffect } from "react";
import View from './View';

const Mealcards = ({ mealData }) => {

 
  return (
    <div className="items relative lg:left-1  rounded-xl border-none  lg:h-auto ">
      {!mealData
        ? " ": mealData.map((meals) => {
            return (
              <div key={meals.idMeal} className="cards relative flex items-center justify-evenly lists  border-none border-white  p-4 text-white rounded-xl ">
                <img
                  key={meals.idMeal}
                  className="images shadow-2xl shadow-amber-700/50  "
                  src={meals.strMealThumb}
                  alt="this is a image"
                />
                <br />
                <h2 key={meals.strMeal} className=" font-mono  uppercase text-3xl underline text-white">{meals.strMeal} </h2>
                <button className="w-24 h-12 rounded-lg text-orange-500 bg-white border-none font-mono hover:scale-125 hover:transition-all duration-150">{meals.strArea}</button>
                <button className=" viewBtn rounded-lg text-white bg-red-500 border-none font-mono shadow-lg shadow-red-500/60  hover:scale-125 hover:transition-all duration-150" >

                  <a href={`${meals.strYoutube}`}>Youtube</a>
                </button>
                <View meals={meals} />
                
              </div>
            );
          })}
    </div>
  );
};

export default Mealcards;
