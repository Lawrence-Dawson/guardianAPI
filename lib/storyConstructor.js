function StoryFactory(storyClass){
  this.storyClass = storyClass;
}


StoryFactory.prototype._parseHTML = function (str) {
  var tmpDocument = document.implementation.createHTMLDocument("Temporary");
   tmpDocument.body.innerHTML = str;
   var parsedHTML = tmpDocument.body
   tmpDocument.close();
   return parsedHTML;
};

StoryFactory.prototype._getImageURL = function (htmlString) {
  var parsedHTML = this._parseHTML(htmlString);
  var targetClass = parsedHTML.getElementsByTagName("img");
  return targetClass[0].getAttribute("src");
};

StoryFactory.prototype.parse = function (inputJSON) {
  inputOptions = {
    "title": inputJSON.response.content.webTitle,
    "url": inputJSON.response.content.webUrl,
    "body": inputJSON.response.content.fields.body,
    "img": this._getImageURL(inputJSON.response.content.fields.body)
  };
  return new this.storyClass(inputOptions);
};
