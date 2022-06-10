(function(){
    'use strict';


async function fetchData() {
    const response = await fetch("./data/recipes.json")
    const data = await response.json()
    return data.recipes
}

async function displayCard(recipes) {
    const allRecepies = document.getElementById("recipes-container-id");
    recipes.forEach((recipe) => {
        const recipesModel = recipesFactory(recipe);
        const recipesCardDOM = recipesModel.buildRecipesCard();
        allRecepies.appendChild(recipesCardDOM);
    });
}

function displayIngredients(recipes) {
    
   
//recuperation de la partie ingredients de chaque recette
    let allIngredients = []; 
    for (let i = 0; i < recipes.length; i++) {
        allIngredients.push(recipes[i].ingredients);
       console.log(allIngredients);
    }  
    const ingred= document.querySelector('.menuIngredients')
   console.log(ingred);
//creation d'un tableau avec uniquement les ingredients
    let ingredientsList = []
    for (let el in allIngredients) {
        for (let j = 0; j < allIngredients[el].length; j++) {
            let items = allIngredients[el][j].ingredient;
            ingredientsList.push(items.toLowerCase());
        };
    }
//elimination des doublons dans la liste
    var uniqueArr = [...new Set(ingredientsList)]
    console.log(uniqueArr);
// placer les ingredients dans chaques li    
    for (let k = 0; k < uniqueArr.length; k++) {
        ingred.innerHTML += `<li class="ingredients">${uniqueArr[k]}</li>`;

    }

  }

  
   
  
 
async function init() {
    const recipes  = await fetchData();
    displayCard(recipes)
    displayIngredients(recipes)

}

init()
}) ();
