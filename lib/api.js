function getStories(url) {

    return new Promise(function(resolve, reject) {

    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function() {
        if (request.readyState == XMLHttpRequest.DONE ) {
           if (request.status == 200) {
                var results = JSON.parse(request.responseText);
                resolve(results);
           }
           else if (request.status == 400) {
              reject(Error('There was an error 400'));
           }
           else {
                reject(Error('something else other than 200 was returned'));
           }
        }
    };
    request.send();
  });
}

function storiesList(results) {
  var resultsArray = results.response.results;
  var apiURLs = [];
  for (var i = 0; i < resultsArray.length; i++) {
    var apiWithBody = ("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + resultsArray[i].apiUrl + '?show-fields=body');
    apiURLs.push(apiWithBody);
  }
  return apiURLs;
}

function getAllStories(stories) {
  var allStories = stories.forEach(function(url) {
  return getStories(url);
});
}
