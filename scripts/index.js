/*global recettesTemplate templatesTags*/
/*eslint no-undef: "error"*/

async function getRecettes() {
    const recette = await fetch('../data/recipes.json')
        .then((data) => data.json());
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
        liIngredient.addEventListener('click', function () {
            inputIngredient.value = liIngredient.textContent;
        });
        ulIngredients.appendChild(liIngredient);
    }

    for (let i = 0; i < newTabAppareils.length; i++) {
        const liappareil = document.createElement("li");
        liappareil.textContent = newTabAppareils[i];
        liappareil.addEventListener('click', function () {
            inputAppareil.value = liappareil.textContent;
        });
        ulAppareils.appendChild(liappareil);
    }

    for (let i = 0; i < newTabUstensiles.length; i++) {
        const liUstensile = document.createElement("li");
        liUstensile.textContent = newTabUstensiles[i];
        liUstensile.addEventListener('click', function () {
            inputUtensil.value = liUstensile.textContent;
        });
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
    const resetngredient = document.querySelector("#resetIngredient");
    const resetAppareil = document.querySelector("#resetAppareil");
    const resetUstensil = document.querySelector("#resetUstensile")
    let inputIngredient = document.querySelector("#texteIngredients");
    let inputAppareil = document.querySelector("#texteAppareils");
    let inputUtensil = document.querySelector("#texteUstensile");

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

    resetngredient.addEventListener('click', function () {
        inputIngredient.value = "";
    });

    resetAppareil.addEventListener('click', function () {
        inputAppareil.value = "";
    });

    resetUstensil.addEventListener('click', function () {
        inputUtensil.value = "";
    });

    inputIngredient.addEventListener('input', function () {
        resetngredient.style.display = "flex";
        let li = divListIngredients.getElementsByTagName("li");
        let filter = inputIngredient.value.toUpperCase();
        for (i = 0; i < newTabIngredients.length; i++) {
            txtValue = li[i].textContent || li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });

    inputAppareil.addEventListener('input', function () {
        resetAppareil.style.display = "flex";
        let li = divListAppareils.getElementsByTagName("li");
        let filter = inputAppareil.value.toUpperCase();
        for (i = 0; i < newTabAppareils.length; i++) {
            txtValue = li[i].textContent || li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });

    inputUtensil.addEventListener('input', function () {
        resetUstensil.style.display = "flex";
        let li = divListUstensiles.getElementsByTagName("li");
        let filter = inputUtensil.value.toUpperCase();
        for (i = 0; i < newTabUstensiles.length; i++) {
            txtValue = li[i].textContent || li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });
}

function choixRecettes(recettes) {

    let tabFiltreIngredients = [];
    let tabfiltreAppareils = [];
    let tabFiltreUstensiles = [];
    const tableauRecette = [];
    let inputIngredient = document.querySelector("#texteIngredients");
    let inputAppareil = document.querySelector("#texteAppareils");
    let inputUtensil = document.querySelector("#texteUstensile");

    recettes.recipes.forEach((recipe) => { tableauRecette.push(recipe) });

    inputIngredient.addEventListener('input', function () {

        tableauRecette.filter(function (recette) {
            recette.ingredients.forEach((ingredient) => {
                if (ingredient === inputIngredient.value) {
                    tabFiltreIngredients.push(recette);
                    console.log(ingredient);
                    return tabFiltreIngredients;
                }
            });
        });
    });

    inputAppareil.addEventListener('input', function () {

        tableauRecette.filter(function (recette) {
            for (let i = 0; i < tableauRecette.length; i++) {
                txtValue = recette.appliance;
                if (txtValue === inputAppareil.value) {
                    tabfiltreAppareils.push(recette);
                    return tabfiltreAppareils;
                };
            }
        });
        console.log(tabfiltreAppareils.length);
    });

    inputUtensil.addEventListener('input', function () {

        tableauRecette.filter(function (recette) {
            recette.ustensils.forEach((ustensil) => {
                if (ustensil === inputUtensil.value) {
                    tabFiltreUstensiles.push(recette);
                    return tabFiltreUstensiles;
                };
            });
        });
    });

    if (tabFiltreIngredients.length === 0 && tabFiltreUstensiles.length === 0 && tabfiltreAppareils.length === 0) {
        return tableauRecette;
    }
}

function displayData(tableauDeRecettes) {

    const recettesSection = document.querySelector(".recettes-section");
    const divNbRecettes = document.querySelector(".nbRecettes");
    let nbRecettes = 0;

    console.log(tableauDeRecettes.length);

    for (let i = 0; i < tableauDeRecettes.length; i++) {
        const recetteModel = recettesTemplate(tableauDeRecettes[i]);
        const recetteCardDOM = recetteModel.getRecetteCardDOM();
        recettesSection.appendChild(recetteCardDOM);
        nbRecettes++;
    }

    divNbRecettes.textContent = nbRecettes + " recettes";
}

async function init() {
    // Récupère les datas des recettes
    const recettes = await getRecettes();
    const tableauDeRecettes = choixRecettes(recettes);
    displayData(tableauDeRecettes);
    displayListes(recettes);
}

init();