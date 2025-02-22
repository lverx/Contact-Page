const continueButton = document.getElementById('continue-btn');
const warningModal = document.getElementById('trigger-warning');
const pageContent = document.getElementById('page-content');

continueButton.addEventListener('click', function() {
    warningModal.style.display = 'none'; // Hide the modal
    pageContent.classList.remove('hidden'); // Show the page content
    document.body.style.overflow = 'auto'; // Enable scrolling
});


