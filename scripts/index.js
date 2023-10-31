/*global recettesTemplate*/
/*eslint no-undef: "error"*/

async function getRecettes() {
    const recette = await fetch('../data/recipes.json')
        .then((data) => data.json())
    console.log(recette);
    return recette;
}

async function displayData(recettes) {
    const recettesSection = document.querySelector(".recettes-section");

    // recettes.forEach(function (recette) {
    //     const recetteModel = recettesTemplate(recette);
    //     const recetteCardDOM = recetteModel.getRecetteCardDOM();
    //     recettesSection.appendChild(recetteCardDOM);
    // });
    for (i = 0; i < 50; i++) {
        const recetteModel = recettesTemplate(recettes[i]);
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