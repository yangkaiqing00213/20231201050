// Single Page Application JavaScript
// Handles page navigation without reloading

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initSinglePageApp();
});

function initSinglePageApp() {
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.nav-buttons button');
    
    // Get all page elements
    const pages = document.querySelectorAll('.page');
    
    // Add click event listeners to all navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            switchPage(targetPage);
            updateActiveButton(this);
        });
    });
    
    // Set initial state
    showPage('page1');
    
    console.log('Single Page Application initialized successfully!');
}

function switchPage(pageId) {
    // Hide all pages
    hideAllPages();
    
    // Show the target page
    showPage(pageId);
    
    // Update browser history (optional - for back/forward navigation)
    updateHistory(pageId);
}

function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
}

function showPage(pageId) {
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Add a smooth animation effect
        targetPage.style.opacity = '0';
        targetPage.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            targetPage.style.transition = 'all 0.3s ease';
            targetPage.style.opacity = '1';
            targetPage.style.transform = 'translateY(0)';
        }, 10);
        
        console.log(`Switched to page: ${pageId}`);
    } else {
        console.error(`Page with id '${pageId}' not found!`);
    }
}

function updateActiveButton(activeButton) {
    // Remove active class from all buttons
    const navButtons = document.querySelectorAll('.nav-buttons button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Add active class to clicked button
    activeButton.classList.add('active');
}

function updateHistory(pageId) {
    // Update URL hash for bookmarking and back/forward navigation
    window.location.hash = pageId;
}

// Handle browser back/forward navigation
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1); // Remove the '#'
    if (hash) {
        switchPage(hash);
        
        // Update active button
        const activeButton = document.querySelector(`[data-page="${hash}"]`);
        if (activeButton) {
            updateActiveButton(activeButton);
        }
    }
});

// Initialize based on URL hash if present
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        switchPage(hash);
        const activeButton = document.querySelector(`[data-page="${hash}"]`);
        if (activeButton) {
            updateActiveButton(activeButton);
        }
    }
});

// Additional utility functions
function getCurrentPage() {
    const activePage = document.querySelector('.page.active');
    return activePage ? activePage.id : null;
}

function navigateToNextPage() {
    const currentPage = getCurrentPage();
    if (currentPage) {
        const pageNumber = parseInt(currentPage.replace('page', ''));
        const nextPageNumber = pageNumber < 3 ? pageNumber + 1 : 1;
        switchPage(`page${nextPageNumber}`);
    }
}

function navigateToPreviousPage() {
    const currentPage = getCurrentPage();
    if (currentPage) {
        const pageNumber = parseInt(currentPage.replace('page', ''));
        const prevPageNumber = pageNumber > 1 ? pageNumber - 1 : 3;
        switchPage(`page${prevPageNumber}`);
    }
}

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        return; // Don't interfere with browser shortcuts
    }
    
    switch(event.key) {
        case 'ArrowRight':
        case 'd':
            navigateToNextPage();
            event.preventDefault();
            break;
        case 'ArrowLeft':
        case 'a':
            navigateToPreviousPage();
            event.preventDefault();
            break;
        case '1':
            switchPage('page1');
            event.preventDefault();
            break;
        case '2':
            switchPage('page2');
            event.preventDefault();
            break;
        case '3':
            switchPage('page3');
            event.preventDefault();
            break;
    }
});