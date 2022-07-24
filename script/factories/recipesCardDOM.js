function recipesFactory(data) {
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

  function buildRecipesCard() {
    let ingredientsCard = [];
    let dataIng = data.ingredients;
    //  console.log(dataIng);
    for (let i = 0; i < dataIng.length; i++) {
      if (dataIng[i].unit) {
        ingredientsCard.push(
          dataIng[i].ingredient +
            ": " +
            dataIng[i].quantity +
            " " +
            dataIng[i].unit
        );
        // console.log(ingredientsCard);
      } else {
        ingredientsCard.push(
          dataIng[i].ingredient + " " + (dataIng[i].quantity || "")
        );
      }
    }

    const childrenListItems = buildUserChildList(ingredientsCard);
    return $elementDomFactory(
      "div",
      { class: "recette" },
      $elementDomFactory("div", { class: "recette-img" }),
      $elementDomFactory(
        "div",
        { class: "recette-card" },
        $elementDomFactory(
          "div",
          { class: "title-time" },
          $elementDomFactory("p", { class: "title" }, name),
          $elementDomFactory(
            "p",
            { class: "minute" },
            $elementDomFactory("i", { class: "fa-regular fa-clock" }),
            time.toString() + " " + `min`
          )
        ),
        $elementDomFactory(
          "div",
          { class: "ingredients-instructions" },
          $elementDomFactory(
            "ul",
            { class: "ingredientsList" },
            ...childrenListItems
          ),
          $elementDomFactory(
            "div",
            { class: "instructions" },
            $elementDomFactory("p", { class: "instruction-lign" }, description)
          )
        )
      )
    );
  }
  function buildUserChildList(children) {
    return children.map((child) => $elementDomFactory("li", {}, child));
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
    buildRecipesCard,
    buildUserChildList,
  };
}
