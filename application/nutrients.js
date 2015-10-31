// To get information from the food database you have to do two searches
// The first search takes an string
var apiKey = "WuhJZNLfyq9hTyTQpPAjUC3wYG5wA2hIfS01XOVl";
// First search variables
var first = "http://api.nal.usda.gov/ndb/search/?format=json&q="/* Search Input */
                                                      +"&sort=n"// "n" sort by food name, "r" sort by relevance 
                                                      +"&max=25"// maximum rows to return
                                                    +"&offset=0"// offset of the beginning row
                                                      +"&api_key="+apiKey;


var input = document.getElementById("textBox");
var output = document.getElementById("output");
var apiKey = "WuhJZNLfyq9hTyTQpPAjUC3wYG5wA2hIfS01XOVl";
var link = "http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=";//DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269

function findNutrient() {
    output.innerHTML += first
}
