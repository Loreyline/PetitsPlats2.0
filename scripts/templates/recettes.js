/*exported recetteTemplate */

function recettesTemplate(data) {
    const { id, image, name, servings, ingredients, ingredient, quantity, unit, time, description, appliance, ustensils } = data;
    const illustration = `./assets/images/${data.image}`;

    function getRecetteCardDOM() {
        //création des éléments du DOM
        const article = document.createElement('article');
        const imageDiv = document.createElement('div');
        const img = document.createElement('img');
        const titre = document.createElement('h3');
        const temps = document.createElement('h5');
        const recette = document.createElement('h4');
        const sectionRecette = document.createElement('section');
        const paragraphe = document.createElement('p');
        const sectionIngredients = document.createElement('section');
        const divIngredients = document.createElement('div');
        const ingredients = document.createElement('h4');

        // for (let i = 0; i < ingredients.length; i++) {

        //     const divIngredient = document.createElement('div');
        //     const nameIngredient = document.createElement('h4');
        //     const quantite = document.createElement('p');

        //     nameIngredient.setAttribute("class", "nomIngredient");
        //     quantite.setAttribute("class", "quantiteIngredient");
        //     divIngredient.setAttribute("class", "ingredientRecette");

        //     nameIngredient.textContent = ingredient;
        //     quantite.textContent = quantity + unit;

        //     divIngredient.appendChild(nameIngredient);
        //     divIngredient.appendChild(quantite);

        //     divIngredients.appendChild(divIngredient);
        // };


        //insertion des attributs des éléments
        img.setAttribute("src", illustration);
        img.setAttribute("alt", name);
        img.setAttribute("class", "illustration");
        recette.setAttribute("class", "titreSection");
        temps.setAttribute("class", "timer");
        paragraphe.setAttribute("class", "description");
        ingredients.setAttribute("class", "titreSection");
        imageDiv.setAttribute("class", "enteteRecette");
        divIngredients.setAttribute("class", "ingredients");

        //insertion des contenus textuels
        titre.textContent = name;
        recette.textContent = "recette";
        temps.textContent = time + "min";
        paragraphe.textContent = description;
        ingredients.textContent = "ingrédients";

        //structuration de la carte recette
        article.appendChild(imageDiv);
        article.appendChild(titre);
        article.appendChild(sectionRecette);
        article.appendChild(sectionIngredients);
        imageDiv.appendChild(img);
        imageDiv.appendChild(temps);
        sectionRecette.appendChild(recette);
        sectionRecette.appendChild(paragraphe);
        sectionIngredients.appendChild(ingredients);
        sectionIngredients.appendChild(divIngredients);


        return (article);
    }

    return { id, image, name, servings, ingredients, ingredient, quantity, unit, time, description, appliance, ustensils, getRecetteCardDOM }
}