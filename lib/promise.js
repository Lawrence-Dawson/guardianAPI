function get(url) {

  return new Promise(function(resolve, reject) {

    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        resolve(data);
      } else {
        reject(Error(req.statusText));
      }
    };

    request.onerror = function() {
      reject(Error("Network Error"));
    };
    request.send();

  });
}


url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";

get(url).then(function(response) {
  console.log(response);
});
