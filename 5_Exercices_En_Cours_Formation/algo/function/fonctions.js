// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
function f2(){
    return 18;
}
// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());
// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(nombre){
    let variable = nombre*2;
    console.log(variable);
}
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(nombre){
    return nombre*2;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(nombre1,nombre2){
    console.log(nombre1 + nombre2);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(nombre1,nombre2){
    return nombre1+nombre2;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a += f6(42,77); 
// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(nombre1,nombre2){
    if(nombre1 > nombre2){
        return nombre1;
    }
    else{
        return nombre2;
    }
}
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(nombre1,nombre2,nombre3){
    if(nombre1 > nombre2 && nombre1 > nombre3){
        return nombre1;
    }
    if(nombre2 > nombre1 && nombre2 > nombre3){
        return nombre2;
    }
    if(nombre3 > nombre1 && nombre3 > nombre2){
        return nombre3;
    }
    else{
        return nombre1;
    }
}
console.log(f8(100,100,100));
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(nombre,mot){
    for(let i = 0 ;i < nombre; i++){
        console.log(mot);
    }
}
f9(5,"bonjour");

//Pydéfis lvl1 SW IV : On passe en vitesse lumière

let x = 997;
let y = 312;
let z = 663;
while((10*x)>y){
    x = (y*z)%10000;
    y = (3*z)%10000;
    z = (7*z)%10000;
}
console.log(x,y,z);

//Pydéfis lvl1 Le message pour Queulorior
// utliser la turtle pour afficher le message 
/*setPos(0,100);
let nord = "N";
let est = "E";
let sud = "S";
let ouest = "O";


let message = "NNEESOOESEENNEEOOSEOSEEENNESENSSENNEESSOOEEENNEEOOSEOSEEENEENOOEESOOSEEEEEEENONSESENNSSENNEESSOOEEENNSSEENNSSEEENOONEEOOSEESEEEENNEESSOOEEENNEESOOEESENNESENSSEEENOONEEOOSEESEEEENNSSEEENNEESOOEESEEEENNEEOOSEOSEEENNEESSOOEEENNEESOOESEENNEEOOSEOSEEEENNOEEOSSEEEEENNEESOOEESOOEEENNEESOOESEENNSSEENNSSENNESNESSENNEEOOSEOSEEENNSSEENNSSEEENOONEEOOSEESENNEEOOSEOSEEEEEENNEESSOOEEENNEEOOSEOSEEENNESNESSENNEESOOEESENNSSENNESENSS"
function oneStep(lettre){
    if(lettre == nord){
        faceUp();
        forward(3);
    }
    if(lettre == est){
        faceRight();
        forward(3);
    }
    if(lettre == sud){
        faceDown();
        forward(3);
    }
    if(lettre == ouest){
        faceLeft();
        forward(3);
    }
}
for(let i = 0; i < message.length ; i++){
    oneStep(message[i]);
    
}
*/
//Pydéfis lvl1 Désamorçage à la Tony Stark
let total = 0;
for(let i = 1 ; i < 1435; i++){
    if(i%3 == 0 || i%5 == 0){
        total += i;
    }
}
console.log(total);

//Pydéfis lvl1 Désamorçage d'un explosif (I)