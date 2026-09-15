// script.js — VERSION FINALE 100% FONCTIONNELLE

document.addEventListener("DOMContentLoaded", () => {

  /* NAVIGATION ENTRE SECTIONS */
  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      let target = btn.dataset.section;

      document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
      document.getElementById(target).classList.add("active");
    });
  });

  /* OUVERTURE HARDWARE / SOFTWARE */
  const hardwareBlock = document.getElementById("hardware");
  const softwareBlock = document.getElementById("software");

  document.getElementById("open-hardware").onclick = () => {
    hardwareBlock.style.display = "block";
    softwareBlock.style.display = "none";
  };

  document.getElementById("open-software").onclick = () => {
    softwareBlock.style.display = "block";
    hardwareBlock.style.display = "none";
  };

  /* OUVERTURE DES DOSSIERS HARDWARE + SOFTWARE */
  document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", () => {
      let name = folder.dataset.folder || folder.dataset.software;

      document.querySelectorAll(".folder-content").forEach(fc => fc.style.display = "none");

      document.getElementById("folder-" + name).style.display = "block";
    });
  });

  /* BOUTONS RETOUR */
  document.querySelectorAll(".back").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".folder-content").forEach(fc => fc.style.display = "none");
    };
  });

});
