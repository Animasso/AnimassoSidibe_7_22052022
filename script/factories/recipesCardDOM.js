function recipesFactory(data) {
    const { id, name,  } = data;
  
    function buildRecipesCard() {
      return $elementDomFactory('div', { class: 'card', id: `process-${id}`, },
        $elementDomFactory('h5', { class: 'card__title' }, name),
        $elementDomFactory('p', { class: 'card__desc' }, email));
    }
  
    return { id, name, buildRecipesCard }
  }