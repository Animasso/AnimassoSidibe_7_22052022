function recipesFactory(data) {
    const { id, appliance,description,ingredients,name,servings,time,ustensils  } = data;
  
    function buildRecipesCard() {
        return $elementDomFactory('div', { class: 'recette'},
       $elementDomFactory('div', { class: 'recette-image' }),
       $elementDomFactory('div', { class: 'title-time' },
        $elementDomFactory('p', { class: 'title' }, name),
        $elementDomFactory('p', { class: 'minute' },time)),
        $elementDomFactory('div', { class: 'ingredients-instructions' },
        $elementDomFactory('div', { class: 'ingredients' },
        $elementDomFactory('li', { class: 'ing' },ingredients,)),
        $elementDomFactory('div', { class: 'instructions' },
        $elementDomFactory('p', { class: 'instruction-lign' },description,))
        ))

    }
  
    return { id, appliance,description,ingredients,name,servings,time,ustensils, buildRecipesCard }
  }

  /*
   <div class="recette">
        <div class="recette-img"></div>
        <div class="recette-card">
          <div class="title-time">
            <p class="title">Limonade de Coco</p>
            <p class="minute"><i class="fa-regular fa-clock"></i>10min</p>
          </div>
          <div class="ingredients-instructions">
            <div class="ingredients">
              <li>lait de coco 400ml</li>
              <li>jus de citron</li>
              <li>creme de coco</li>
              <li>sucre 20g</li>
              <li>Glacon 2</li>
            </div>
            <div class="instructions">
              <p class="instruction-lign">
                Mettre les cube de glaces à votre gout dans le blender ajouter
                le lait la creme de cocole citron et le sucre
              </p>
            </div>
          </div>
        </div>
    </div>
  
  
  
  */