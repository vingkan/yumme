var input = document.getElementById("textBox");
var output = document.getElementById("output");
// To get information from the food database you have to do two searches
// The first search takes an string
var apiKey = "WuhJZNLfyq9hTyTQpPAjUC3wYG5wA2hIfS01XOVl";

var database;

// First search variables
//function search(name, sort, max, offset) {
//    this.name = name; // search terms
//    this.sort = sort; // "n" sort by food name, "r" sort by relevance 
//    this.max = max; // maximum rows to return
//    this.offset = offset; // offset of the beginning row
//    this.getURL = function() {
//        return "http://api.nal.usda.gov/ndb/search/?format=json&q="+this.name+"&sort="+this.sort+"&max="+this.max+"&offset="+this.offset+"&api_key="+apiKey;
//    }
//}


function findNutrient() {
    $.getJSON("http://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key="+apiKey, function(data) {
        //var obj = jQuery.parseJSON(data);
        database = data['list']['item'];
        
        //output.innerHTML += 
    });
}
