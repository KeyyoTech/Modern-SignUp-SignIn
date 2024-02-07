const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Function to show a notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000); // Remove notification after 3 seconds
}

// Event delegation for the question icon
document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const socialIconsContainer = clickedElement.closest('.social-icons');
    if (socialIconsContainer) {
        const icon = clickedElement.closest('.icon');
        if (icon && icon.querySelector('i.fa-question')) {
            showNotification('This Site Is Scripted By Dev Name Chriss Jericho');
        }
    }
});

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});
