let photo1 = document.getElementById("img1");
let photo2 = document.getElementById("img2");
let htext = document.getElementById("htext");

let num1 = Math.floor(Math.random(5)*6) + 1;
let num2 = Math.floor(Math.random(5)*6) + 1;

switch(num1){
    case 1:
        console.log("ERROR1");
        photo1.src = "./images/dice1.png";
        break;
    
    case 2:console.log("ERROR2");
        photo1.src = "./images/dice2.png";
        break;
    
    case 3:
        console.log("ERROR3");
        photo1.src = "./images/dice3.png";
        break;
    
    case 4:
        console.log("ERROR4");
        photo1.src = "./images/dice4.png";
        break;
    
    case 5:
        console.log("ERROR5");
        photo1.src = "./images/dice5.png";
        break;

   case 6:
    console.log("ERROR6");
        photo1.src = "./images/dice6.png";
        break;

    default:
        console.log("ERROR");
        break;
}

switch(num2){
    case 1:
        photo2.src = "./images/dice1.png";
        break;
    
    case 2:
        photo2.src = "./images/dice2.png";
        break;
    
    case 3:
        photo2.src = "./images/dice3.png";
        break;
    
    case 4:
        photo2.src = "./images/dice4.png";
        break;
    
    case 5:
        photo2.src = "./images/dice5.png";
        break;

   case 6:
        photo2.src = "./images/dice6.png";
        break;

    default:
        console.log("ERROR");
        break;
}


if (num1 == num2) {
    htext.innerText = ("Game Drow!!!");
}else if (num1 > num2){
    htext.innerText = ("✌️✌️ Player 1 Win");
}else{
    htext.innerText = ("Player 2 Win ✌️✌️");
}





