const MAX_USERS = 10;

new Promise(function (resolve, reject) {
    let users = getUsers();
    sortScores();
    setTimeout(() => resolve(users), 2000);

}).then(function (users) {
    setWorkout(users);

});

function getUsers() {
    let name = [];
    db.collection("users").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            name.push(doc.data().name);
        })
    })
    return name;
}

function setLeaderboard(users) {
    console.log(users);
    for (let i = 0; i < MAX_USERS; i++) {

        document.getElementById("leadboardNum" + (i + 1)).innerHTML =
            (i + 1) + " - " + users[i] + ": " + scores[i];

    }

}

function sortScores() {
    //Sorts the scores
    let f = db.collection("users").orderBy("score");
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
