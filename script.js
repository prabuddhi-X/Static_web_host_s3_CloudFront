function showMessage() {
  const message = document.getElementById('message');
  message.textContent = "Thanks for clicking! You've deployed your site successfully.";
  message.classList.remove('hidden');
}
