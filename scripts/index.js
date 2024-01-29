/*global recettesTemplate templatesTags*/
/*eslint no-undef: "error"*/

async function getRecettes() {
    const recette = await fetch('../data/recipes.json')
        .then((data) => data.json());
    return recette;
}

function tagIngredient(recettes) {
    const divListIngredients = document.querySelector("#liteIngredients");
    const ulIngredients = document.createElement("ul");
    const rechercheIngredient = document.querySelector("#rechercheIngredient");
    const closeIngredient = document.querySelector("#closeIngredient");
    const formIngredient = document.querySelector("#formIngredient");
    const resetngredient = document.querySelector("#resetIngredient");
    let inputIngredient = document.querySelector("#texteIngredients");
    let tabFiltre;

    //récupération du nombre de recettes
    //pousser les recettes du fichier dans un tableau pour récupérer la longueur du tableau
    const tableauRecette = [];
    recettes.recipes.forEach((recipe) => { tableauRecette.push(recipe) });

    //récupération des éléments "tag" des recettes
    //création des tableaux de tag
    const tableauIngredients = [];

    //pousser les éléments dans les tableaux
    for (let i = 0; i < tableauRecette.length; i++) {
        recettes.recipes[i].ingredients.forEach((ingredient) => {
            tableauIngredients.push(ingredient.ingredient);
        });
    }
    //élimination des doublons
    let newTabIngredients = [...new Set(tableauIngredients)];

    //affichage des tags
    for (let i = 0; i < newTabIngredients.length; i++) {
        const aIngredient = document.createElement("a");
        const liIngredient = document.createElement("li");
        const aDivChoix = document.querySelector("#choixIngredient");
        const aResetChoixIngredient = document.querySelector("#resetChoixIngredient");
        const aTextChoixIngrdient = document.querySelector("#textChoixIngredient");
        aIngredient.appendChild(liIngredient);
        liIngredient.textContent = newTabIngredients[i];
        aIngredient.addEventListener('click', function () {
            aDivChoix.style.display = "flex";
            aResetChoixIngredient.style.display = "flex";
            aTextChoixIngrdient.textContent = liIngredient.textContent;
            divListIngredients.style.display = "none";
            formIngredient.style.display = "none";
            tabFiltre = [];
            tableauRecette.filter(function (recette) {
                recette.ingredients.forEach((element) => {
                    if (element.ingredient.toUpperCase() === liIngredient.textContent.toUpperCase()) {
                        tabFiltre.push(recette);
                        displayData(tabFiltre);
                    }
                });
            });

        });
        aResetChoixIngredient.addEventListener("click", function (e) {
            e.preventDefault();
            aDivChoix.style.display = "none";
            aTextChoixIngrdient.textContent = "";
            divListIngredients.style.display = "flex";
            formIngredient.style.display = "flex";
            displayData(tableauRecette);
        });

        ulIngredients.appendChild(aIngredient);
    }

    divListIngredients.appendChild(ulIngredients);

    //mise en forme du tag ingredient
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


    //filtre du tag
    inputIngredient.addEventListener('input', function () {
        resetngredient.style.display = "flex";
        resetngredient.addEventListener('click', function () {
            inputIngredient.value = "";
            for (i = 0; i < newTabIngredients.length; i++) {
                li[i].style.display = "";
            }
            displayData(tableauRecette);
        });
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
}

function tagAppareil(recettes) {
    const divListAppareils = document.querySelector("#listeAppareils");
    const ulAppareils = document.createElement("ul");
    const rechercheAppareil = document.querySelector("#rechercheAppareil");
    const closeAppareil = document.querySelector("#closeAppareil");
    const formAppareil = document.querySelector("#formAppareil");
    const resetAppareil = document.querySelector("#resetAppareil");
    let inputAppareil = document.querySelector("#texteAppareils");
    let tabFiltre;

    //récupération du nombre de recettes
    //pousser les recettes du fichier dans un tableau pour récupérer la longueur du tableau
    const tableauRecette = [];
    recettes.recipes.forEach((recipe) => { tableauRecette.push(recipe) });

    //récupération des éléments "tag" des recettes
    //création des tableaux de tag
    const tableauAppareils = [];
    //pousser les éléments dans les tableaux
    for (let i = 0; i < tableauRecette.length; i++) {
        tableauAppareils.push(recettes.recipes[i].appliance);
    }
    //élimination des doublons
    let newTabAppareils = [...new Set(tableauAppareils)];
    //affichage des tags
    for (let i = 0; i < newTabAppareils.length; i++) {
        const aAppareil = document.createElement("a");
        const liappareil = document.createElement("li");
        const aDivChoix = document.querySelector("#choixAppareil");
        const aResetChoixAppareil = document.querySelector("#resetChoixApareil");
        const aTextChoixAppareil = document.querySelector("#textChoixAppareil");
        aAppareil.appendChild(liappareil);
        liappareil.textContent = newTabAppareils[i];
        aAppareil.addEventListener('click', function () {
            aDivChoix.style.display = "flex";
            aResetChoixAppareil.style.display = "flex";
            aTextChoixAppareil.textContent = liappareil.textContent;
            divListAppareils.style.display = "none";
            formAppareil.style.display = "none";
            tabFiltre = [];
            tableauRecette.filter(function (recette) {
                if (recette.appliance.toUpperCase() === liappareil.textContent.toUpperCase()) {
                    tabFiltre.push(recette);
                    displayData(tabFiltre);
                };
            });

        });

        aResetChoixAppareil.addEventListener("click", function (e) {
            e.preventDefault();
            aDivChoix.style.display = "none";
            aTextChoixAppareil.textContent = "";
            divListAppareils.style.display = "flex";
            formAppareil.style.display = "flex";
            displayData(tableauRecette);
        });

        ulAppareils.appendChild(aAppareil);
    }

    divListAppareils.appendChild(ulAppareils);

    //mise en forme du tag appareil
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


    //filtre du tag
    inputAppareil.addEventListener('input', function () {
        resetAppareil.style.display = "flex";
        resetAppareil.addEventListener('click', function () {
            inputAppareil.value = "";
            for (i = 0; i < newTabAppareils.length; i++) {
                li[i].style.display = "";
            }
            displayData(tableauRecette);
        });
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
}

function tagUstensil(recettes) {
    const divListUstensiles = document.querySelector("#listeUstensiles");
    const ulUstensiles = document.createElement("ul");
    const rechercheUstensil = document.querySelector("#rechercheUstensile");
    const closeUstensil = document.querySelector("#closeUstensile");
    const formUstensil = document.querySelector("#formUstensile");
    const resetUstensil = document.querySelector("#resetUstensile")
    let inputUtensil = document.querySelector("#texteUstensile");
    let tabFiltre = [];

    //récupération du nombre de recettes
    //pousser les recettes du fichier dans un tableau pour récupérer la longueur du tableau
    const tableauRecette = [];
    recettes.recipes.forEach((recipe) => { tableauRecette.push(recipe) });

    //récupération des éléments "tag" des recettes
    //création des tableaux de tag
    const tableauUstensiles = [];
    //pousser les éléments dans les tableaux
    for (let i = 0; i < tableauRecette.length; i++) {
        recettes.recipes[i].ustensils.forEach((ustensil) => {
            tableauUstensiles.push(ustensil);
        });
    }

    //élimination des doublons
    let newTabUstensiles = [...new Set(tableauUstensiles)];

    //affichage des tags
    for (let i = 0; i < newTabUstensiles.length; i++) {
        const aUstensil = document.createElement("a");
        const liUstensile = document.createElement("li");
        const aDivChoix = document.querySelector("#choixUstensil");
        const aResetChoixUstensil = document.querySelector("#formChoixUstensile");
        const aTextUstensil = document.querySelector("#textChoixUstensil");
        aUstensil.appendChild(liUstensile);
        liUstensile.textContent = newTabUstensiles[i];
        aUstensil.addEventListener('click', function (e) {
            e.preventDefault();
            aDivChoix.style.display = "flex";
            aResetChoixUstensil.style.display = "flex";
            aTextUstensil.textContent = liUstensile.textContent;
            divListUstensiles.style.display = "none";
            formUstensil.style.display = "none";
            tabFiltre = [];
            tableauRecette.filter(function (recette) {
                recette.ustensils.forEach((ustensil) => {
                    if (ustensil.toUpperCase() === liUstensile.textContent.toUpperCase()) {
                        tabFiltre.push(recette);
                        displayData(tabFiltre);
                    };
                });
            });
        });

        aResetChoixUstensil.addEventListener('click', function (e) {
            e.preventDefault();
            aDivChoix.style.display = "none";
            aTextUstensil.textContent = "";
            divListUstensiles.style.display = "flex";
            formUstensil.style.display = "flex";
            displayData(tableauRecette);
        })
        ulUstensiles.appendChild(aUstensil);
    }
    divListUstensiles.appendChild(ulUstensiles);



    //mise en forme du tag ustesil
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


    //filtre du tag
    inputUtensil.addEventListener('input', function () {
        resetUstensil.style.display = "flex";
        resetUstensil.addEventListener('click', function (e) {
            e.preventDefault();
            inputUtensil.value = null;
            for (i = 0; i < newTabUstensiles.length; i++) {
                li[i].style.display = "";
            }
            displayData(tableauRecette);
        });
        let li = divListUstensiles.getElementsByTagName("li");
        let filter = inputUtensil.value.toUpperCase();
        for (i = 0; i < newTabUstensiles.length; i++) {
            txtValue = li[i].textContent || li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });
}


function choixRecettes(recettes) {

    let tabFiltre = [];
    const tableauRecette = [];
    let inputIngredient = document.querySelector("#texteIngredients");
    let inputAppareil = document.querySelector("#texteAppareils");
    let inputUtensil = document.querySelector("#texteUstensile");
    let inputRecherche = document.querySelector("#recherche");
    //const validRecherche = document.querySelector("#submitRecherche");

    inputRecherche.addEventListener('input', function () {
        tabFiltre = [];
        tableauRecette.filter(function (recette) {
            if (recette.name.toUpperCase().indexOf(inputRecherche.value.toUpperCase()) > -1) {
                tabFiltre.push(recette);
                displayData(tabFiltre);

            } else
                if (recette.appliance.toUpperCase() === inputRecherche.value.toUpperCase()) {
                    tabFiltre.push(recette);
                    displayData(tabFiltre);
                } else {
                    recette.ingredients.forEach((element) => {
                        if (element.ingredient.toUpperCase() === inputRecherche.value.toUpperCase()) {
                            tabFiltre.push(recette);
                            displayData(tabFiltre);
                        }
                    });

                    recette.ustensils.forEach((ustensil) => {
                        if (ustensil.toUpperCase() === inputRecherche.value.toUpperCase()) {
                            tabFiltre.push(recette);
                            displayData(tabFiltre);
                        };
                    });
                }
        })
    });

    recettes.recipes.forEach((recipe) => { tableauRecette.push(recipe) });

    // inputIngredient.addEventListener('input', function () {
    //     inputAppareil.addEventListener('input', function () {
    //         inputUtensil.addEventListener('input', function () {
    //             tabFiltre = [];
    //             tabCombine = [];
    //             tabfinale = [];

    //             tableauRecette.filter(function (recette) {
    //                 recette.ingredients.forEach((element) => {
    //                     if (element.ingredient.toUpperCase() === inputIngredient.value.toUpperCase()) {
    //                         tabFiltre.push(recette);
    //                         displayData(tabFiltre);
    //                         console.log(tabFiltre);
    //                     }
    //                 });
    //             });
    //             if (inputAppareil.value !== "" && inputUtensil.value === "") {

    //                 tabFiltre.filter(function (recette) {
    //                     if (recette.appliance.toUpperCase() === inputAppareil.value.toUpperCase()) {
    //                         tabCombine.push(recette);
    //                         displayData(tabCombine);
    //                         console.log(tabCombine);
    //                     }
    //                 });

    //             } else if (inputUtensil.value !== "") {

    //                 tabCombine.filter(function (recette) {
    //                     recette.ustensils.forEach((ustensil => {
    //                         if (ustensil.toUpperCase() === inputUtensil.toUpperCase()) {
    //                             tabfinale.push(recette);
    //                             displayData(tabfinale);
    //                             console.log(tabfinale);
    //                         }
    //                     }))
    //                 });

    //             }
    //         });
    //     });
    // });

    inputIngredient.addEventListener('input', function () {
        tabFiltre = [];
        tableauRecette.filter(function (recette) {
            recette.ingredients.forEach((element) => {
                if (element.ingredient.toUpperCase() === inputIngredient.value.toUpperCase()) {
                    tabFiltre.push(recette);
                    displayData(tabFiltre);
                }
            });
        });
    })

    inputAppareil.addEventListener('input', function () {
        tabFiltre = [];
        tableauRecette.filter(function (recette) {
            if (recette.appliance.toUpperCase() === inputAppareil.value.toUpperCase()) {
                tabFiltre.push(recette);
                displayData(tabFiltre);
            };
        });
    });

    inputUtensil.addEventListener('input', function () {
        tabFiltre = [];
        tableauRecette.filter(function (recette) {
            recette.ustensils.forEach((ustensil) => {
                if (ustensil.toUpperCase() === inputUtensil.value.toUpperCase()) {
                    tabFiltre.push(recette);
                    displayData(tabFiltre);
                };
            });
        });
    });


    if (tabFiltre.length === 0) {
        return tableauRecette;
    }
}

function displayData(tableauDeRecettes) {

    const recettesSection = document.querySelector(".recettes-section");
    const divNbRecettes = document.querySelector(".nbRecettes");
    recettesSection.innerHTML = "";

    for (let i = 0; i < tableauDeRecettes.length; i++) {
        const recetteModel = recettesTemplate(tableauDeRecettes[i]);
        const recetteCardDOM = recetteModel.getRecetteCardDOM();
        recettesSection.appendChild(recetteCardDOM);
    }

    divNbRecettes.textContent = tableauDeRecettes.length + " recettes";
}

async function init() {
    // Récupère les datas des recettes
    const recettes = await getRecettes();
    const tableauDeRecettes = choixRecettes(recettes);
    displayData(tableauDeRecettes);
    tagIngredient(recettes);
    tagAppareil(recettes);
    tagUstensil(recettes);
}

init();