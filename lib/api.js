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
    var apiWithBody = ("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + resultsArray[i].apiUrl + '?show-fields=body');
    apiURLs.push(apiWithBody);
  }
  console.log(apiURLs);
}

console.log(loadXMLDoc("https://content.guardianapis.com/search?q=sports?show-fields=body&api-key=8c51e780-17f2-4cb6-9771-5e29548d62be&format=json"));
