/*\\\\\\\\\\\\\\\\\\\\
    ITEMS / ARRAYS
\\\\\\\\\\\\\\\\\\\\*/
const headerItems = [headerHeading, headerPara, signUpBtn];
const navigationItems = [desktopLinks, logInBtn];
const hamburgerLines = document.querySelectorAll("button.hamburger-btn > span");
const sideMenuLinks = document.querySelectorAll("div.side-menu > a");

/* \\\\\\\\\\\\\\\\\\\\
      PRELOADER
\\\\\\\\\\\\\\\\\\\\*/
window.addEventListener("load", function () {
  // Expands the background image on load
  headerBackground.classList.add("preloader-header-img");

  // Fades In and slides from bottom on load [header heading, paragraph and button]
  headerItems.forEach(function (preload) {
    preload.classList.add("preloader-header-items");
  });

  // Navigation menu slides from top on load
  navigationMenu.classList.add("preloader-navigation");
});

/* 
  Minimizes the header image background when sign up btn is click
  Also removes the items when sign up btn is click 
*/
signUpBtn.addEventListener("click", function () {
  // The links and the button only in navigation menu
  navigationItems.forEach(function (items) {
    items.classList.add("removed");
  });

  hamburgerBtn.classList.add("removed");

  // Header Image Background
  headerBackground.classList.add("active");

  // All of the items within the header section [h1, p, button]
  headerItems.forEach(function (items) {
    items.classList.add("removed");
  });

  // The "X" logo appears that can be use to go back to home page
  backHomeBtn.classList.add("available");

  // Main Section/The form appears from the right
  mainSection.classList.add("active");
});

/* 
  When clicking on the "X" icon(back to home), 
  all of the class names(active, removed, available,) 
  will be removed and everything will go back to normal 
*/
backHomeBtn.addEventListener("click", function () {
  navigationItems.forEach(function (items) {
    items.classList.remove("removed");
  });

  hamburgerBtn.classList.remove("removed");

  headerBackground.classList.remove("active");

  headerItems.forEach(function (items) {
    items.classList.remove("removed");
  });

  backHomeBtn.classList.remove("available");

  mainSection.classList.remove("active");
});

// When clicking on the hamburger menu
hamburgerBtn.addEventListener("click", function () {
  // A side bar or menu appears from the right
  sideBar.classList.toggle("visible");
});

// When clicking on the hamburger menu, it changes to an X icon to indicate an exit out of the side menu
hamburgerBtn.addEventListener("click", function () {
  hamburgerLines.forEach(function (activate) {
    activate.classList.toggle("active");
  });
});

// When clicking on the links within the side bar, the side bar gets remove
sideMenuLinks.forEach(function (sideLinks) {
  sideLinks.addEventListener("click", function () {
    sideBar.classList.remove("visible");
  });
});
