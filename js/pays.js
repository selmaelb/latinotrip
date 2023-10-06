function menuMobile2() {
    console.log("ccc")
    var liste2 = document.getElementById("liste_section_2");
    console.log(liste2);
    const element3 = document.getElementById("burgerid3");
    const element4 = document.getElementById("burgerid4");
    const linksPres2 = document.getElementById("lienquisommesnous_2");
    const linksConnex2 = document.getElementById("lienconnexion_2");
  
    element3.addEventListener("click", () => {
      console.log("hello")
      liste2.classList.remove("liste_2");
      liste2.classList.add("liste_2", "show-liste2");
   
      //liste.classList.toggle("show-liste");
      element3.style.display = "none";
      element4.style.display = "block";
    });
  
    element4.addEventListener("click", () => {
      liste2.classList.remove("show-liste2");
      liste2.classList.add("liste_2");
      // liste.classList.toggle("liste");
      element3.style.display = "block";
      element4.style.display = "none";
    });
  
  
    linksPres2.addEventListener('click', () => {
          liste2.classList.remove('show-liste2');
      });
  
      linksConnex2.addEventListener('click', () => {
          liste2.classList.remove('show-liste2');
      });
}
menuMobile2();
  
  
//Bouton interactif
const toggle = document.querySelector('.toggle');
  
toggle.addEventListener('click', () => {
    const shareBtn = document.querySelector('.share');
    shareBtn.classList.toggle('active');
  
});
  
  
//AFFICHER LES INFOS DU PAYS EN FONCTION DE LA PAGE SUR LAQUELLE ON EST
var pageUrl = window.location.pathname; // renvoie l'URL de la page
var pageID = pageUrl.substring(pageUrl.lastIndexOf('/')+1, pageUrl.lastIndexOf('.'));//renvoie le nom du pays de cet URL
  
var pays = data.pays.find(function(pays) {
    return pays.IdPays === pageID;
});
  
var pays_presentation =  "<h2>" + "   " + "<img id='drapeau' src='" + pays.Drapeau + "'>" + pays.Nom + " ... Nous voilà ! </h2>";
pays_presentation+= "<p>" + pays.Description + "</p>";
pays_presentation += "<img id='photopays' src='" + pays.Photo + "'>";
  
  
// affiche le contenu dans la div "pays-info"
var paysInfo = document.getElementById("pays-info");
paysInfo.innerHTML = pays_presentation;
  

//AFFICHER LES INFOS CUISINE QUAND ON CLIQUE SUR CUISINE  
function afficherCuisine() {
    // vide la div "pays-info"
    paysInfo.innerHTML = "";
  
    // récupère les informations du pays correspondant à l'ID "bresil"
    var PaysCuisine = data.PaysCuisine.filter(function(PaysCuisine) {
      return PaysCuisine.IdPaysCuisine === pageID;
      
    });
  
    var content = "<h2>" + pays.Nom + " : que pouvons nous manger ?</h2>";
  
    for (var i = 0; i < PaysCuisine.length; i++) {
      var IdCuisineLien = PaysCuisine[i].IdCuisineLien;
  
      for (var j = 0; j < data.cuisine.length; j++) {
        var Cuisine = data.cuisine[j];
  
        if (Cuisine.IdCuisine === IdCuisineLien) {
          if (i % 2 === 0) {
            // image à gauche, texte à droite pour les spécialités impaires
            content += "<div class='row-specialite'><img id='cuisinephoto' src='" + Cuisine.Image + "'><p>" + Cuisine.Description + "</p></div>";
          } else {
            // texte à gauche, image à droite pour les spécialités paires
            content += "<div class='row-specialite'><p>" + Cuisine.Description + "</p><img id='cuisinephoto' src='" + Cuisine.Image + "'></div>";
          }
        }
      }
    }
    
    // affiche le contenu dans la div "pays-info-categorie"
    var pays_info_categorie = document.getElementById("pays-info-categorie");
    pays_info_categorie.innerHTML = content;
};

// récupérer le bouton correspondant pour afficher cette info
var cuisineBtn = document.getElementById("btn-cuisine");
cuisineBtn.addEventListener("click", afficherCuisine);
// idem pour version mobile
var cuisineBtnMobile = document.getElementById("btn-cuisine-mob");
cuisineBtnMobile.addEventListener("click", afficherCuisine);
  
  
  
  
  
//AFFICHER LES INFOS NATURE QUAND ON CLIQUE SUR NATURE
function afficherNature() {
    // vide la div "pays-info"
    paysInfo.innerHTML = "";
    
    // récupère les informations du pays correspondant à l'ID "bresil"
    var PaysNature = data.PaysNature.filter(function(PaysNature) {
        return PaysNature.IdPaysNature === pageID;
        
    });
    
    var content = "<h2>" + pays.Nom + " : quels paysages pouvons-nous découvrir ?</h2>";
    
    for (var i = 0; i < PaysNature.length; i++) {
        var IdNatureLien = PaysNature[i].IdNatureLien;
    
        for (var j = 0; j < data.nature.length; j++) {
            var Nature = data.nature[j];
    
            if (Nature.IdNature === IdNatureLien) {
            if (i % 2 === 0) {
                // image à gauche, texte à droite pour les spécialités impaires
                content += "<div class='row-specialite'><img id='cuisinephoto' src='" + Nature.Image + "'><p>" + Nature.Description + "</p></div>";
            } else {
                // texte à gauche, image à droite pour les spécialités paires
                content += "<div class='row-specialite'><p>" + Nature.Description + "</p><img id='cuisinephoto' src='" + Nature.Image + "'></div>";
            }
            }
        }
        }
        
        
    // affiche le contenu dans la div "pays-info-categorie"
    var pays_info_categorie = document.getElementById("pays-info-categorie");
    pays_info_categorie.innerHTML = content;
};

// récupérer le bouton correspondant pour afficher cette info
var natureBtn = document.getElementById("btn-nature");
natureBtn.addEventListener("click", afficherNature);
// idem pour version mobile
var natureBtnMobile = document.getElementById("btn-nature-mob");
natureBtnMobile.addEventListener("click", afficherNature);
  
  
  
  
//AFFICHER LES INFOS CULTURE QUAND ON CLIQUE SUR CULTURE
function afficherCulture() {
    // vide la div "pays-info"
    paysInfo.innerHTML = "";
  
    // récupère les informations du pays correspondant à l'ID "bresil"
    var PaysCulture = data.PaysCulture.filter(function(PaysCulture) {
      return PaysCulture.IdPaysCulture === pageID;
      
    });
  
    var content = "<h2>" + pays.Nom + " : quelles cultures à découvrir ?</h2>";
  
    for (var i = 0; i < PaysCulture.length; i++) {
      var IdCultureLien = PaysCulture[i].IdCultureLien;
  
      for (var j = 0; j < data.culture.length; j++) {
        var Culture = data.culture[j];
  
        if (Culture.IdCulture === IdCultureLien) {
          if (i % 2 === 0) {
            // image à gauche, texte à droite pour les spécialités impaires
            content += "<div class='row-specialite'><img id='cuisinephoto' src='" + Culture.Image + "'><p>" + Culture.Description + "</p></div>";
          } else {
            // texte à gauche, image à droite pour les spécialités paires
            content += "<div class='row-specialite'><p>" + Culture.Description + "</p><img id='cuisinephoto' src='" + Culture.Image + "'></div>";
          }
        }
      }
    }
    
    // affiche le contenu dans la div "pays-info-categorie"
    var pays_info_categorie = document.getElementById("pays-info-categorie");
    pays_info_categorie.innerHTML = content;
};

// récupérer le bouton correspondant pour afficher cette info
var cultureBtn = document.getElementById("btn-culture");
cultureBtn.addEventListener("click", afficherCulture);
// idem pour version mobile
var cultureBtnMobile = document.getElementById("btn-culture-mob");
cultureBtnMobile.addEventListener("click", afficherCulture);
  
  
  
  
  
  
  
//AFFICHER LES INFOS SPORT QUAND ON CLIQUE SUR SPORT
function afficherSport() {
    // vide la div "pays-info"
    paysInfo.innerHTML = "";
  
    // récupère les informations du pays correspondant à l'ID "bresil"
    var PaysSport = data.PaysSport.filter(function(PaysSport) {
      return PaysSport.IdPaysSport === pageID;
      
    });
  
    var content = "<h2>" + pays.Nom + " : quels sports pratique-t-on ?</h2>";
  
    for (var i = 0; i < PaysSport.length; i++) {
      var IdSportLien = PaysSport[i].IdSportLien;
  
      for (var j = 0; j < data.sport.length; j++) {
        var Sport = data.sport[j];
  
        if (Sport.IdSport === IdSportLien) {
          if (i % 2 === 0) {
            // image à gauche, texte à droite pour les spécialités impaires
            content += "<div class='row-specialite'><img id='cuisinephoto' src='" + Sport.Image + "'><p>" + Sport.Description + "</p></div>";
          } else {
            // texte à gauche, image à droite pour les spécialités paires
            content += "<div class='row-specialite'><p>" + Sport.Description + "</p><img id='cuisinephoto' src='" + Sport.Image + "'></div>";
          }
        }
      }
    }
    
    // affiche le contenu dans la div "pays-info-categorie"
    var pays_info_categorie = document.getElementById("pays-info-categorie");
    pays_info_categorie.innerHTML = content;
};

// récupérer le bouton correspondant pour afficher cette info
var sportBtn = document.getElementById("btn-sport");
sportBtn.addEventListener("click", afficherSport);
// idem pour version mobile
var sportBtnMobile = document.getElementById("btn-sport-mob");
sportBtnMobile.addEventListener("click", afficherSport);