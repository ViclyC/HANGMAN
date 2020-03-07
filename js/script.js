  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyAwM5plLa26tHLdsWzA_HFZUuVzZPgDHPI",
    authDomain: "hangmanvicly.firebaseapp.com",
    databaseURL: "https://hangmanvicly.firebaseio.com",
    projectId: "hangmanvicly",
    storageBucket: "hangmanvicly.appspot.com",
    messagingSenderId: "373090147720",
    appId: "1:373090147720:web:fd4504a9fcdedd4efb6e3d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const MAX = 10;
  const MAXERROR = 7;
  const ASC = 97;
  const ATOZ = 26;
  let wordArr = ["develope", "approve", "script", "boxing", "cashew", "frog", "retirement", "envelope", "committee", "alien"];
  let ran = Math.floor(Math.random()*MAX);
  let word = wordArr[ran];
  let atozArr = [];
  let blankArr = [];
  let blockArr = [];
  let fireArr = [];
  let message = document.querySelector("h1");
  let isOpen = [];
  let testArr = [];
   let random = Math.floor(Math.random()*MAX);
   
   db.collection("trying").doc("2").get().then((snap) => {
    for (let i = 0; i < MAX; i++){
    let wordName = snap.data().Name[i]
    localStorage.setItem(i, wordName);
    
   //word = snap.data().Name[0];

    }
});



console.log(random);
let choice = localStorage.getItem(random);
console.log(choice);
word = choice;




   
   
   document.querySelector("#hangman").style.height = "500px";







message.innerHTML = "HANGMAN";
message.style.color = "red";
message.style.textAlign = "center";

for (let i = 0; i < ATOZ/2; i++){
    atozArr[i] = document.createElement("button");
    atozArr[i].innerHTML = String.fromCharCode(ASC + i);
    atozArr[i].style.backgroundColor = "lightgreen";
    atozArr[i].style.color = "darkgreen";
    atozArr[i].style.fontSize = "10px";
    atozArr[i].style.height = "30px";
    atozArr[i].style.width = "30px";
    atozArr[i].style.position = "absolute";
    atozArr[i].style.bottom = "100px";
    atozArr[i].style.left = 50 + i * 70 + "px";
    document.getElementById("body").appendChild(atozArr[i]);
    atozArr[i].onclick = function(){check(i)};
}
for (let i = ATOZ/2 ; i < ATOZ; i++){
    atozArr[i] = document.createElement("button");
    atozArr[i].innerHTML = String.fromCharCode(ASC + i);
    atozArr[i].style.backgroundColor = "lightgreen";
    atozArr[i].style.color = "darkgreen";
    atozArr[i].style.fontSize = "10px";
    atozArr[i].style.height = "30px";
    atozArr[i].style.width = "30px";
    atozArr[i].style.position = "absolute";
    atozArr[i].style.bottom = "50px";
    atozArr[i].style.left = 50 + (i - ATOZ/2) * 70 + "px";
    document.getElementById("body").appendChild(atozArr[i]);
    atozArr[i].onclick = function(){check(i)};
}

let leng = word.length;
for (let i = 0; i < leng; i++){
    blankArr[i] = document.createElement("p");
    blankArr[i].innerHTML = word.charAt(i);
    blankArr[i].style.color = "blue";
    blankArr[i].style.position = "absolute";
    blankArr[i].style.top = "300px";
    blankArr[i].style.left = 700 + 50*i + "px";
    blankArr[i].style.fontSize = "50px";
    blankArr[i].style.visibility = "hidden";
    document.getElementById("body").appendChild(blankArr[i]);
    blockArr[i] = document.createElement("img");
    blockArr[i].src = "images/question.png";
    blockArr[i].style.position = "absolute";
    blockArr[i].style.top = "350px";
    blockArr[i].style.left = 700 + 50*i + "px";
    blockArr[i].style.height = "100px";
    blockArr[i].style.width = "50px";
    document.getElementById("body").appendChild(blockArr[i]);
    isOpen[i] = false;
}
console.log(word);
let error = 0;
function check(i){
    atozArr[i].disabled = true;
    atozArr[i].style.backgroundColor = "grey";
        let letter = String.fromCharCode(ASC + i);

        if (word.includes(letter)){
            for (let j = 0; j < leng; j++){
                if (blankArr[j].innerHTML == letter){
                    
                    
                    blankArr[j].style.visibility = "visible";
                    blockArr[j].style.visibility = "hidden";
                    isOpen[j] = true;
                }
            }
            if (isOpen.filter(Boolean).length == leng){
                message.innerHTML = "YOU WON!";
                for (let j = 0; j < ATOZ; j++){
                    atozArr[j].style.backgroundColor = "grey";
                    atozArr[j].disabled = true;

                }

            }


        } else {
            
            error++;
            if (error < MAXERROR){
                
                document.querySelector("#hangman").src = "images/hangman" + error + ".png";
            } else {
                document.querySelector("#hangman").src = "images/hangman7.png";
                message.innerHTML = "YOU LOST!";
                for (let j = 0; j < leng; j++){
                    
                        
                        
                        blankArr[j].style.visibility = "visible";
                        blockArr[j].style.visibility = "hidden";

                    
                }
                for (let j = 0; j < ATOZ; j++){
                    atozArr[j].style.backgroundColor = "grey";
                    atozArr[j].disabled = true;
                    
                }

            }
        }
    
}

console.log(isOpen);


