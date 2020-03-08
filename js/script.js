  const MAX = 10;
  const MAXERROR = 7;
  const ASC = 97;
  const ATOZ = 26;
  let wordArr = ["develope", "approve", "script", "boxing", "cashew", "frog", "retirement", "envelope", "committee", "alien"];
  let ran = Math.floor(Math.random() * MAX);
  let word = wordArr[ran];
  let atozArr = [];
  let blankArr = [];
  let blockArr = [];
  let fireArr = [];
  let message = document.querySelector("h1");
  let isOpen = [];
  let testArr = [];
  let random = Math.floor(Math.random() * MAX);
  let divArr = [];

  db.collection("trying").doc("2").get().then((snap) => {
      for (let i = 0; i < MAX; i++) {
          let wordName = snap.data().Name[i]
          localStorage.setItem(i, wordName);

          //word = snap.data().Name[0];

      }
  });


  console.log(random);
  let choice = localStorage.getItem(random);
  console.log(choice);
  word = choice;

  document.querySelector("#hangman").style.height = "400px";

  message.innerHTML = "HANGMAN";
  message.style.color = "red";
  message.style.textAlign = "center";
  message.style.fontSize = "64pt";

  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth;

  let buttonSize = Math.floor(0.1 * screenWidth);
  let max_buttons_row = Math.floor((screenWidth / buttonSize));
  let max_rows = Math.ceil(26 / max_buttons_row);
  console.log(max_buttons_row);
  console.log(max_rows);

  for (let row = 0; row < max_rows; row++) {

      for (let i = 0; i < max_buttons_row; i++) {

        if(i + (row * max_buttons_row) == 26){
            break;
        }

          atozArr[i + (row * max_buttons_row)] = document.createElement("button");
          atozArr[i + (row * max_buttons_row)].innerHTML = String.fromCharCode(ASC + i + (row * max_buttons_row));
          atozArr[i + (row * max_buttons_row)].style.backgroundColor = "lightgreen";
          atozArr[i + (row * max_buttons_row)].style.color = "darkgreen";
          atozArr[i + (row * max_buttons_row)].style.fontSize = "8vw";
          atozArr[i + (row * max_buttons_row)].style.height = buttonSize + "px";
          atozArr[i + (row * max_buttons_row)].style.width = buttonSize + "px";
          document.getElementById("buttons").appendChild(atozArr[i + (row * max_buttons_row)]);
          atozArr[i + (row * max_buttons_row)].onclick = function () {
              check(i + (row * max_buttons_row))
          };
      }
  }

  let leng = word.length;
  for (let i = 0; i < leng; i++){
      blankArr[i] = document.createElement("p");
      blankArr[i].innerHTML = word.charAt(i);
      blankArr[i].style.color = "blue";
      blankArr[i].style.zIndex = "1";

      blankArr[i].style.visibility = "hidden";
    //   document.getElementById("word").appendChild(blankArr[i]);
      blockArr[i] = document.createElement("img");
      blockArr[i].src = "images/question.png";

      blockArr[i].style.height = "70px";
      blockArr[i].style.width = "50px";
      blockArr[i].style.zIndex = "2";
    //   document.getElementById("word").appendChild(blockArr[i]);

    divArr[i] = document.createElement("div");
    divArr[i].appendChild(blankArr[i]);
    divArr[i].appendChild(blockArr[i]);
    // blankArr[i].style.position = "fixed";
    // blankArr[i].style.top = "0px";
    // blankArr[i].style.left =  50*i + "px";
    blankArr[i].style.fontSize = "70px";

    // blockArr[i].style.position = "fixed";
    // blockArr[i].style.top = "0px";
    // blockArr[i].style.left = 50*i + "px";
    document.getElementById("word").appendChild(divArr[i]);
      isOpen[i] = false;
  }

  console.log(word);
  let error = 0;

  function check(i) {
      atozArr[i].disabled = true;
      atozArr[i].style.backgroundColor = "grey";
      let letter = String.fromCharCode(ASC + i);

      if (word.includes(letter)) {
          for (let j = 0; j < leng; j++) {
              if (blankArr[j].innerHTML == letter) {

                  blankArr[j].style.visibility = "visible";
                  blockArr[j].style.visibility = "hidden";
                  isOpen[j] = true;
              }
          }
          if (isOpen.filter(Boolean).length == leng) {
              message.innerHTML = "YOU WON!";
              for (let j = 0; j < ATOZ; j++) {
                  atozArr[j].style.backgroundColor = "grey";
                  atozArr[j].disabled = true;

              }

          }


      } else {

          error++;
          if (error < MAXERROR) {

              document.querySelector("#hangman").src = "images/hangman" + error + ".png";
          } else {
              document.querySelector("#hangman").src = "images/hangman7.png";
              message.innerHTML = "YOU LOST!";
              for (let j = 0; j < leng; j++) {



                  blankArr[j].style.visibility = "visible";
                  blockArr[j].style.visibility = "hidden";


              }
              for (let j = 0; j < ATOZ; j++) {
                  atozArr[j].style.backgroundColor = "grey";
                  atozArr[j].disabled = true;

              }

          }
      }

  }

  console.log(isOpen);
