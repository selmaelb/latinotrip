// PAYS
function loadPays() {
    // Récupérer le selecteur
    const select = document.getElementById('liste_pays');
      
    // Parcourir la liste des genres et ajouter chaque genre dans le selecteur
    for (const pays of data.pays) {
        const option = document.createElement('option');
        option.value = pays.IdPays;
        option.textContent = pays.IdPays;
        select.appendChild(option);
    }
}
loadPays();


function paysChanged() {
    const select = document.getElementById('liste_pays');
    const selectedPaysId = select.value;
    const selectedPays = data.pays.find(pays => pays.IdPays === selectedPaysId); 
    console.log('Pays sélectionné : ', selectedPays); 
    loadPays(selectedPays)
}
//Quand l'évènement change apparait, on appelle la fonction qui fait que ca affiche dans la console le genre selectionné
const selectpays = document.getElementById('liste_pays');
selectpays.addEventListener('change', paysChanged);







// CUISINE
function loadCuisine() {
    // Récupérer le selecteur
    const select = document.getElementById('liste_cuisine');
      
    // Parcourir la liste des genres et ajouter chaque genre dans le selecteur
    for (const cuisine of data.cuisine) {
        const option = document.createElement('option');
        option.value = cuisine.IdCuisine;
        option.textContent = cuisine.IdCuisine;
        select.appendChild(option);
    }
}
loadCuisine();


function cuisineChanged() {
    const select = document.getElementById('liste_cuisine');
    const selectedCuisineId = select.value;
    const selectedCuisine = data.cuisine.find(cuisine => cuisine.IdCuisine === selectedCuisineId); 
    console.log('Cusisine sélectionné : ', selectedCuisine); 
    loadCuisine(selectedCuisine)
}
//Quand l'évènement change apparait, on appelle la fonction qui fait que ca affiche dans la console le genre selectionné
const selectcuisine = document.getElementById('liste_cuisine');
selectcuisine.addEventListener('change', cuisineChanged);




// NATURE
function loadNature() {
    // Récupérer le selecteur
    const select = document.getElementById('liste_nature');
      
    // Parcourir la liste des genres et ajouter chaque genre dans le selecteur
    for (const nature of data.nature) {
        const option = document.createElement('option');
        option.value = nature.IdNature;
        option.textContent = nature.IdNature;
        select.appendChild(option);
    }
}
loadNature();

function natureChanged() {
    const select = document.getElementById('liste_nature');
    const selectedNatureId = select.value; 
    const selectedNature = data.nature.find(nature => nature.IdNature === selectedNatureId); 
    console.log('Nature sélectionné : ', selectedNature); 
    loadNature(selectedNature)
}
//Quand l'évènement change apparait, on appelle la fonction qui fait que ca affiche dans la console le genre selectionné
const selectnature = document.getElementById('liste_nature');
selectnature.addEventListener('change', natureChanged);




// CULTURE
function loadCulture() {
    // Récupérer le selecteur
    const select = document.getElementById('liste_culture');
      
    // Parcourir la liste des genres et ajouter chaque genre dans le selecteur
    for (const culture of data.culture) {
        const option = document.createElement('option');
        option.value = culture.IdCulture;
        option.textContent = culture.IdCulture;
        select.appendChild(option);
    }
}
loadCulture();


function cultureChanged() {
    const select = document.getElementById('liste_culture');
    const selectedCultureId = select.value;
    const selectedCulture = data.culture.find(culture => culture.IdCulture === selectedCultureId);
    console.log('Culture sélectionné : ', selectedCulture); 
    loadCulture(selectedCulture)
}
//Quand l'évènement change apparait, on appelle la fonction qui fait que ca affiche dans la console le genre selectionné
const selectculture = document.getElementById('liste_culture');
selectculture.addEventListener('change', cultureChanged);





// SPORT
function loadSport() {
    // Récupérer le selecteur
    const select = document.getElementById('liste_sport');
      
    // Parcourir la liste des genres et ajouter chaque genre dans le selecteur
    for (const sport of data.sport) {
        const option = document.createElement('option');
        option.value = sport.IdSport;
        option.textContent = sport.IdSport;
        select.appendChild(option);
    }
}
loadSport();


function sportChanged() {
    const select = document.getElementById('liste_sport');
    const selectedSportId = select.value;
    const selectedSport = data.sport.find(sport => sport.IdSport === selectedSportId); 
    console.log('Sport sélectionné : ', selectedSport); 
    loadSport(selectedSport)
}
//Quand l'évènement change apparait, on appelle la fonction qui fait que ca affiche dans la console le genre selectionné
const selectsport = document.getElementById('liste_sport');
selectsport.addEventListener('change', sportChanged);
