/*
Name:Preston Cain
Date:5/16/2014
Assignment: Duel
*/
(function(){
console.log(FIGHT!!)
    //player name
    var player1Name = "Spiderman";
    var player2Name = "Batman";
    
    //player damage
    var player1Damage = 20;
    var player2Damage = 20;
    
    //player health
    var player1Health = 100;
    var player2Health = 100;
    
    function fight(){
    alert(player1Name+":"+player1Health+" *START* "+player2Name":"+player2Health)
    for (var i=0, i < 10; i++){
        var minDamage1 = player1Damage *.5;
        var minDamage2 = player2Damage *.5;
        var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);
        player1Health-=f1;
        player2Health-=f2;
    }
    winnerCheck();
    }
    function winnerCheck(){
    }
    fight();
})();