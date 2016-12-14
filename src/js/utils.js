var loadResult      = require('./getRestaurant').getRestaurant;
var stockRestaurant = [];
var searchRestaurant = '';
var model           = null;

var deletePrevRequest = function() {
    $('.content-result').html('');
    $('#keyWord').html('');
};

//Fonction pour afficher les restaurants
/*function renderRestaurantDom(collection) {
    var proposal = '';
    collection.forEach(function(elt) {
        proposal += '<div class="pure-u-1 pure-u-md-1-3"><div class="pricing-table pricing-table-free"><div class="pricing-table-header"><h2>' + elt.name + '</h2><div>' + elt.date + '</div></div></div>';
    });
    $('.content-result').html(proposal);
};*/

//Fonction pour afficher les mots clés des restaurants
var showKeyWorkRestaurant = function(inputValue) {
    //je crée un tableau dans lequel je stock la valeur récupéré dans le champs du formulaire
    //stockRestaurant.push(inputValue);
    
    renderKeyWord(inputValue);
    //$('#key-word-field').html(stockRestaurant);

    loadResult(inputValue, function (callback) {
        //Ce que je souhaite, c'est de ne remonter que le bloc qui 
        //m'interesse vis à vis de ma recherche
        
        for(var i = 0; i < callback.restaurants.length; i++) { 
            if(callback.restaurants[i].name === inputValue) {
                var result = '';
                result += '<div class="pure-u-1 pure-u-md-1-3"><div class="pricing-table pricing-table-free"><div class="pricing-table-header"><h2>' + callback.restaurants[i].name + '</h2><div>' + callback.restaurants[i].date + '</div></div></div>';
                
                //$('.result-search').html('');
                $('.result-search').addClass('show');
                $('.content-result').append(result);
            } else {
                //result += '<p>Oops! Nous n\'avons rien n\'a vous proposez ...<br>Réessayez autre chose ...</p>';
                //$('.content-result').append(result);
                console.log('pas de résultat');
            }
        } 

    });
};

//J'affiche les mots clés dans la div correspondant à la recherche
var renderKeyWord = function(array) {
    var wordSpace = ' ';

    //array.forEach(function(keyWord) {
        wordSpace += array;
    //});
    $('#keyWord').html(wordSpace);
};



//Je soumet le formulaire et j'affiche les mots clés dans le DOM
$('.get-restaurant').submit(function(e) {
    e.preventDefault();
    deletePrevRequest();
    var inputValue = $('.field-search').val();
    showKeyWorkRestaurant(inputValue);
});



//Vider le champs de la recherche
$('.btn-empty').on('click', function(e) {
    var $target = $(event.target);

    if($('.field-search').val !== '') {
        $('.field-search').val('');
    }
});

//Menu Burger
//cf: http://codepen.io/tibomahe/pen/xVvMZN
$('.js-icon-menu').click(function() {
    $(this).toggleClass('active');
    $('.menu-vertical').toggleClass('is-menu-open');
});

$('.js-icon-menu').click(function(e) {
    var $target = $(event.target);

    if($target.hasClass('active')) {
        $('.overlay ').addClass('visible');
        $('.wrapper').addClass('active');
    } else {
        $('.wrapper').removeClass('active');
        $('.overlay ').removeClass('visible');
    }
});