/*global recettesTemplate templatesTags*/
/*eslint no-undef: "error"*/

async function getRecettes() {
    const recette = await fetch('../data/recipes.json')
        .then((data) => data.json())

    return recette;
}


function displayListes(recettes) {
    const divListIngredients = document.querySelector("#liteIngredients");
    const divListAppareils = document.querySelector("#listeAppareils");
    const divListUstensiles = document.querySelector("#listeUstensiles");
    const ulIngredients = document.createElement("ul");
    const ulAppareils = document.createElement("ul");
    const ulUstensiles = document.createElement("ul");

    //récupération du nombre de recettes
    //pousser les recettes du fichier dans un tableau pour récupérer la longueur du tableau
    const tableauRecette = [];
    recettes.recipes.forEach((recipe) => { tableauRecette.push(recipe) });

    //récupération des éléments "tag" des recettes
    //création des tableaux de tag
    const tableauIngredients = [];
    const tableauAppareils = [];
    const tableauUstensiles = [];
    //pousser les éléments dans les tableaux
    for (let i = 0; i < tableauRecette.length; i++) {
        recettes.recipes[i].ingredients.forEach((ingredient) => {
            tableauIngredients.push(ingredient.ingredient);
        });
        tableauAppareils.push(recettes.recipes[i].appliance);
        recettes.recipes[i].ustensils.forEach((ustensil) => {
            tableauUstensiles.push(ustensil);
        });
    }

    //élimination des doublons
    let newTabIngredients = [...new Set(tableauIngredients)];
    let newTabAppareils = [...new Set(tableauAppareils)];
    let newTabUstensiles = [...new Set(tableauUstensiles)];

    //affichage des tags
    for (let i = 0; i < newTabIngredients.length; i++) {
        const liIngredient = document.createElement("li");
        liIngredient.textContent = newTabIngredients[i];
        ulIngredients.appendChild(liIngredient);
    }

    for (let i = 0; i < newTabAppareils.length; i++) {
        const liappareil = document.createElement("li");
        liappareil.textContent = newTabAppareils[i];
        ulAppareils.appendChild(liappareil);
    }

    for (let i = 0; i < newTabUstensiles.length; i++) {
        const liUstensile = document.createElement("li");
        liUstensile.textContent = newTabUstensiles[i];
        ulUstensiles.appendChild(liUstensile);
    }

    divListIngredients.appendChild(ulIngredients);
    divListAppareils.appendChild(ulAppareils);
    divListUstensiles.appendChild(ulUstensiles);

    const rechercheIngredient = document.querySelector("#rechercheIngredient");
    const closeIngredient = document.querySelector("#closeIngredient");
    const formIngredient = document.querySelector("#formIngredient");
    const rechercheAppareil = document.querySelector("#rechercheAppareil");
    const closeAppareil = document.querySelector("#closeAppareil");
    const formAppareil = document.querySelector("#formAppareil");
    const rechercheUstensil = document.querySelector("#rechercheUstensile");
    const closeUstensil = document.querySelector("#closeUstensile");
    const formUstensil = document.querySelector("#formUstensile");

    rechercheIngredient.addEventListener('click', function () {
        divListIngredients.style.display = "flex";
        rechercheIngredient.style.display = "none";
        closeIngredient.style.display = "flex";
        formIngredient.style.display = "flex";
    });

    closeIngredient.addEventListener('click', function () {
        divListIngredients.style.display = "none";
        rechercheIngredient.style.display = "flex";
        closeIngredient.style.display = "none";
        formIngredient.style.display = "none";
    });

    rechercheAppareil.addEventListener('click', function () {
        divListAppareils.style.display = "flex";
        rechercheAppareil.style.display = "none";
        closeAppareil.style.display = "flex";
        formAppareil.style.display = "flex";
    });

    closeAppareil.addEventListener('click', function () {
        divListAppareils.style.display = "none";
        rechercheAppareil.style.display = "flex";
        closeAppareil.style.display = "none";
        formAppareil.style.display = "none";
    });

    rechercheUstensil.addEventListener('click', function () {
        divListUstensiles.style.display = "flex";
        rechercheUstensil.style.display = "none";
        closeUstensil.style.display = "flex";
        formUstensil.style.display = "flex";
    });

    closeUstensil.addEventListener('click', function () {
        divListUstensiles.style.display = "none";
        rechercheUstensil.style.display = "flex";
        closeUstensil.style.display = "none";
        formUstensil.style.display = "none";
    });
}

function displayData(recettes) {
    const recettesSection = document.querySelector(".recettes-section");
    const divNbRecettes = document.querySelector(".nbRecettes");
    let inputIngredient = document.querySelector("#texteIngredients");
    let inputAppareil = document.querySelector("#texteAppareils");
    let inputUtensil = document.querySelector("#texteUstensile");
    const resetngredient = document.querySelector("#resetIngredient");
    const resetAppareil = document.querySelector("#resetAppareil");
    const resetUstensil = document.querySelector("#resetUstensile");
    const submitAppareil = document.querySelector("#submitAppareil");
    const submiUstensil = document.querySelector("#submitUstensile");
    const tableauRecette = [];
    let rechercheEnCour = 0;
    let nbRecettes = 0;

    recettes.recipes.forEach((recipe) => { tableauRecette.push(recipe) });

    inputIngredient.addEventListener('input', function (e) {
        e.preventDefault();
        resetngredient.style.display = "flex";
        rechercheEnCour = 1;
        console.log(inputIngredient.value)

        const filtreIngredients = tableauRecette.filter(function (ingredients) {
            ingredients === inputIngredient.value;
            console.log(ingredients);
        });
        console.log(filtreIngredients.length)
        for (let i = 0; i < filtreIngredients.length; i++) {
            const recetteModel = recettesTemplate(filtreIngredients[i]);
            const recetteCardDOM = recetteModel.getRecetteCardDOM();
            recettesSection.appendChild(recetteCardDOM);
            nbRecettes++;
        }
        console.log(nbRecettes, rechercheEnCour)
    });
    inputAppareil.addEventListener('input', function (e) {
        resetAppareil.style.display = "flex";
    });
    inputUtensil.addEventListener('input', function (e) {
        resetUstensil.style.display = "flex";
    });

    submitAppareil.addEventListener('click', function (e) {
        e.preventDefault();
        rechercheEnCour = 1;
        for (let i = 0; i < tableauRecette.length; i++) {
            if (recettes.recipes[i].appliance == inputAppareil.value) {
                const recetteModel = recettesTemplate(recettes.recipes[i]);
                const recetteCardDOM = recetteModel.getRecetteCardDOM();
                recettesSection.appendChild(recetteCardDOM);
                nbRecettes++;
            }
        }
    })

    submiUstensil.addEventListener('click', function (e) {
        e.preventDefault();
        rechercheEnCour = 1;
        for (let i = 0; i < tableauRecette.length; i++) {
            if (recettes.recipes[i].ustensils.ustensil == inputUtensil.value) {
                const recetteModel = recettesTemplate(recettes.recipes[i]);
                const recetteCardDOM = recetteModel.getRecetteCardDOM();
                recettesSection.appendChild(recetteCardDOM);
                nbRecettes++;
            }
        }
    });

    if (rechercheEnCour == 0) {
        for (let i = 0; i < tableauRecette.length; i++) {
            const recetteModel = recettesTemplate(recettes.recipes[i]);
            const recetteCardDOM = recetteModel.getRecetteCardDOM();
            recettesSection.appendChild(recetteCardDOM);
            nbRecettes++;
        }
    }


    resetngredient.addEventListener('click', function () {
        inputIngredient.innerHTML = "";
    });

    resetAppareil.addEventListener('click', function () {
        inputAppareil.innerHTML = "";
    });

    resetUstensil.addEventListener('click', function () {
        inputUtensil.innerHTML = "";
    });

    divNbRecettes.textContent = nbRecettes + " recettes";
};

async function init() {
    // Récupère les datas des recettes
    const recettes = await getRecettes();
    displayData(recettes);
    displayListes(recettes);
}

init();