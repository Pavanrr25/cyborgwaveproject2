// Function to open modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Placeholder function for handling Get ExpressVPN form submission
function handleGetExpressVPN() {
    // Simulate form submission (replace with actual backend integration)
    alert('Form submitted! This is a placeholder function.');
    closeModal('getExpressVPNModal');
    return false; // Prevent form from submitting and page refreshing
}

// Placeholder function for selecting a pricing plan
function selectPlan(plan) {
    // Simulate plan selection (replace with actual logic)
    alert('Selected plan: ' + plan);
}
