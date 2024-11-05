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
      (input.value.trim()) === "" ||
      (input.id === "province" && input.value === "Province") ||
      (thirdFormOptionsId.includes(input.id) && input.value === "firstOption")
    ) {
      input.classList.add("not-valid");
      allFilled = false;
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

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  if(checkInputs(finalFormInputs)){
    console.log("Your account has been submitted!");
  }
})

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


// If there is something being written on the inputs
form.addEventListener("input", function () {
  firstFormInputs.forEach(function (input) {
    if (input.value) {
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
    }
  });

  secondFormInputs.forEach(function (input) {
    if (input.value && input.value !== "Province") {
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
    }
  });

  thirdFormInputs.forEach(function (input) {
    if (input.value !== "firstOption") {
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
    }
  });

  finalFormInputs.forEach(function (input) {
    if (input.value) {
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
    }
  });
});
