
async function fetchData() {
    // récuperation des données des photographes
    const data = await fetch("./data/recipes.json")
    .then(response => response.json())
    
    
    
    console.log(data);
   
   // console.log(data.recipes[0].servings);
   /* const recipes = data
    let titles= []
   for (let titles of Object.keys(name)) {
     titles = obj[name];
   }
   console.log(titles);*/
}
fetchData()
