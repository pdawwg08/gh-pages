/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){
    window.Person = Person;
    Person.jobs = ["astronaut","chef","designer","athlete"];
    Person.actions = ["thinking","forgetting","remembering"]
    
    function Person(name,row){
        console.log("Person Created :"+name);
        this.name = name;
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
        this.row = row;
        document.getElementById("r"+this.row+"c3").innerHTML = this.action;
    }
    Person.prototype.update = function (){
        if (Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i]
            document.getElementById("r"+this.row+"c3").innerHTML = this.action;
        }
    }
})();