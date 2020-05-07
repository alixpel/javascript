function fizzBuzz(leNombre) {
    let resultat = "";
    if (Number.isInteger(leNombre / 3) && Number.isInteger(leNombre / 5)) {
        resultat = "🟣"
    } else if (Number.isInteger(leNombre / 3)){
        resultat = "🟡"
    } else if (Number.isInteger(leNombre / 5)){
        resultat = "🔵"
    } else {
        resultat = "⚪️"
    }
    return resultat
}

calcul.addEventListener("click", function() {
    let leNombre = entree.value;
    let resultat = fizzBuzz(leNombre);
    sortie.value = resultat;
});

genereUneListe.addEventListener("click", function() {
    let tableau = ["🟡"]
    for(let indicateur = 1; indicateur <= 750; indicateur++) {
        tableau.push(fizzBuzz(indicateur))
    }
    resultat.innerHTML = tableau
})

