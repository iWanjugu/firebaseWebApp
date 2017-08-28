//window.alert("YEEEEEEIIIIIII!");

    //Form IDs:
//First Name = exampleFirstName
//Second Name = exampleSecondName
//Email = exampleInputEmail
//Password = exampleInputPassword
//TextArea = exampleTextarea
//File = exampleInputFile

$(document).ready(function() {


   var fName, sName, email, password, textArea, inFile = "";

    $( "#subBtn" ).submit(function( event ) {
        fName = $("#exampleFirstName").val;
        sName = $("#exampleSecondName").val;
        email = $("exampleInputEmail").val;


        console.log("fName", fName);
        event.preventDefault();
    });



});
