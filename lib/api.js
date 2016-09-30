//
// const guardian = require("guardian-js");
//
// let api = new guardian("e1faf3ba-02ae-41f8-b2cf-927bf4bc249c", false);
//
// api.tags.search('sport', {
// });

// $.ajax({
//   type:'GET',
//   url: "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body",
//   datatype: 'json',
//   success: function(posts){
//     console.log('success');
//   }
// });

function loadXMLDoc(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
                var results = JSON.parse(xmlhttp.responseText);
                storiesList(results);
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function storiesList(results) {
  var resultsArray = results.response.results;
  var apiURLs = [];
  for (var i = 0; i < resultsArray.length; i++) {
    apiURLs.push(resultsArray[i].apiUrl);
  }
  console.log(apiURLs);
}

console.log(loadXMLDoc("https://content.guardianapis.com/search?q=sports?show-fields=body&api-key=8c51e780-17f2-4cb6-9771-5e29548d62be&format=json"));
