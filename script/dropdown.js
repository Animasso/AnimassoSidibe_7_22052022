
const ingredientsInput = qs('#ingredients-search')
const appareilsInput = qs('#appareils-search')
const ustensilesInput = qs('#ustensiles-search')

const ingDrop =get('ingredients')
const appDrop =get('appareils')
const ustDrop =get('ustensiles')
   
const menuIngredients =qs('.menuIngredients')
const menuAppareils =qs('.menuAppareils')
const menuUstenciles =qs('.menuUstensiles')
    
const chevronIngredient= get('chevron-ingredients')
const chevronAppareils= get('chevron-appareils')
const chevronUstensiles= get('chevron-ustensiles')

    

chevronIngredient.addEventListener('click',(e)=>{
    if (chevronIngredient.classList.toggle('chevron-rotate') ) {
        ingredientsInput.placeholder = `Rechercher un ingrédient`;
        ingredientsInput.style.opacity= 0.5;
        ingDrop.style.width ='667px'
        menuIngredients.classList.toggle('menus-open')
    }else if (e.currentTarget===chevronIngredient ){
        ingredientsInput.placeholder = `Ingrédients`;
        ingredientsInput.style.opacity= 1;
        ingDrop.style.width ='170px'
        menuIngredients.classList.remove('menus-open')
    }
})
chevronAppareils.addEventListener('click',(e)=>{
    if (chevronAppareils.classList.toggle('chevron-rotate') ) {
        appareilsInput.placeholder = `Rechercher un appareil`;
        appareilsInput.style.opacity= 0.5;
        appDrop.style.width ='667px'
        menuAppareils.classList.toggle('menus-open')
    }else if (e.currentTarget=== chevronAppareils ){
        appareilsInput.placeholder = `Appareils`;
        appareilsInput.style.opacity= 1;
        appDrop.style.width ='170px'
        menuAppareils.classList.remove('menus-open')
    }
})
chevronUstensiles.addEventListener('click',(e)=>{
    if (chevronUstensiles.classList.toggle('chevron-rotate') ) {
        ustensilesInput.placeholder = `Rechercher un ustensile`;
        ustensilesInput.style.opacity= 0.5;
        ustDrop.style.width ='667px'
        menuUstenciles.classList.toggle('menus-open')
    }else if (e.currentTarget=== chevronUstensiles ){
        ustensilesInput.placeholder = `Ustensiles`;
        ustensilesInput.style.opacity= 1;
        ustDrop.style.width ='170px'
        menuUstenciles.classList.remove('menus-open')
    }
})
