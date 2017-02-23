(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var loadResult = function(inputValue, callback) {

    var URL = '/api/restaurants';

    $.ajax({
        url: URL,
        type: 'GET',
        data: JSON.stringify(inputValue),
        contentType: "application/json; charset=UTF-8",
        success: function(data) {
        
            callback(data);
        }
    });
};

module.exports.getRestaurant = loadResult;

},{}],2:[function(require,module,exports){
require('./utils.js');
require('./getRestaurant.js');
},{"./getRestaurant.js":1,"./utils.js":3}],3:[function(require,module,exports){
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

var showResultDom = function(result) {
    $('.result-search').addClass('show');
    $('.content-result').append(result);
};

//Fonction pour afficher les mots clés des restaurants
var showKeyWorkRestaurant = function(inputValue) {
    //je crée un tableau dans lequel je stock la valeur récupéré dans le champs du formulaire
    //stockRestaurant.push(inputValue);
    
    renderKeyWord(inputValue);
    //$('#key-word-field').html(stockRestaurant);

    loadResult(inputValue, function (callback) {
        //Ce que je souhaite, c'est de ne remonter que le bloc qui 
        //m'interesse vis à vis de ma recherche
        var result = '';
        for(var i = 0; i < callback.restaurants.length; i++) { 
            debugger
            var data = callback.restaurants[i].name.toLowerCase();
            if( data === inputValue) {
                result += '<div class="pure-u-1 pure-u-md-1-3"><div class="pricing-table pricing-table-free"><div class="pricing-table-header"><h2>' 
                       + callback.restaurants[i].name 
                       + '</h2><div>' 
                       + callback.restaurants[i].date 
                       + '</div></div></div>';
                
                //$('.result-search').html('');
                $('.result-search').addClass('show');
                $('.content-result').append(result);
            }
        }
    });
};

//J'affiche les mots clés dans la div correspondant à la recherche
var renderKeyWord = function(array) {
    var myWord = ' ';

    //array.forEach(function(keyWord) {
    myWord += array;
    //});
    $('#keyWord').html(myWord);
};

//Je soumet le formulaire et j'affiche les mots clés dans le DOM
$('.get-restaurant').submit(function(e) {

    e.preventDefault();
    deletePrevRequest();
    var inputValue = $('.field-search').val().toLowerCase();
    showKeyWorkRestaurant(inputValue);
});



//Vider le champs de la recherche
$('.btn-empty').on('click', function(e) {
    var $target = $(event.target);

    if($('.field-search').val !== '') {
        $('.field-search').val('');
        deletePrevRequest();
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
},{"./getRestaurant":1}]},{},[2]);
