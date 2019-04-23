import Game from "./game";

document.addEventListener('DOMContentLoaded', () => {
    // FireBase 
    var config = {
        apiKey: "AIzaSyCvfkStiDqUJGxtkQb3aiNjCLQZoFpU55k",
        authDomain: "stardew-cf5c0.firebaseapp.com",
        databaseURL: "https://stardew-cf5c0.firebaseio.com",
        projectId: "stardew-cf5c0",
        storageBucket: "stardew-cf5c0.appspot.com",
        messagingSenderId: "294319781568"
    };
    firebase.initializeApp(config);
    console.log(firebase);
    var database = firebase.database();
    var ref = database.ref('scores');
    ref.on('value', gotData, errData)
    
    
    function gotData(data) {
        var scores = data.val();
        var values = Object.values(scores);
        console.log(values);
    
        // High Scores
        let sortedScores = values.sort(function (a, b) {
            if (a.score > b.score) {
                return 1;
            }
            if (a.score < b.score) {
                return -1;
            }
            return 0;
        }).reverse().slice(0, 5);

        console.log(sortedScores);


        for (let i = 0; i < sortedScores.length; i++) {
            var initials = sortedScores[i].name;
            var points = sortedScores[i].score;
            let li = document.createElement('div');
            let textnode = document.createTextNode(initials + ": " + points);  
            li.appendChild(textnode);  
            document.getElementById("scoreList").appendChild(li);
        }
        
    }

    function errData(err){
        console.log(err);
        console.log("error");
    }
    
    // Starting game
    document.getElementById("startButton").addEventListener("click", () => {
        document.getElementById('landingMenu').style.display = 'none';
        const game = new Game();
        setInterval(game.draw, 9);  
        document.getElementById("initialSubmitButton").addEventListener("click", () => {
            let name = document.getElementById("initialSubmit").value.slice(0, 8);
            let data = {
                name: name,
                score: game.score
            }
            ref.push(data);
            document.location.reload();
        })
    })
});

