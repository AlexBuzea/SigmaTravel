function validateFirstName () { //test input for 2-15 allowed characterSet
	var fName = document.getElementById("firstName").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if (re1.test(fName)) { //if input is valid, update page to show succesful entry
		document.getElementById("firstNamePrompt").style.color = "Green";
		document.getElementById("firstNamePrompt").innerHTML= "<strong>valid</strong>";
		return (true);
	
	}
	else { 
			document.getElementById("firstNamePrompt").style.color="Red";
			document.getElementById("firstNamePrompt").innerHTML= "<strong>Enter 2 to 15 characters</strong>";
			return (false);
	}
}
	
function validateLastName () { //test input for 2-25 allowed characters
	var lName = document.getElementById("lastName").value;
	var re2 = /^[a-zA-Z\s\'\-']{2,25}$/;


	if (re2.test(lName)) { 
		document.getElementById("lastNamePrompt").style.color = "Green";
		document.getElementById("lastNamePrompt").innerHTML= "<strong>valid</strong>";
		return (true);

}
	else { //if input is invalid, update page to prompt for new input
		document.getElementById("lastNamePrompt").style.color="Red";
		document.getElementById("lastNamePrompt").innerHTML= "<strong>Enter 2 to 25 characters</strong>";
		return (false);
	}
}

function validatePhone () { //test xxx-xxx-xxxx
	var phoneNumber = document.getElementById("phone").value;
	var re3 = /^\d{3}-\d{3}-\d{4}$/;
	
	if (re3.test(phoneNumber)) { //if input is valid
		document.getElementById("phonePrompt").style.color = "Green";
		document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
		return (true);
	}
	
	else { //if input is invalid
			document.getElementById("phonePrompt").style.color = "Red";
			document.getElementById("phonePrompt").innerHTML = "<strong> Use xxx-xxx-xxx</strong>";
			return (false);
		}
} //end function validaPhone




function calcOrder() {
		
		var firstName = document.getElementById("firstName").value;
		var lastName = document.getElementById("lastName").value;
		var userName = firstName + " " + lastName;
		var phone = document.getElementById("phone").value;
		var quantity = document.getElementById("quantity").value;
		var price = document.getElementById("price").value
		
		document.getElementById("orderConfirm").innerHTML = "<h2>Order Summary:<h2>";
		document.getElementById("orderConfirm").innerHTML += "<p>" + userName.toUpperCase() + "</br>" + phone + "</p>";
		document.getElementById("orderConfirm").innerHTML += "<p> Order Total: $" + price * quantity + "</p>";
}	