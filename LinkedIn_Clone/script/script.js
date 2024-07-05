// Get the element with the ID 'profileMenu'
const profileMenu = document.getElementById('profileMenu');

// Function to toggle the 'open-menu' class on the profileMenu element
function toggleMenu() {
    // Toggle the 'open-menu' class on the profileMenu element
    profileMenu.classList.toggle('open-menu');
}

// Get the sidebar activity element by its ID
const sidebarActivity = document.getElementById('sidebarActivity');

// Get the 'Show More' link element by its ID
const showMoreLink = document.getElementById('show-more-link');

// Function to toggle the activity section's visibility
function toggleActivity() {
    // Toggle the 'open-activity' class on the sidebar activity element
    sidebarActivity.classList.toggle('open-activity');
    
    // Check if the 'open-activity' class is present on the sidebar activity element
    if(sidebarActivity.classList.contains('open-activity')) {
        // If the class is present, update the 'Show More' link text to "Show less"
        showMoreLink.innerHTML = "Show less <b>-</b>";
    } else {
        // If the class is not present, update the 'Show More' link text to "Show more"
        showMoreLink.innerHTML = "Show more <b>+</b>";
    }
}
