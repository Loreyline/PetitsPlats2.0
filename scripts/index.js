/*global recettesTemplate*/
/*eslint no-undef: "error"*/

async function getRecettes() {
    const recette = await fetch('../data/recipes.json')
        .then((data) => data.json())

    return recette;
}

async function displayData(recettes) {
    const recettesSection = document.querySelector(".recettes-section");

    const tableauRecette = [];

    recettes.recipes.forEach((recipe) => { tableauRecette.push(recipe) });
    const tailleFichier = tableauRecette.length;

    for (let i = 0; i < tailleFichier; i++) {
        const recetteModel = recettesTemplate(recettes.recipes[i]);
        const recetteCardDOM = recetteModel.getRecetteCardDOM();
        recettesSection.appendChild(recetteCardDOM);
    };
}



async function init() {
    // Récupère les datas des recettes
    const recettes = await getRecettes();
    displayData(recettes);

}

init();