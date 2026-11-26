const greeting = document.getElementById("greeting");

const hour = new Date().getHours();
let message;

if (hour < 12) {
  message = "Good morning!";
} else if (hour < 18) {
  message = "Good afternoon!";
} else {
  message = "Good evening!";
}

greeting.textContent = message + " Welcome to my portfolio.";