import './style.css';

let isInAllCommunitiesView = false; // Variable to track the view state

export function myFunction() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('myLinks');
    const content = document.querySelector('.content');

    // Toggle Sidebar Visibility
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-22%'; // Slide sidebar out
        sidebar.style.display = 'none';
        overlay.style.display = 'none'; // Hide overlay
        content.classList.remove('blur'); // Remove blur effect
    } else {
        sidebar.style.left = '0px'; // Slide sidebar in
        sidebar.style.display = 'block';
        overlay.style.display = 'block'; // Show overlay
        content.classList.add('blur'); // Add blur effect
    }
}

// Handle clicks on the menu toggle
document.querySelector('#menu-toggle').onclick = function () {
    const menuContent = document.getElementById('menu-content');
    const allCommunities = document.getElementById('all-communities');
    const sidebarTitle = document.getElementById('sidebar-title');
    const closeButton = document.querySelector('.closebtn');
    const backButton = document.querySelector('.backbtn');

    if (isInAllCommunitiesView) {
        // Go back to the main menu
        menuContent.style.display = 'block';
        allCommunities.style.display = 'none';
        sidebarTitle.textContent = 'MENU';
        closeButton.style.display = 'block'; // Show close button again
        backButton.style.display = 'none'; // Hide back button
        isInAllCommunitiesView = false;
    } else {
        // Show the "All Communities" section
        menuContent.style.display = 'none';
        allCommunities.style.display = 'block';
        sidebarTitle.textContent = 'All Communities';
        closeButton.style.display = 'none'; // Hide close button
        backButton.style.display = 'block'; // Show back button
        isInAllCommunitiesView = true;
    }
};

// Handle clicks on the back button to return to the main menu
document.querySelector('.backbtn').onclick = function () {
    document.querySelector('#menu-toggle').click(); // Simulate click to go back
};

// Handle clicks on the close button to close the sidebar
document.querySelector('.closebtn').onclick = function () {
    if (isInAllCommunitiesView) {
        // If in "All Communities", go back to the main menu
        document.querySelector('.backbtn').click(); // Simulate back button click
    } else {
        // Close the sidebar if in the main menu
        myFunction();
    }
};
