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
    }
})();