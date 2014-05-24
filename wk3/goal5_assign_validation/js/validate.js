/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField("f_username");  //id = is the form input field ID
        validateField("f_email");
        validateField("f_phone");
        validateField("f_password");
        validateField("f_ssn");

        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === "f_username"){
            var pattern = ^([A-Z]+[a-zA-Z]*)(\s|\-)?([A-Z]+[a-zA-Z]*)?(\s|\-)?([A-Z]+[a-zA-Z]*)?$

        };
        if (inputName.name === "f_email"){
            var pattern = [-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}

        };
        if (inputName.name === "f_phone"){
            var pattern = ^([\(]{1}[0-9]{3}[\)]{1}[0-9]{3}[\-]{1}[0-9]{4})$

        };
        if (inputName.name === "f_password"){
            var pattern = ^[a-zA-Z]\w{3,14}$

        };
        if (inputName.name === "f_ssn"){
            var pattern = ^\d{3}-\d{2}-\d{4}$

        };

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



