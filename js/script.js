// ============================================================
// PORTFOLIO — AHOUNOU Evrard
// Script principal : navigation entre sections + formulaire de contact
// ============================================================

// ---------------------------------------------------------------
// NAVIGATION — affichage de la section active (sidebar + tabbar mobile)
// ---------------------------------------------------------------
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');

  const btnNav = document.querySelector(`.nav-links button[data-section="${id}"]`);
  if (btnNav) btnNav.classList.add('active');
}

document.querySelectorAll('.nav-links button').forEach(btn => {
  btn.addEventListener('click', () => {
    showSection(btn.getAttribute('data-section'));
  });
});

// ---------------------------------------------------------------
// FORMULAIRE DE CONTACT — envoi AJAX (Formspree ou équivalent)
// ---------------------------------------------------------------
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var button = document.getElementById("my-form-button");
  var data = new FormData(event.target);
  
  button.disabled = true;
  status.innerHTML = "Envoi en cours...";
  status.style.color = "var(--ink)";

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "✓ Merci ! Votre message a bien été envoyé.";
      status.style.color = "#2e7d32";
      form.reset();
      button.disabled = false;
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oups! Un problème est survenu lors de l'envoi.";
        }
        status.style.color = "#d32f2f";
        button.disabled = false;
      })
    }
  }).catch(error => {
    status.innerHTML = "Oups! Un problème est survenu lors de l'envoi.";
    status.style.color = "#d32f2f";
    button.disabled = false;
  });
}
form.addEventListener("submit", handleSubmit)
