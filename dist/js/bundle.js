(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var loadResult = function(inputValue, callback) {

    var URL = '/api/restaurants';

    $.ajax({
        url: URL,
        type: 'GET',
        data: inputValue,
        success: function(data) {
            console.log(data);
        }
    });
};

module.exports.getRestaurant = loadResult;

},{}],2:[function(require,module,exports){
require('./utils.js');
require('./getRestaurant.js');
},{"./getRestaurant.js":1,"./utils.js":3}],3:[function(require,module,exports){
var loadResult = require('./getRestaurant').getRestaurant;

var stockRestaurant = [];
var model                 = null;

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
    console.log(stockRestaurant);

    debugger
    renderKeyWord(stockRestaurant);
    //$('#key-word-field').html(stockRestaurant);

    loadResult(inputValue, function(response) {
        debugger;
        model = response;
        renderRestaurantDom(model);
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



},{"./getRestaurant":1}]},{},[2]);
