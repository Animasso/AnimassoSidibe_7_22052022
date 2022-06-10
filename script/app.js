(function(){
    'use strict';


async function fetchData() {
    const response = await fetch("./data/recipes.json")
    const data = await response.json()
    return data.recipes
}

async function displayCard(recipes) {
    const allRecepies = document.getElementById("recipes-container-id");
    const ulCard = document.querySelector('.ingredientsList')
    recipes.forEach((recipe) => {
        const recipesModel = recipesFactory(recipe);
        const recipesCardDOM = recipesModel.buildRecipesCard();
        allRecepies.appendChild(recipesCardDOM);
    });
}

function displayIngredients(recipes) {
//recuperation de la liste des ingredients de chaque recette
    let ingredientsCard = []; 
    for (let i = 0; i < recipes.length; i++) {
        ingredientsCard.push(recipes[i].ingredients);
       // console.log(ingredientsCard);
    }  
const ingred= document.querySelectorAll('.ingredients')
//console.log(ingred);
let ingredientsList = []
    for (let el in ingredientsCard) {
        for (let j = 0; j < ingredientsCard[el].length; j++) {
            let items = ingredientsCard[el][j].ingredient;
            ingredientsList.push(items.toLowerCase());
        };
    }
    //elimination des doublons dans la liste
    var uniqueArr = [...new Set(ingredientsList)]
   // console.log(uniqueArr);
  /*  for (let k = 0; k < uniqueArr.length; k++) {
        const element = array[k];
        console.log(el);
    }
   uniqueArr.forEach(element => {
       ingred.innerHTML =element
   });
   */
  }
 
async function init() {
    const recipes  = await fetchData();
    displayCard(recipes)
    console.log(recipes);
    displayIngredients(recipes)

}

init()
}) ();
