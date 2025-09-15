const name = "test";
const password = "1234";

const app = document.getElementById("app");

if (localStorage.getItem("loggedIn") === "true") {
  renderWelcomePage();
} else {
  renderLoginPage();
}

function renderLoginPage() {
  app.innerHTML = 
   `<h2>Login</h2>
    <input type="text" id="username" placeholder="Enter Name"><br><br>
    <input type="password" id="password" placeholder="Enter Password"><br><br>
    <button id="loginBtn">Log In</button>`;

  document.getElementById("loginBtn").addEventListener("click", handleLogin);
}

function renderWelcomePage() {
  app.innerHTML = 
   `<h2>Welcome to My site!</h2>
    <button id="logoutBtn">Log Out</button>`;
  document.getElementById("logoutBtn").addEventListener("click", handleLogout);
}

function renderErrorPage() {
  app.innerHTML = 
   `<h2>Something went wrong. Wrong credentials!</h2>
    <button id="backBtn">Try Again</button>`;
  document.getElementById("backBtn").addEventListener("click", renderLoginPage);
}

function handleLogin() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === name && p === password) {
    localStorage.setItem("loggedIn", "true");
    renderWelcomePage();
  } else {
    renderErrorPage();
  }
}

function handleLogout() {
  localStorage.removeItem("loggedIn");
  renderLoginPage();
}