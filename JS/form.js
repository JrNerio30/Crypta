const firstFormInputs = [fullNameField, emailField, passwordField];
const secondFormInputs = [
  phoneNumberField,
  cityField,
  province,
  addressField,
  day,
  month,
  year,
];
const thirdFormInputs = [investmentGoals, investmentExperience, annualIncome];
const finalFormInputs = [cardHolderName, cardNumber, expiryDate, cvv];
const thirdFormOptionsId = [
  investmentGoals.id,
  investmentExperience.id,
  annualIncome.id,
];



function checkInputs(inputs) {
  let allFilled = true;

  inputs.forEach((input) => {
    // Check if input is empty
    if (
      (input.value.trim() === "") ||
      (input.id === "province" && input.value === "Province") ||
      (thirdFormOptionsId.includes(input.id) && input.value === "firstOption")
    ) {
      input.classList.add("not-valid");
      allFilled = false;
    } else if (input.hasAttribute("pattern")) {
      // Check if input value matches pattern
      const pattern = new RegExp(input.getAttribute("pattern"));
      if (!pattern.test(input.value)) {
        input.classList.add("not-valid");
        allFilled = false;
      } else {
        input.classList.remove("not-valid");
      }
    } else {
      input.classList.remove("not-valid");
    }
  });

  return allFilled;
}

// Event listener for the submit button to check first form section
createAccount.addEventListener("click", (event) => {
  event.preventDefault();

  let inputsFilled = checkInputs(firstFormInputs);

  // Check if terms and conditions checkbox is checked
  if (!termsOfConditions.checked) {
    agreeToTerms.innerHTML =
      "* Please agree to our Terms and Conditions to proceed.";
    inputsFilled = false;
  } else {
    agreeToTerms.innerHTML = "";
  }

  // If all inputs are filled and checkbox is checked, show next section
  if (inputsFilled) {
    firstFormSection.classList.add("created"); // Hide first section
    secondFormSection.classList.add("current"); // Show second section
  }
});

// Event listener for the next button to check second form section
nextButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (checkInputs(secondFormInputs)) {
    // Add logic here to move to the next section or submit the form
    secondFormSection.classList.remove("current");
    thirdFormSection.classList.add("current");
  }
});

nextButton2.addEventListener("click", (event) => {
  event.preventDefault();

  if (checkInputs(thirdFormInputs)) {
    thirdFormSection.classList.remove("current");
    
    finalFormSection.classList.add("current");
  }
});

// Clicking on the back button (this back button is from the second step)
backBtn.addEventListener("click", (event) => {
  event.preventDefault();

  thirdFormSection.classList.remove("current");

  secondFormSection.classList.add("current");
});

doItLater.addEventListener('click', (event) => {
  event.preventDefault()

  navigationItems.forEach(function (items) {
    items.classList.remove("removed");
  });

  hamburgerBtn.classList.remove("removed");

  headerItems.forEach(function (items) {
    items.classList.remove("removed");
  });

  headerBackground.classList.remove('active');
  mainSection.classList.remove('active');

  signUpBtn.innerHTML = "Finish Registration";
})


submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  if(checkInputs(finalFormInputs)){
    navigationItems.forEach(function (items) {
      items.classList.remove("removed");
    });
  
    hamburgerBtn.classList.remove("removed");
  
    headerHeading.classList.remove('removed');
  
    headerBackground.classList.remove('active');
    mainSection.classList.remove('active');

    headerHeading.innerHTML = `Welcome To Crpyta ${fullNameField.value}`;
    
  }
})

form.addEventListener("input", function () {
  // this checks if the input value is empty or if it's just space = " "
  const validateInput = (input) => {
    if (input.value.trim() === "") {
      input.classList.remove("valid");
      return false;
    }

    // Check for province and first option specific to different form sections
    if ((input.id === "province" && input.value === "Province") || 
        (thirdFormInputs.includes(input) && input.value === "firstOption")) {
      input.classList.remove("valid");
      return false;
    }

    // If the input has a pattern, validate it
    if (input.hasAttribute("pattern")) {
      const pattern = new RegExp(input.getAttribute("pattern"));
      if (!pattern.test(input.value)) {
        input.classList.remove("valid");
        return false;
      }
    }

    // If all checks pass, add the valid class
    input.classList.add("valid");
    return true;
  };

  // Validate inputs in each form group
  /* 
  These three dotted is a spread syntax which 
  combines all of the inputs within each arrays, 
  combining them all together and all spread apart

  ex. [fullNameField...etc, phoneNumberField...etc, investmentGoals...etc, finalFormInputs...etc]
  */ 
  [...firstFormInputs, ...secondFormInputs, ...thirdFormInputs, ...finalFormInputs].forEach(validateInput);
});


