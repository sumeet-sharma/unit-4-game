$(document).ready(function(){

    // function to generate a random number
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    // store the random number in a variable
    var target = getRandomInt(19, 120);

    // display the variable 
    $("#randomNumber").text(target);

    // creating variables for wins and losses
    var wins = 0;
    var losses = 0;

    // variable to store user's total value
    var value = 0;

    // display wins and losses
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    // assigning random value(between 1-12) to each crystal
    saphire = getRandomInt(1,12);
    emerald = getRandomInt(1,12);
    ruby = getRandomInt(1,12);
    diamond = getRandomInt(1,12);

    console.log(saphire,emerald,ruby,diamond);

    // record the clicks on the crystals
    // on click add the value of the corresponding crystal
    // display it
    $(".gems").on("click","#one", function(){
        value += saphire;
        $("#finalTotal").text(value);

        // if the value is equal to the target then display you win
        if(value == target){
            alert("You Win!!");
            // Update Wins
            winCounter();
        }
        // else display You Lose
        else if(value > target){
            alert("You Lose!");
            //update losses
            lossCounter();
        } 
    })

    $(".gems").on("click","#two", function(){
        value += emerald;
        $("#finalTotal").text(value);

        // if the value is equal to the target then display you win
        if(value == target){
            alert("You Win!!");
            // Update Wins
            winCounter();
        }
        // else display You Lose
        else if(value > target){
            alert("You Lose!");
            //update losses
            lossCounter();
        } 
    })

    $(".gems").on("click","#three", function(){
        value += ruby;
        $("#finalTotal").text(value);

        // if the value is equal to the target then display you win
        if(value == target){
            alert("You Win!!");
            // Update Wins
            winCounter();
        }
        // else display You Lose
        else if(value > target){
            alert("You Lose!");
            //update losses
            lossCounter();
        } 
    })

    $(".gems").on("click","#four", function(){
        value += diamond;
        $("#finalTotal").text(value);

        // if the value is equal to the target then display you win
        if(value == target){
            alert("You Win!!");
            // Update Wins
            winCounter();
        }
        // else display You Lose
        else if(value > target){
            alert("You Lose!");
            //update losses
            lossCounter();
        }
    });

    // Win counter (update wins) and display it
    function winCounter(){
        wins++;
        $("#numberWins").text(wins);
        reset();
    };

    // Loss counter (update losses) and display it
    function lossCounter(){
        losses++;
        $("#numberLosses").text(losses);
        reset();
    };

    // function to reset all the variables once the game is won or, is over
    function reset(){
        value = 0;
        $("#finalTotal").text(value);

        target = getRandomInt(19,120);
        $("#randomNumber").text(target);

        saphire = getRandomInt(1,12);
        emerald = getRandomInt(1,12);
        ruby = getRandomInt(1,12);
        diamond = getRandomInt(1,12);

        console.log(saphire,emerald,ruby,diamond);

    };
});