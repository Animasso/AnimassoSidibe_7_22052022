const dropdowns = document.querySelectorAll('.dropdown')
const ingredientsInput =document.querySelector('#ingredients-search')
const appareilsInput =document.querySelector('#appareils-search')
const ustensilesInput =document.querySelector('#ustensiles-search')

console.log(ingredientsInput);
console.log(appareilsInput);
console.log(ustensilesInput);
console.log(dropdowns);
dropdowns.forEach(dropdown=>{
    
    const chevronIngredient= dropdown.querySelector('.chevron-ingredients')
    console.log(chevronIngredient);
    const chevronAppareils= dropdown.querySelector('.chevron-appareils')
    console.log(chevronAppareils);
    const chevronUstensiles= dropdown.querySelector('.chevron-ustensiles')
    console.log(chevronUstensiles);
    const menus =dropdown.querySelector('.menus')
    console.log(menus);
    const options =dropdown.querySelectorAll('.menus li')
    console.log(options);
    
    

   chevronIngredient.addEventListener('click',()=>{
        if ( chevronIngredient.classList.toggle('chevron-rotate')) {
            ingredientsInput.placeholder = `Rechercher un ingrédient`;
            ingredientsInput.style.opacity= 0.5;
            dropdown.style.width ='667px'
            menus.classList.toggle('menus-open')
        }else{
            ingredientsInput.placeholder = `Ingrédient`;
            ingredientsInput.style.opacity= 1;
            dropdown.style.width ='170px'
            menus.classList.remove('menus-open')
        }
    })
    chevronAppareils.addEventListener('click',()=>{
        if ( chevronAppareils.classList.toggle('chevron-rotate')) {
            appareilsInput.placeholder = `Rechercher un appareil`;
            appareilsInput.style.opacity= 0.5;
            dropdown.style.width ='667px'
            menus.classList.toggle('menus-open')
        }else{
            appareilsInput.placeholder = `Appareil`;
            appareilsInput.style.opacity= 1;
            dropdown.style.width ='170px'
            menus.classList.remove('menus-open')
        }
    })

    chevronUstensiles.addEventListener('click',()=>{
        if ( chevronUstensiles.classList.toggle('chevron-rotate')) {
            ustensilesInput.placeholder = `Rechercher un appareil`;
            ustensilesInput.style.opacity= 0.5;
            dropdown.style.width ='667px'
            menus.classList.toggle('menus-open')
        }else{
            ustensilesInput.placeholder = `Appareil`;
            ustensilesInput.style.opacity= 1;
            dropdown.style.width ='170px'
            menus.classList.remove('menus-open')
        }
    })
})