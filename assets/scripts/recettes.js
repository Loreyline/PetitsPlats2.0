/*global photographerTemplate*/
/*eslint no-undef: "error"*/

async function getRecettes() {
    const recette = await fetch('../recipes.js')
        .then((data) => data.json())
    return recette;
}

