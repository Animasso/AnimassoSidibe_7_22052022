(function () {
  "use strict";

  async function fetchData() {
    const response = await fetch("./data/recipes.json");
    const data = await response.json();
    return data.recipes;
  }

  async function displayCard(recipes) {
    const allRecepies = get("recipes-container-id");
    recipes.forEach((recipe) => {
      const recipesModel = recipesFactory(recipe);
      const recipesCardDOM = recipesModel.buildRecipesCard();
      allRecepies.appendChild(recipesCardDOM);
    });
  }

  function displayIngredients(recipes) {
    console.log(recipes);
    //recuperation de la partie ingredients de chaque recette
    let allIngredients = [];
    for (let i = 0; i < recipes.length; i++) {
      allIngredients.push(recipes[i].ingredients);
    }
    console.log(allIngredients);
    const ingred = qs(".menuIngredients");
    console.log(ingred);
    //creation d'un tableau avec uniquement les ingredients
    let ingredientsList = [];
    for (let ingredient in allIngredients) {
      for (let j = 0; j < allIngredients[ingredient].length; j++) {
        let items = allIngredients[ingredient][j].ingredient;
        ingredientsList.push(items.toLowerCase());
      }
    }
    console.log(ingredientsList);
    //elimination des doublons dans la liste
    let uniqueArr = [...new Set(ingredientsList)];
    // console.log(uniqueArr);
    // placer les ingredients dans chaques li
    for (let k = 0; k < uniqueArr.length; k++) {
      ingred.innerHTML += `<li class="ingredients">${uniqueArr[k]}</li>`;
    }
  }
  function displayAppareils(recipes) {
    const appareils = qs(".menuAppareils");
    let allAppareils = [];
    for (let i = 0; i < recipes.length; i++) {
      allAppareils.push(recipes[i].appliance);
      //console.log(allAppareils);
    }
    let uniqueArrApp = [...new Set(allAppareils)];
    //console.log(uniqueArrApp);
    for (let k = 0; k < uniqueArrApp.length; k++) {
      appareils.innerHTML += `<li class="appareils">${uniqueArrApp[k]}</li>`;
    }
  }
  function displayUstensiles(recipes) {
    const ustensiles = qs(".menuUstensiles");
    let allUstensiles = [];
    for (let i = 0; i < recipes.length; i++) {
      allUstensiles.push(recipes[i].ustensils);
    }
    console.log(allUstensiles);
    let ustensilesList = [];
    for (let ustensile in allUstensiles) {
      for (let j = 0; j < allUstensiles[ustensile].length; j++) {
        let item = allUstensiles[ustensile][j];
        ustensilesList.push(item.toLowerCase());
        console.log(ustensile);
        console.log([ustensile]);
        console.log(j);
      }
    }
    console.log(ustensilesList);
    let uniqueArrUst = [...new Set(ustensilesList)];
    console.log(uniqueArrUst);
    for (let k = 0; k < uniqueArrUst.length; k++) {
      ustensiles.innerHTML += `<li class="ustensiles">${uniqueArrUst[k]}</li>`;
    }
  }

  async function init() {
    const recipes = await fetchData();
    displayCard(recipes);
    displayIngredients(recipes);
    displayAppareils(recipes);
    displayUstensiles(recipes);
  }

  init();
})();
