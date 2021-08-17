import "./style.css";

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

const btn = document.querySelector('[data-js="toggle"]');

btn.addEventListener("click", (e) => {
  const divApp = document.querySelector('[data-js="app"]');

  divApp.hasAttribute("hidden")
    ? divApp.removeAttribute("hidden")
    : divApp.setAttribute("hidden", true);
});
