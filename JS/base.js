const navigationMenu = document.querySelector('nav')
const headerItems = [headerHeading, headerPara, signUpBtn];
const navLinks = document.querySelector('nav > section');
const navigationItems = [navLinks, logInBtn];
const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerLines = document.querySelectorAll('button.hamburger-btn > span');
const sideBar = document.querySelector(".side-bar");
const sideMenuLinks = document.querySelectorAll('section.side-menu > a');

// Minimizes the header image background when sign up btn is click
// Also removes the items when sign up btn is click
signUpBtn.addEventListener('click', function() {

  headerBackground.classList.add('active');

  headerItems.forEach(function(items){
    items.classList.add('removed');
  })

  backHomeBtn.classList.add('available');
  
  navigationItems.forEach(function(items) {
    items.classList.add('removed');
  });
})

// When clicking on back to home button
backHomeBtn.addEventListener('click', function() {
  headerBackground.classList.remove('active');

  headerItems.forEach(function(items){
    items.classList.remove('removed');
  });

  backHomeBtn.classList.remove('available');

  navigationItems.forEach(function(items) {
    items.classList.remove('removed');
  });
});

// When clicking on the hamburger menu
hamburgerBtn.addEventListener("click", function () {
  sideBar.classList.toggle("visible");
});

// When clicking on the hamburger menu, it change to an X to indicate an exit
hamburgerBtn.addEventListener('click', function() {
  hamburgerLines.forEach(function(activate){
    activate.classList.toggle('active');
  });
});

// When clicking on the links within the side bar, the side bar gets remove
sideMenuLinks.forEach(function(sideLinks) {
  sideLinks.addEventListener('click', function() {
    sideBar.classList.remove('visible');
  })
})


