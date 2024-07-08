// Select the element with the class 'menu-icon' and store it in a variable
const menuIcon = document.querySelector('.menu-icon');

// Select the element with the class 'left-sidebar' and store it in a variable
const leftSideBar = document.querySelector('.left-sidebar');

// Add an event listener to the menuIcon element, which listens for the 'click' event
menuIcon.onclick = function() {

    // When the menuIcon is clicked, toggle the class 'small-sidebar' on the leftSideBar element
    // This will likely change the width or visibility of the sidebar
    leftSideBar.classList.toggle('small-sidebar');
};
