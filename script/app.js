(function () {
  "use strict";
  const model = { recipes: [], ingredients: [], appareils: [], ustensiles: [] };
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
    //recuperation de la partie ingredients de chaque recette
    let allIngredients = [];
    for (let i = 0; i < recipes.length; i++) {
      allIngredients.push(recipes[i].ingredients);
    }
    //creation d'un tableau avec uniquement les ingredients
    let ingredientsList = [];
    for (let ingredient in allIngredients) {
      for (let j = 0; j < allIngredients[ingredient].length; j++) {
        let items = allIngredients[ingredient][j].ingredient;
        ingredientsList.push(items.toLowerCase());
      }
    }
    model.ingredients = ingredientsList;
    buildListIngredients(ingredientsList);
  }
  function buildListIngredients(ingredientsList) {
    const ingred = qs(".menuIngredients");
    //elimination des doublons dans la liste
    let uniqueArr = [...new Set(ingredientsList)];
    // placer les ingredients dans chaques li
    for (let k = 0; k < uniqueArr.length; k++) {
      ingred.innerHTML += `<li class="ingredients" data-ingredient = ${uniqueArr[k]}>${uniqueArr[k]}</li>`;
    }
  }
  function searchIngredient() {
    // creation d'un tableau vide qui va recevoir tout les ingredients
    let arrayIng = [];
    const listLi = qsAll(".ingredients");

    listLi.forEach((element) => {
      arrayIng.push(element.dataset.ingredient);
    });
    
const menus = qs('.menus')
    const searchIngredientInput = get("ingredients-search");
    //  ajout d'un listener sur l input
    searchIngredientInput.addEventListener("keyup", (e) => {
      const liList = get("ingredient-list-id");
     
      const searchIngredientValue = e.target.value;

      if (searchIngredientValue.length >= 3) {
        menus.classList.toggle('menus-open')
        const filterIngTag = model.ingredients.filter((ingredient) =>
          ingredient.toLowerCase().includes(searchIngredientValue)
        );
        liList.innerHTML = "";
      
        buildListIngredients(filterIngTag);
        displayTag();
        tagSearch(model.recipes);
      }
    });
  }
  function displayAppareils(recipes) {
    const appareils = qs(".menuAppareils");
    let allAppareils = [];
    for (let i = 0; i < recipes.length; i++) {
      allAppareils.push(recipes[i].appliance.toLowerCase());
    
    }
    let uniqueArrApp = [...new Set(allAppareils)];
 
    for (let k = 0; k < uniqueArrApp.length; k++) {
      appareils.innerHTML += `<li class="appareils" data-appareil = ${uniqueArrApp[k]}> ${uniqueArrApp[k]}</li>`;
    }
    model.appareils = allAppareils;
  }
  function buildListAppareils(allAppareils) {
    const appareils = qs(".menuAppareils");
    let uniqueArrApp = [...new Set(allAppareils)];
  
    for (let k = 0; k < uniqueArrApp.length; k++) {
      appareils.innerHTML += `<li class="appareils" data-appareil = ${uniqueArrApp[k]}> ${uniqueArrApp[k]}</li>`;
    }
  }
  function searchAppareils() {
    const menus = qs('.menus')
    // creation d'un tableau vide qui va recevoir tout les ingredients
    let arrayApp = [];
    const listLiApp = qsAll(".appareils");

    listLiApp.forEach((element) => {
      arrayApp.push(element.dataset.appareil);
    });
    

    const searchAppInput = get("appareils-search");
    //  ajout d'un listener sur l input
    searchAppInput.addEventListener("keyup", (e) => {
      const liListApp = get("appareils-list-id");
     
      const searchappareilValue = e.target.value;
      
      if (searchappareilValue.length >= 3) {
        
        const filterAppTag = model.appareils.filter((appareil) =>
          appareil.toLowerCase().includes(searchappareilValue)
        );
        menus.classList.toggle('menus-open')
        liListApp.innerHTML = "";
        buildListAppareils(filterAppTag);
        displayTag();
        tagSearch(model.recipes);
      }
      // if(searchIngredientValue.length <= 2){
      //   displayIngredients(recipes)
      // }
    });
  }
  function displayUstensiles(recipes) {
    const ustensiles = qs(".menuUstensiles");
    let allUstensiles = [];
    for (let i = 0; i < recipes.length; i++) {
      allUstensiles.push(recipes[i].ustensils);
    }
   
    let ustensilesList = [];
    for (let ustensile in allUstensiles) {
      for (let j = 0; j < allUstensiles[ustensile].length; j++) {
        let item = allUstensiles[ustensile][j];
        ustensilesList.push(item.toLowerCase());
      }
    }

    let uniqueArrUst = [...new Set(ustensilesList)];
  
    for (let k = 0; k < uniqueArrUst.length; k++) {
      ustensiles.innerHTML += `<li class="ustensiles" data-ustensile = ${uniqueArrUst[k]}>${uniqueArrUst[k]}</li>`;
    }
    model.ustensiles = uniqueArrUst;
  }
  function buildListUstensiles(ustensilesList) {
    const ustensiles = qs(".menuUstensiles");
    //elimination des doublons dans la liste

    let uniqueArrUst = [...new Set(ustensilesList)];
 
    for (let k = 0; k < uniqueArrUst.length; k++) {
      ustensiles.innerHTML += `<li class="ustensiles" data-ustensile = ${uniqueArrUst[k]}>${uniqueArrUst[k]}</li>`;
    }
  }
  function searchUstensile() {
    // creation d'un tableau vide qui va recevoir tout les ingredients
    let arrayUst = [];
    const listLiUstensiles = qsAll(".ustensiles");

    listLiUstensiles.forEach((element) => {
      arrayUst.push(element.dataset.ustensile);
    });  
    const searchUstensileInput = get("ustensiles-search");
    //  ajout d'un listener sur l input
    searchUstensileInput.addEventListener("keyup", (e) => {
      const liListUstensiles = get("ustensiles-list-id");
      const searchUstensileValue = e.target.value;
      if (searchUstensileValue.length >= 3) {
        const filterUstTag = model.ustensiles.filter((ustensile) =>
          ustensile.toLowerCase().includes(searchUstensileValue)
        );
        liListUstensiles.innerHTML = "";
        buildListUstensiles(filterUstTag);
        displayTag();
        tagSearch(model.recipes);
      }
    });
  }

  // affichage des tags
  function displayTag() {
    const tags = qs(".tags");
    const liIngredients = qsAll(".ingredients");
    const liAppareils = qsAll(".appareils");
    const liUstensiles = qsAll(".ustensiles");

    liIngredients.forEach((element) => {
      element.addEventListener("click", (e1) => {
        let tagIngredient = document.createElement('div')
        tagIngredient.id ='tag-' + element.dataset.ingredient
        tagIngredient.classList.add('ingred')
        tagIngredient.classList.add('tag')
tags.appendChild(tagIngredient)
        let spanIngredient = document.createElement('span')
        spanIngredient.classList.add('tagSelect')
        tagIngredient.appendChild(spanIngredient)
        spanIngredient.textContent = element.dataset.ingredient
        let xmark = document.createElement('i')
        xmark.classList.add('fa-regular')
        xmark.classList.add('fa-circle-xmark')
        xmark.classList.add('close')
        xmark.setAttribute('data-ingredient', element.dataset.ingredient)
        spanIngredient.appendChild(xmark)
        tags.appendChild(tagIngredient)
        xmark.addEventListener('click',(e)=>{
         document.getElementById('tag-'+  e.target.dataset.ingredient).remove()
        console.log(' e.target.id:', 'tag-'+ e.target.dataset.ingredient)    
        })
      });
    });

    liAppareils.forEach((element) => {
      element.addEventListener("click", () => {
        
        let tagAppareil = document.createElement('div')
        tagAppareil.classList.add('tag')
        tagAppareil.classList.add('app')
        let spanAppareil = document.createElement('span')
        spanAppareil.classList.add('tagSelect')
        tagAppareil.appendChild(spanAppareil)
        spanAppareil.textContent = element.dataset.appareil
        let xmark = document.createElement('i')
        xmark.classList.add('fa-regular')
        xmark.classList.add('fa-circle-xmark')
        xmark.classList.add('close')
        spanAppareil.appendChild(xmark)
        tags.appendChild(tagAppareil)
      });
    });

    liUstensiles.forEach((element) => {
      element.addEventListener("click", () => {
        let tagUstensile = document.createElement('div')
        tagUstensile.classList.add('tag')
        tagUstensile.classList.add('ust')
        let spanUstensile = document.createElement('span')
        spanUstensile.classList.add('tagSelect')
        tagUstensile.appendChild(spanUstensile)
        spanUstensile.textContent = element.dataset.ustensile
        let xmark = document.createElement('i')
        xmark.classList.add('fa-regular')
        xmark.classList.add('fa-circle-xmark')
        xmark.classList.add('close')
        spanUstensile.appendChild(xmark)
        tags.appendChild(tagUstensile)
       
      });
    });
    const closeTag = qsAll('.close')
    console.log('closeTag:', closeTag)
  }

  //Input de recherche principal
  function searchRecipes(recipes) {
    const inputSearch = get("search-input");
    const allRecepies = get("recipes-container-id");

    inputSearch.addEventListener("keyup", (e) => {
      let valueInput = e.target.value;
     

      if (valueInput.length >= 3) {
        console.time("filter");
        allRecepies.innerHTML = "";
        get("ingredient-list-id").innerHTML = "";
        get("appareils-list-id").innerHTML = "";
        get("ustensiles-list-id").innerHTML = "";
        const recipesFilter = recipes.filter(
          (recipe) =>
            recipe.name.toLowerCase().includes(valueInput) ||
            recipe.description.toLowerCase().includes(valueInput) ||
            recipe.ingredients.some((el) => el.ingredient.includes(valueInput))
        );
       
        render(recipesFilter);
        if (recipesFilter.length === 0) {
          allRecepies.innerHTML = `Aucune recette ne correspond à votre critère... Vous pouvez chercher  « tarte aux pommes », « poisson », etc.`;
        }
      }
      if (valueInput.length <= 2) {
        allRecepies.innerHTML = "";
        get("ingredient-list-id").innerHTML = "";
        get("appareils-list-id").innerHTML = "";
        get("ustensiles-list-id").innerHTML = "";
        render(recipes);
      }
      console.timeEnd("filter");
    });
  }

  // Filtrage par tags
  function tagSearch(recipes) {
    const allRecepies = get("recipes-container-id");
    const liIngredients = qsAll(".ingredients");
    const liAppareils = qsAll(".appareils");
   
    const liUstensiles = qsAll(".ustensiles");

    liIngredients.forEach((element) => {
      element.addEventListener("click", () => {
        allRecepies.innerHTML = "";
        get("ingredient-list-id").innerHTML = "";
        get("appareils-list-id").innerHTML = "";
        get("ustensiles-list-id").innerHTML = "";
        const tagfilterIngredient = recipes.filter(
          (recipe) =>
            recipe.name.toLowerCase().includes(element.dataset.ingredient) ||
            recipe.description
              .toLowerCase()
              .includes(element.dataset.ingredient) ||
            recipe.ingredients.some((el) =>
              el.ingredient.includes(element.dataset.ingredient)
            )
        );
       
        if (tagfilterIngredient.length === 0) {
          allRecepies.innerHTML = "pas de recette trouver";
        }
        render(tagfilterIngredient);
      });
    });

    liAppareils.forEach((element) => {
      element.addEventListener("click", () => {
        allRecepies.innerHTML = "";
        get("ingredient-list-id").innerHTML = "";
        get("appareils-list-id").innerHTML = "";
        get("ustensiles-list-id").innerHTML = "";
        const tagfilterAppareil = recipes.filter(
          (recipe) =>
            recipe.name.toLowerCase().includes(element.dataset.ingredient) ||
            recipe.description.toLowerCase().includes(element.dataset.appareil)
        );
        if (tagfilterAppareil.length === 0) {
          allRecepies.innerHTML = "RIEN TROUVER";
        }
       
        render(tagfilterAppareil);
      });
    });

    liUstensiles.forEach((element) => {
      element.addEventListener("click", () => {
        allRecepies.innerHTML = "";
        get("ingredient-list-id").innerHTML = "";
        get("appareils-list-id").innerHTML = "";
        get("ustensiles-list-id").innerHTML = "";
        const tagfilterUstensiles = recipes.filter((recipe) =>
          recipe.description.toLowerCase().includes(element.dataset.ustensile)
        );
        if (tagfilterUstensiles.length === 0) {
          allRecepies.innerHTML = "RIEN TROUVER";
        }
        
        render(tagfilterUstensiles);
      });
    });
  }
  function render(recipes) {
    displayCard(recipes);
    displayIngredients(recipes);
    displayAppareils(recipes);
    displayUstensiles(recipes);
    tagSearch(recipes);
    searchIngredient();
    searchAppareils();
    searchUstensile();
  }
  async function init() {
    const recipes = await fetchData();
    model.recipes = recipes;
    render(model.recipes);
    displayTag();
    searchRecipes(recipes);
    tagSearch(recipes);
  }

  init();
})();
