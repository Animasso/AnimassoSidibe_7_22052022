const dropdowns = document.querySelectorAll('.dropdown')
console.log(dropdowns);
dropdowns.forEach(dropdown=>{
    const select = dropdown.querySelector('.select')
    console.log(select);
    const caret = dropdown.querySelector('.caret')
    console.log(caret);
    const menus =dropdown.querySelector('.menus')
    console.log(menus);
    const options =dropdown.querySelectorAll('.menus li')
    console.log(options);
    const selected = dropdown.querySelector('.selected')
   //const inputIngredients = dropdown.querySelector('.input-ingredients')
    select.addEventListener('click',()=>{
        caret.classList.toggle('caret-rotate')
        menus.classList.toggle('menus-open')
        //inputIngredients.classList.toggle('input-ingredients-toggle')
    })
    options.forEach(option=>{
        option.addEventListener('click',()=>{
            selected.innerText = option.innerText
            caret.classList.remove('caret-rotate')
            menus.classList.remove('menus-open')
        })

    })
    
})