var mongoose = require('mongoose');

var Areas = mongoose.model('Area', {

    "id": 0,
    "name": "restaurant 1",
    "tags": "restaurant, japonais, paris",
    "pictureURL": "",
    "date": "1998-09-20T10:53:15.040Z",
    "address": "10 rue de la pompe",
    "city": "paris",
    "area": "champs elysees",
    "imgVignette": "https://pixabay.com/static/uploads/photo/2015/11/19/10/38/food-1050813_150.jpg"
});




restaurants : [
	{
		"name" : "Chez Paulette",
    	"tags" : "titi",
	},
	{
		"name" : "HDD",
	    "tags" : ["boulangerie","pain","croissant"],
	    "address" : "15, avenue du père",
	    "city" : "Melun"
	},
	{
		"name" : "Le 3",
	    "tags" : ["créole","restaurant","soleil"],
	    "address" : "85, rue de la victoire",
	    "city" : "Londres",
	    "area" : "Oxford"
	},
	{
		"name" : "yakitori",
	    "address" : "10 rue de la pompe",
	    "city" : "paris",
	    "area" : "champs elysees"
	},
	{
		"name" : "Yaki yuity",
	    "tags" : ["restaurant", "japonais", "paris"],
	    "address" : "10 rue de la pompe",
	    "city" : "paris",
	    "area" : "champs elysees",
	    "comments" : "Very Good place to eat and enjoy your time"
	}
]