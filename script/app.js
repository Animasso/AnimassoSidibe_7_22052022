(function(){
    'use strict';


async function fetchData() {
    const response = await fetch("./data/recipes.json")
    const data = await response.json()
    return data.recipes;
}


async function displayCard(recipes) {
    const allRecepies = document.getElementById("recipes-container-id");
    recipes.forEach((recipe) => {

        const recipesModel = recipesFactory(recipe);
        const recipesCardDOM = recipesModel.buildRecipesCard();
        allRecepies.appendChild(recipesCardDOM);
    });
}
async function init() {
    const recipes  = await fetchData();
    displayCard(recipes)
    console.log(recipes);

}

init()
}) ();
