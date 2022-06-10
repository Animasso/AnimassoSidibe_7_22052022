/*function dropFactory(data) {
    const {
      id,
      appliance,
      description,
      ingredients,
      name,
      servings,
      time,
      ustensils,
    } = data;
  
    function buildDropCard() {
        let allIngredients= []
        let ing = data.ingredients
        console.log(ing);
    for (let i = 0; i < ing.length; i++) {
        allIngredients.push(ing[i].ingredient);
       console.log(allIngredients);
    }  
    //const ingred= document.querySelectorAll('.ingredients')
   // console.log(ingred);
//creation d'un tableau avec uniquement les ingredients
    let ingredientsList = []
    for (let el in allIngredients) {
        for (let j = 0; j < allIngredients[el].length; j++) {
            let items = allIngredients[el][j].ingredient;
            ingredientsList.push(items);
        };
    }
//elimination des doublons dans la liste
    var uniqueArr = [...new Set(ingredientsList)]
    console.log(uniqueArr);

      const childrenListItems = buildUserChildList(uniqueArr)
      return $elementDomFactory(
          $elementDomFactory("ul",{ class: "menuIngredients menus" }, ...childrenListItems ),
      );
     
    }
    function buildUserChildList(children) {
      return children.map(child => ($elementDomFactory('li', {}, child )));
    
    }
    
   
    return {
      id,
      appliance,
      description,
      ingredients,
      name,
      servings,
      time,
      ustensils,
      buildDropCard,
      buildUserChildList
    };
  }
  */