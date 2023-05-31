setPos(600,400);
setLineWidth(10);
// SERIE A 
//A1
//initialisation
/*
faceDown();
changeColor(color.red);

//Réalisation

forward(200);
faceRight();
forward(100);


//A2
//initialisation
changeColor(color.yellow);
faceLeft();

//Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


//A3
//initialisation
changeColor(color.brown);
faceRight();

//Réalisation
forward(100);
faceLeft();
forward(200);
faceRight();
forward(100);
faceDown();
forward(100);
faceUp();
forward(200);


//A4

//initialisation
changeColor(color.green);
faceRight();

//Réalisation
forward(200);
arcLeft(100,90)
forward(100);
arcRight(100,90);
forward(200);




//A5
//initialisation
changeColor(color.purple);
faceRight();

//Réalisation

//methode 1
arcRight(200,180);
arcRight(100,180);
arcLeft(100,180);
arcLeft(200,180);

//methode 2
arcRight(200,360);
arcRight(100,180);
arcLeft(100,180);



//A6

//initialisation
changeColor(color.blue);
faceUp();

//Réalisation
forward(100);
up();
forward(100);
down();
forward(200);



//A7

//initialisation
changeColor(color.green);
faceDown();

//Réalisation

forward(200);
arcLeft(100,180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(100,180);
forward(100);



//A8
//initialisation
changeColor(color.purple);
faceUp();

//Réalisation

forward(100);
faceRight();
forward(200);
faceDown();
forward(400);
faceLeft();
forward(100);
up();
forward(100);
faceUp();
forward(100);
down();
forward(100)


//A9
//initialisation
changeColor(color.blue);
faceRight();

//Réalisation

arcLeft(100,180);
arcRight(100,180);
forward(400);
arcRight(100,180);
arcLeft(100,180);
faceLeft();
forward(400);



//A10
//initialisation
changeColor(color.red);
faceRight();

//Réalisation

arcLeft(100,180);
changeColor(color.green);
arcLeft(200,180)
changeColor(color.yellow);
arcLeft(400,180)



//A11
//initialisation
changeColor(color.blue);
faceUp();

//Réalisation
arcRight(100,180);
up();
faceRight();
forward(100);
faceUp();
down();
arcRight(100,180);
up();
faceLeft();
forward(50);
faceDown();
forward(100);
down();
changeColor(color.purple);
arcRight(200,180)










//SERIE B
//B1
//initialisation
changeColor(color.green);
faceRight();

//Réalisation
for(let i = 0 ; i < 4 ; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}




//B2
//initialisation
changeColor(color.red);
faceUp();

//Réalisation

for( let i = 0 ; i < 4 ; i++){
    forward(100);
    faceRight();
    forward(100);
    faceDown();
    forward(100);
    faceRight();
    forward(100);
    faceUp();
}





//B3
//initialisation
changeColor(color.purple);
faceRight();

//Réalisation

for(let i = 0 ; i < 4 ; i++){
    forward(200);
    right(90);
}





//B4
//initialisation
changeColor(color.blue);
faceRight();

//Réalisation
for(let i = 0 ; i < 3 ; i++){
    forward(200);
    left(180-60);
}



//B5
//initialisation
changeColor(color.orange);
faceUp();

//Réalisation
forward(200);
changeColor(color.red)
for(let i = 0 ; i < 3 ; i++){
    forward(100);
    right(180-60)

}



//B6
//initialisation
changeColor(color.red);
faceRight();

//Réalisation
for(let i = 0 ; i < 2 ; i++){
    forward(100);
    faceUp();
    forward(100);
    faceRight();
}
changeColor(color.green)
for(let i = 0 ; i < 3 ; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}



//B7
//initialisation
changeColor(color.orange);
faceRight();

//Réalisation
for(let i = 0 ; i < 3 ; i++){
    forward(200);
    left(180-60);
}

for(let i = 0 ; i < 4 ; i++){
    forward(200);
    right(180-90);
}




//B8
//initialisation
changeColor(color.yellow);
faceRight();


//Réalisation

for(let i = 0 ; i < 8 ; i++){
    forward(400);
    right(180-45);
}




//B9
//initialisation
changeColor(color.purple);
faceRight();


//Réalisation
forward(100);
up();
forward(100);
down();
for(let i = 0 ; i < 3 ; i++){
    forward(200);
    right(180-60);
}



//SERIE C
//C1
//initialisation
changeColor(color.blue);
faceRight();

//Réalisation

for(let i = 0 ; i < 4 ; i++){
    for(let j = 0; j < 3 ; j++){
        forward(200);
        right(180-60);
    }
    forward(200);
    
}




//C2
//initialisation
changeColor(color.purple);
faceUp();


//Réalisation
for(let i = 0 ; i < 5 ; i++){
    for(let j = 0 ; j < 4 ; j++){
        forward(100);
        right(180-90);
    }
    up();
    forward(200);
    down();
}





//C3
//initialisation
shiftColor(1/3);
faceRight();


//Réalisation
for(let i = 0 ; i < 4 ; i++){
    for(let j = 0 ; j < 8 ; j++){
        forward(200);
        left(180-45);
    }
    up();
    forward(400);
    shiftColor(0.10);
    down();
}


//C4
//initialisation
faceRight();

//Réalisation
for(let i = 0 ; i < 5 ; i++){
    changeColor(color.red);
    for(let j = 0 ; j < 3 ; j++){
        forward(100);
        left(180-60);
    }
    changeColor(color.yellow)
    for(let j = 0 ; j < 4 ; j++){
        forward(100);
        right(180-90);
    }
    up();
    forward(200);
    down();
}




//C5
//initialisation
faceRight();
shiftColor(1/6)

//Réalisation
for(let i = 0 ; i < 4 ; i++){
    for(let j = 0 ; j < 8 ; j++){
        forward(400);
        left(180-45);
    }
    right(180-90);
    shiftColor(0.25);
}



//C6
//initialisation
faceRight();
changeColor(color.yellow);

//Réalisation

for(let i = 0 ; i < 3 ; i++){
    left(180-60);
    for(let f = 0 ; f < 4 ; f++){
        forward(200);
        left(180-60);
    }
}


//C7
//initialisation
changeColor(color.orange);
faceRight();


//Réalisation
left(180-165);
for(let i = 0 ; i < 8 ; i++){
    left(180-15);
    for(let f = 0 ; f < 5 ; f++){
        left(180-60);
        forward(100);
    }
}

*/

// SERiE bonus 

changeColor(color.aqua);
faceDown();
forward(100);
backward(100)
changeColor(color.red);
faceUp();
forward(100);
backward(100);
faceLeft();
changeColor(color.fuchsia);
forward(100);
backward(100);
faceRight();
changeColor(color.green);
forward(100);


up();
forward(400);
faceUp();
forward(100);
down();


faceDown();


for(let i = 0 ; i < 3 ; i++){
    shiftColor(1)
    for(let j = 0 ; j < 1 ; j++){
        forward(100);
        faceRight();
        forward(100);
        faceDown();
    }
    up()
    shiftColor(0.25)
    arcLeft(100,180);
    down();
    
}







