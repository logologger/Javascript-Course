function validateForm() {
    //FirstName --- 30 characters
    //LastName --- 30 characters


    //
    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;

    var first_name_length = first_name.length;

    if (first_name_length > 30) {
        document.getElementById("msg_fname").style.display = "inline-block";
    } else {

        document.getElementById("msg_fname").style.display = "none";

    }

    var last_name_length = last_name.length;

    if (last_name_length > 30) {
        document.getElementById("msg_lname").style.display = "inline-block";
    } else {

        document.getElementById("msg_lname").style.display = "none";

    }

    var last_email_length = email.length; //asdj@dflk.csd

    if (last_email_length > 30) {
        document.getElementById("msg_email").style.display = "inline-block";
    } else {

        document.getElementById("msg_email").style.display = "none";

    }

    if(email.match(\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|  "(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|  \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@ (?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])? |  \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|  \\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])\z)==null){
    	//it is not valid
    	  document.getElementById("msg_email").style.display = "inline-block";
    } else {

        document.getElementById("msg_email").style.display = "none";

    }
    

    //Regular Expression in Javascript

    //anything -----any



}
