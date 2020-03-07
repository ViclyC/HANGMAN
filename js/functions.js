function sortScores() {
    //Sorts the scores
    let f = db.collection("leaderboard").orderBy("score");
}

function writeScore(userName, userScore) {
    db.collection("leaderboard").add({
        // Users name and score
            name: userName,
            score: userScore
        })
        // Check for successful write
        .then(function (docRef) {
            console.log("Document written with ID :", docRef.id);
        })
}

function getScores() {
    // Sorts the scores in the database
    sortScores();
    // Loops through the database and gets each score for the leaderboard 
    db.collection("leaderboard").get().then(function (querySnapshot){
        querySnapshot.forEach(function (doc){
            scores = doc.data().score;
            console.log(scores);
        })
    })
}

function getNames() {
    // Sorts the scores in the database
    sortScores();
    // Loops through the database and gets each score for the leaderboard 
    db.collection("leaderboard").get().then(function (querySnapshot){
        querySnapshot.forEach(function (doc){
            name = doc.data().name;
            console.log(name);
        })
    })
}
