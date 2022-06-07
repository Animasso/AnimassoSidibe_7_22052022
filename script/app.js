
async function fetchData() {
    const data = await fetch("./data/recipes.json")
    .then(response => response.json())
    console.log(data);
    const recipes= data.recipes
    console.log(recipes);
}
fetchData()

async function displayCard(recipes) {
    const allRecepies = document.querySelector(".all-recepices");
    recipes.forEach((recipe) => {
        const recipesModel = recipesFactory(recipe);
        const recipesCardDOM = recipesModel.buildRecipesCard();
        allRecepies.appendChild(recipesCardDOM);
    });
}
async function init() {
    const recipes  = await fetchData();
    displayCard(recipes)
}

init()