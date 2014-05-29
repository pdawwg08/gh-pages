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
    for (var i=0;i<numOfPeople;i++){
        var personIndex = Math.floor(Math.random()*names.length);
        var person = new Person(names[personIndex],i+1);
        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");
        people.push(person);
        names.splice(personIndex,1);
    }
    clearInterval(interval);
    interval = setInterval(runUpdate,1000/30);
    function populateHTML(data,field){
        document.getElementById(field).innerHTML = data;
    }
    function runUpdate(){
        people.forEach(function(element){
            element.update();
                       });
    }
})();
