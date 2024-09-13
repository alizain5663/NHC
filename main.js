import './style.css';

let isInAllCommunitiesView = false; // Variable to track the view state

export function myFunction() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('myLinks');
    const content = document.querySelector('.content');
    const menuContent = document.getElementById('menu-content');
    const allCommunities = document.getElementById('all-communities');
    const sidebarTitle = document.getElementById('sidebar-title');
    const closeButton = document.querySelector('.closebtn');

    // Toggle Sidebar Visibility
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-22%'; // Slide sidebar out
        overlay.style.display = 'none'; // Hide overlay
        content.classList.remove('blur'); // Remove blur effect
    } else {
        sidebar.style.left = '0px'; // Slide sidebar in
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

    if (isInAllCommunitiesView) {
        // Show main menu items
        menuContent.style.display = 'block';
        allCommunities.style.display = 'none';
        sidebarTitle.textContent = 'قائمة طعام';
        closeButton.textContent = '×';
        document.querySelector('#menu-toggle').textContent = 'جميع المجتمعات'; // Reset text
        isInAllCommunitiesView = false;
    } else {
        // Show "All Communities" section
        menuContent.style.display = 'none';
        allCommunities.style.display = 'block';
        sidebarTitle.textContent = 'جميع المجتمعات';
        closeButton.textContent = '>'; // Update to '>'
        document.querySelector('#menu-toggle').textContent = 'MENU';
        isInAllCommunitiesView = true;
    }
};

// Handle clicks on the close button
document.querySelector('.closebtn').onclick = function () {
    if (isInAllCommunitiesView) {
        // If currently in the "All Communities" view, go back to the previous view
        document.querySelector('#menu-toggle').click(); // Simulate a click on the menu toggle
    } else {
        // Otherwise, close the sidebar
        myFunction();
    }
};
