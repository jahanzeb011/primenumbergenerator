// Go to the home page when the button is clicked
document.getElementById('goToHomePage').addEventListener('click', () => {
    window.location.href = 'home.html'; // Replace 'home.html' with your home page URL
    const utterance = new SpeechSynthesisUtterance("Welcome to Prime Number Generator.");
    speechSynthesis.speak(utterance);
});

