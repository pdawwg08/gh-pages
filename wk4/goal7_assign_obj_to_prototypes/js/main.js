/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function (){
    var numOfPeople = 3;
    var people = [];
    var names = ["Preston","Ashleigh","Ethan","Tiberius","Moriah","Ryan"];
    var interval;
    clearInterval(interval);
    interval = setInterval(runUpdate,1000/30);
    function runUpdate(){
        people.forEach(function(element){
            element.update();
                       });
    }
})();
