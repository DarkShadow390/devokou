// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function dernierElement(tab){
    let valeur = tab.pop();
    tab.push(valeur);
    console.log(valeur);
}
dernierElement([10,15,20,60])
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnDernierElement(tab){
    let valeur = tab.length-1;
    return tab[valeur];
}
console.log(returnDernierElement([10,15,70,200]));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function minimum(tab){
    let temp = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (temp > tab[i]) {
            temp = tab[i];
        }
    }
    return temp; 
}

console.log(minimum([8,5,20,2]));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maximum(tab){
    let temp = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (temp < tab[i]) {
            temp = tab[i];
        }
    }
    return temp;
}
console.log(maximum([8,75,20,2]));
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
function deuxièmePositive(tab){
    let oneMax = maximum(tab);
    const tab2 = tab.filter((e) => e !== oneMax)// a corriger
    maximum(tab2);
    let deuxMax = maximum(tab2);
    return deuxMax;
}
console.log(deuxièmePositive([100,605,805,520,520,805]));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function compteur(tab,nombre){
    let compteur1 = 0;
    for(let i = 0; i < tab.length; i++){
        
        if(nombre == tab[i]){
            compteur1 +=1;
        }
    }
    return compteur1;
}
console.log(compteur([20,10,10,10,50,50],49));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function verite(tab,nombre){
    for(let i = 0; i < tab.length; i++){
        if(nombre == tab[i]){
            return true;
        }
    }
    return false;
}
console.log(verite([10,15,20,10,36,45],36));
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tableau = [];
for(let i = 1; i <= 7777; i++){
    tableau.push([i]);
    
}
console.log(tableau);
// Créer un tableau qui contient [10,20,30,...,77770].
let tableau1 = [];
for(let i = 10; i <= 77770; i += 10){
    tableau1.push([i]);
}
console.log(tableau1);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tableau2 = tableau1;
for(let i = 10; i <= 38885; i += 5){
    tableau2.push([i]);
}
console.log(tableau2);
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
function inferieures(tab){
    for(let i = (-tab.length); i < tab.length; i++){
        let long = tab.length-1;
        if(tab[long] < 50){
            tab.pop();
        }
    }
    return tab;
}
console.log(inferieures([12,15,55,16,55,12,25]));
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]
let tableau3 = [1,45,88,54,23,-100,12];
console.log(inferieures(tableau3));