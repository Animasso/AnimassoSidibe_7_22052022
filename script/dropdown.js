
const ingredientsInput =document.querySelector('#ingredients-search')
const appareilsInput =document.querySelector('#appareils-search')
const ustensilesInput =document.querySelector('#ustensiles-search')

const ingDrop =document.getElementById('ingredients')
const appDrop =document.getElementById('appareils')
const ustDrop =document.getElementById('ustensiles')
   
const menuIngredients =document.querySelector('.menuIngredients')
const menuAppareils =document.querySelector('.menuAppareils')
const menuUstenciles =document.querySelector('.menuUstensiles')
    
const chevronIngredient= document.getElementById('chevron-ingredients')
const chevronAppareils= document.getElementById('chevron-appareils')
const chevronUstensiles= document.getElementById('chevron-ustensiles')

    

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
        ustensilesInput.placeholder = `ustensiles`;
        ustensilesInput.style.opacity= 1;
        ustDrop.style.width ='170px'
        menuUstenciles.classList.remove('menus-open')
    }
})
