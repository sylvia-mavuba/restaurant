var loadResult      = require('./getRestaurant').getRestaurant;
var stockRestaurant = [];
var model           = null;

//Fonction pour afficher les restaurants
function renderRestaurantDom(collection) {
    var proposal = '';
    collection.forEach(function(elt) {
        proposal += '<div class="pure-u-1 pure-u-md-1-3"><div class="pricing-table pricing-table-free"><div class="pricing-table-header"><h2>' + elt.name + '</h2><div>' + elt.date + '</div></div></div>';
    });
    $('.content-result').html(proposal);
};

//Fonction pour afficher les mots clés des restaurants
var showKeyWorkRestaurant = function(inputValue) {

    
    //je crée un tableau dans lequel je stock la valeur récupéré dans le champs du formulaire
    stockRestaurant.push(inputValue);

    renderKeyWord(stockRestaurant);
    //$('#key-word-field').html(stockRestaurant);

    loadResult(inputValue, function (resp) {
        //Ce que je souhaite, c'est de ne remonter que le bloc qui 
        //m'interesse vis à vis de ma recherche


        console.log(resp.restaurants);
        var filteredModel = _.sortBy(resp.restaurants, 'name');
        /*debugger
        if(inputValue === filteredModel){
            model = filteredModel;
            renderRestaurantDom(model);
        }*/
        
        var myFilter = resp.restaurants[0].name;
        debugger
         myFilter.forEach(function (name) {
            if(inputValue === (resp.restaurants, 'name')){

            }
         });
    });

};

//J'affiche les mots clés dans la div correspondant à la recherche
var renderKeyWord = function(array) {
    var wordSpace = ' ';

    array.forEach(function(keyWord) {
        wordSpace += keyWord;
    });
    $('#keyWord').html(wordSpace);
};

//Je soumet le formulaire et j'affiche les mots clés dans le DOM
$('.get-restaurant').submit(function(e) {
    e.preventDefault();
    
    //var inputValue = e.target.innerHTML;
    var inputValue = $('.field-search').val();
    showKeyWorkRestaurant(inputValue);
});



