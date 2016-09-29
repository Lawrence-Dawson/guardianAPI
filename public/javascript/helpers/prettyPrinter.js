var prettyPrinter = {
  "title": "h2",
  "body": "p",
  "img": "img",
  "url": "a"
};

prettyPrinter.printToPage = function(id, html){
  document.getElementById(id).appendChild(html);
},

prettyPrinter.createTitle = function(content){
  var createdElement = document.createElement(this.title);
  createdElement.appendChild(document.createTextNode(content));
  createdElement.className = "articleTitle";
  prettyPrinter.printToPage("story", createdElement);
},

prettyPrinter.createImg = function(content){
  var createdElement = document.createElement(this.img);
  createdElement.setAttribute("src", content);
  createdElement.className = "storyImg";
  prettyPrinter.printToPage("story", createdElement);
},

prettyPrinter.createBody = function(content){
  var createdElement = document.createElement(this.body);
  createdElement.appendChild(document.createTextNode(content));
  createdElement.className = "articleBody";
  prettyPrinter.printToPage("story", createdElement);
},

prettyPrinter.createLink = function(content){
  var createdElement = document.createElement(this.url);
  createdElement.appendChild(document.createTextNode("Read more"));
  createdElement.setAttribute("href", content);
  createdElement.className = "readMore";
  prettyPrinter.printToPage("story", createdElement);
}
