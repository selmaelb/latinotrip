

function menuMobile() {
  var liste = document.getElementById("liste_section");
  console.log(liste);
  const element = document.getElementById("burgerid");
  const element2 = document.getElementById("burgerid2");
  const linksPres = document.getElementById("lienquisommesnous")
  const linksConnex = document.getElementById("lienconnexion")

  element.addEventListener("click", () => {
    liste.classList.remove("liste");
    liste.classList.add("liste", "show-liste");
 
    //liste.classList.toggle("show-liste");
    element.style.display = "none";
    element2.style.display = "block";
  });

  element2.addEventListener("click", () => {
    liste.classList.remove("show-liste");
    liste.classList.add("liste");
    // liste.classList.toggle("liste");
    element.style.display = "block";
    element2.style.display = "none";
  });


  linksPres.addEventListener('click', () => {
        liste.classList.remove('show-liste');
    });

    linksConnex.addEventListener('click', () => {
        liste.classList.remove('show-liste');
    });
}
menuMobile();