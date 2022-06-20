(function () {
  "use strict";
    const model = {recipes:[]}
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
   // console.log(allIngredients);
    const ingred = qs(".menuIngredients");
    //console.log(ingred);
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
    //  console.log(uniqueArr);
    // placer les ingredients dans chaques li
    for (let k = 0; k < uniqueArr.length; k++) {
        ingred.innerHTML += `<li class="ingredients" data-ingredient = ${uniqueArr[k]}>${uniqueArr[k]}</li>`;
      }
    const tagIngredient =get('ingredients-search')
    console.log(tagIngredient);
    tagIngredient.addEventListener('keydown',(e)=>{
        const tagIngredientValue = e.target.value
        console.log(tagIngredientValue);
        const filterIngTag =  uniqueArr.filter((ingredient)=>(ingredient.toLowerCase().includes(tagIngredientValue)))
        console.log(uniqueArr);
      console.log(filterIngTag)
      displayCard(filterIngTag)
    })
   
  
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
      appareils.innerHTML += `<li class="appareils" data-appareil = ${uniqueArrApp[k]}> ${uniqueArrApp[k]}</li>`;
    }
  }
  function displayUstensiles(recipes) {
    const ustensiles = qs(".menuUstensiles");
    let allUstensiles = [];
    for (let i = 0; i < recipes.length; i++) {
      allUstensiles.push(recipes[i].ustensils);
    }
   // console.log(allUstensiles);
    let ustensilesList = [];
    for (let ustensile in allUstensiles) {
      for (let j = 0; j < allUstensiles[ustensile].length; j++) {
        let item = allUstensiles[ustensile][j];
        ustensilesList.push(item.toLowerCase());
       
      }
    }
   // console.log(ustensilesList);
    let uniqueArrUst = [...new Set(ustensilesList)];
   // console.log(uniqueArrUst);
    for (let k = 0; k < uniqueArrUst.length; k++) {
      ustensiles.innerHTML += `<li class="ustensiles" data-ustensile = ${uniqueArrUst[k]}>${uniqueArrUst[k]}</li>`;
    }
  }



function displayTag(){
    const tags =qs('.tags')
   const liIngredients =qsAll('.ingredients')
   const liAppareils = qsAll('.appareils')
   const liUstensiles = qsAll('.ustensiles')
  

liIngredients.forEach(element => {
    element.addEventListener('click',(e)=>{
        tags.innerHTML += `<div class="tag ingred"><span class="tagSelect"
          >${element.dataset.ingredient}<i class="fa-regular fa-circle-xmark close"></i
        ></span></div>`
        
        
    })
});

liAppareils.forEach(element => {
    element.addEventListener('click',(e)=>{
        tags.innerHTML += `<div class="tag app"><span class="tagSelect"
          >${element.dataset.appareil}<i class="fa-regular fa-circle-xmark" class="close"></i
        ></span></div>`
    }) 
});

liUstensiles.forEach(element => {
    element.addEventListener('click',(e)=>{
        tags.innerHTML += `<div class="tag ust"><span class="tagSelect"
          >${element.dataset.ustensile}<i class="fa-regular fa-circle-xmark" class="close"></i
        ></span></div>`
    })
   
});

}


function searchRecipes(recipes){
    const inputSearch =get('search-input')
    const allRecepies = get("recipes-container-id");
  
    console.log(recipes);
    console.log(inputSearch);
   
    inputSearch.addEventListener('keydown',(e)=>{
        
        let valueInput = e.target.value
        console.log(valueInput);
       const recipesArray =[]
    
        if(valueInput.length >= 3){
            console.time('loop')
        allRecepies.innerHTML =""
        for (let index = 0; index < recipes.length; index++) {
            const element = recipes[index];
            console.log(element);
            if((element.name.toLowerCase().includes(valueInput) || element.description.toLowerCase().includes(valueInput) ||
            element.ingredients.some((el) => el.ingredient.includes(valueInput)))){
                recipesArray.push(element)
                console.log(recipesArray);  
            }
        }
        displayCard(recipesArray)
        } 
        console.timeEnd('loop')
    });
  }

function tagSearch(recipes){
   
}
function render(recipes){
    displayCard(recipes);
    displayIngredients(recipes);
    displayAppareils(recipes);
    displayUstensiles(recipes);
}
  async function init() {
    const recipes = await fetchData();
    model.recipes =recipes
    render(model.recipes)
    displayTag()
    //deleteTag()
    searchRecipes(recipes)
    tagSearch(recipes)
  }

  init();
})();
