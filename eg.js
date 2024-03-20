function validateForm() {
    var isValid = true;

    
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.textContent = '';
    });

    //  first name
    var fname = document.getElementById('fname').value.trim();
    if (fname === '') {
        document.getElementById('fname').style.border='2px solid red';
        document.getElementById('nameError').textContent = 'Please enter your First Name';
        isValid = false;
    }

    //  last name
    var lname = document.getElementById('lname').value.trim();
    if (lname === '') {
        document.getElementById('lnameError').textContent = 'Please enter your Last Name';
        isValid = false;
    }

    //  phone number
    var pno = document.getElementById('pno').value.trim();
    if (pno === '') {
        document.getElementById('phError').textContent = 'Please enter your Phone Number';
        isValid = false;
    }

    //  email
    var email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('emailError').textContent = 'Please enter your Email';
        isValid = false;
    }

    //  password
    var password = document.getElementById('password').value.trim();
    if (password === '') {
        document.getElementById('passError').textContent = 'Please enter your Password';
        isValid = false;
    }

    //  age
    var age = document.getElementById('age').value.trim();
    if (age === '') {
        document.getElementById('ageError').textContent = 'Please enter your Age';
        isValid = false;
    }

    //  address
    var address = document.getElementById('address').value.trim();
    if (address === '') {
        document.getElementById('addError').textContent = 'Please enter your Address';
        isValid = false;
    }

    //  gender
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your Gender';
        isValid = false;
    }

    //  skills
    var skills = document.querySelectorAll('input[name="skills"]:checked');
    if (skills.length === 0) {
        document.getElementById('skillsError').textContent = 'Please select at least one Skill';
        isValid = false;
    }

    //  district
    var district = document.getElementById('district').value;
    if (district === '') {
        document.getElementById('districtError').textContent = 'Please select your District';
        isValid = false;
    }

    return isValid;
    
}
