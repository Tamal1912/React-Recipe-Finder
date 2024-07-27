import React, { useEffect } from "react";
import Error from "./Error";

const Mealcards = ({ mealData }) => {
  console.log(mealData);

 
  return (
    <div className="items relative lg:left-1  rounded-xl border-2 border-white lg:h-auto ">
      {!mealData
        ? " ": mealData.map((meals) => {
            return (
              <div className="cards relative flex items-center justify-evenly bg-gray-900 lists  border-none border-white  p-4 text-white rounded-xl ">
                <img
                  key={meals.idMeal}
                  className="images shadow-slate-800-sm px-4 py-2"
                  src={meals.strMealThumb}
                  alt="this is a image"
                />
                <br />
                <h2 key={meals.strMeal} className="relative bottom-4 font-serif text-xl underline text-cyan-300">Dish Name : {meals.strMeal} </h2>
                <button className="w-24 h-12 rounded-lg text-sky-600 bg-white border-none font-mono">{meals.strCategory}</button>
                <button className="w-24 h-12  rounded-lg text-white bg-red-500 border-none font-mono shadow-lg shadow-red-500/60">

                  <a href={`${meals.strYoutube}`}>Youtube</a>
                </button>
                <button className=" bg-cyan-500 shadow-lg shadow-cyan-500/50 px-3 py-3 rounded-md ">Buy</button>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcards;
