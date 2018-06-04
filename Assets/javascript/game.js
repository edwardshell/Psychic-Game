
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var wins = 0;
        var losses = 0;
        var guesses = 12;
        var keysPressed = [];



        document.onkeyup = function (event) {
            var userGuess = event.key;

            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            if (userGuess === computerGuess) {
                wins++;
                console.log(userGuess);
                console.log(computerGuess);
                alert("You're Psychic! Refresh to play again.");



            } else {
                guesses--;
                console.log(userGuess);
                console.log(computerGuess);

            }

            if (guesses < 0) {
                losses++;
                return guesses = 12;
                
            }

            keysPressed.push(userGuess);


            var html =
                "<h1>Guess what letter I'm thinking of!</h1>" +
                "<p>You chose: " + userGuess + "</p>" +
                "<p>The computer chose: " + computerGuess + "</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>You have " + guesses + " left</p>" +
                "<p>Keys used: " + keysPressed + "<p>";

            document.querySelector("#game").innerHTML = html;



        };
