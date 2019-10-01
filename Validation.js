function ValidationFunction(){
	var fname = document.forms["InputValues"]["First"].value;
	var lname = document.forms["InputValues"]["Last"].value;
	var email = document.forms["InputValues"]["Email"].value;
	
	if (fname == "") {
		alert("Please fill out the first name field");
		return false;
	}
	
	if (lname == "") {
		alert("Please fill out the last name field");
		return false;
	}
	
	if (email == "") {
		alert("Please fill out the email filed");
		return false;
	}
}