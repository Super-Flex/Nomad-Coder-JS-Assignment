const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout-form");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.add("inline");
}
function onLogoutSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logout.classList.add(HIDDEN_CLASSNAME);
    logout.classList.remove("inline");
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
logout.addEventListener("submit", onLogoutSubmit);
loginForm.addEventListener("submit", onLoginSubmit);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.add(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUsername);
}