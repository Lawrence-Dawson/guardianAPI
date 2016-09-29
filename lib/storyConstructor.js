function StoryFactory(storyClass){
  this.storyClass = storyClass;
}


StoryFactory.prototype._parseHTML = function (str) {
  var testWindow = window.open();
  testWindow.document.body.innerHTML = str;
  var body = testWindow.document.body;
  testWindow.close();
  return body;
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
