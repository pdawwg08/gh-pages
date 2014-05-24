/*
Name:Preston Cain
Date:5/23/2014
Assignment: Duel III
*/
(function () {

    console.log("FIGHT!!!");
    
    var playerOne = ["Kabal",20,100];
    var playerTwo = ["Kratos",20,100];

    //initiate round
    var round=0;

    function fight(event){
        document.getElementById("kabal").innerHTML = playerOne[0]+":"+playerOne[2];
        document.getElementById("kratos").innerHTML = playerTwo[0]+":"+playerTwo[2];
        document.getElementsByTagName("input")[0].value = "START";
        
        var minDamage1 = playerOne[1] * .5;
        var minDamage2 = playerOne[1] * .5;
        var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
        var f2 = Math.floor(Math.random()*(playerOne[1]-minDamage2)+minDamage2);

        //inflict damage
        playerOne[2]-=f1;
        playerTwo[2]-=f2;

        console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);

        //check for victor
        var result = winnerCheck();
        console.log(result);
        if (result==="no winner")
        {
            round++;
            document.getElementById("kabal").innerHTML = playerOne[0]+":"+playerOne[2];
            document.getElementById("kratos").innerHTML = playerTwo[0]+":"+playerTwo[2];
            document.getElementsByTagName("input")[0].value = "ROUND "+round+" OVER";

        } else{
            document.getElementById("kabal").innerHTML = "";
            document.getElementById("kratos").innerHTML = "";
            document.getElementsByTagName("input")[0].value = result;
        };
        return false;
    }
    function winnerCheck(){
        var result="no winner";
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die";
        } else if(playerOne[2]<1){
            result =playerTwo[0]+" WINS!!!"
        } else if (playerTwo[2]<1)
        {
            result = playerOne[0]+" WINS!!!"
        };
       return result;
    };
    var button = document.getElementsByClassName("buttonblue")[0];
    button.addEventListener("click", fight, false);
})();