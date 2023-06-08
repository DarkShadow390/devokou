// Exercice all2_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : position_biggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
function position(tab) {
    let temp = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (temp < tab[i]) {
            temp = tab[i];
        }
    }
    return temp;
}
console.log(position([155, 20, 820, 15, 80, 700]));
// Exercice all2_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.

function sommeTotal(tab1) {
    calcul = 0;
    for (let i = 0; i < tab1.length; i++) {
        calcul += tab1[i];
    }
    return calcul;
}
console.log(sommeTotal([20, 20, 20, 20]));
// Exercice all2_3 : écrire une fonction qui retourne la somme des valeurs positives d'une liste.
function sommePositives(tab1) {
    calcul = 0;
    for (let i = 0; i < tab1.length; i++) {
        if (tab1[i] > 0) {
            calcul += tab1[i];
        }
    }
    return calcul;
}
console.log(sommePositives([-20, 20, 20, 20]));
// Exercice all2_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'une liste.

function sommeNegatives(tab2) {
    let calcul = sommeTotal(tab2) - sommePositives(tab2);
    return calcul;
}
console.log(sommeNegatives([10, 10, 10, -5,]));