
// First Name

function validateForm() {
    let name = document.getElementById('fname').value;
    if(name == "") {
        alert("Name must be filled out");
        return false;
}
    let regName = /^[a-zA-Z]+$/;
    if (!regName.test(name)) {
        alert('Name must have alphabet characters only');
        document.getElementById('name').focus();
        return false;
    } else {
        alert('Valid name given.');
        return true;
    }
}

// Last Name

function validateForm() {
    let name = document.getElementById('lname').value;
    if(name == "") {
        alert("Name must be filled out");
        return false;
}
    let regName = /^[a-zA-Z]+$/;
    if (!regName.test(name)) {
        alert('Name must have alphabet characters only).');
        document.getElementById('name').focus();
        return false;
    }else{
        alert('Valid name given.');
        return true;
    }
}

// Email

function validateForm() {
    let email = document.getElementById('uemail').value;
    if(email == "") {
        alert("Email must be filled out");
        return false;
}
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(format))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}

// // Contact 

function validateForm() {
    let contact = document.getElementById('phone').value;
    if(contact == NaN) {
        alert("Contact must be filled out");
        return false;
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (contact.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("Please enter valid number");
        return false;
        }

}
}

// Validate DOB

function validateForm() {
let day = 12;
let month = 12;
let year = 2006;
let age = 18;
let setDate = new Date(year + age, month - 1, day);
let currdate = new Date();

if (currdate >= setDate) {
  // you are above 18
  alert("above 18");
} else {
  alert("below 18");
}
}