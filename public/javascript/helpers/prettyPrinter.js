var prettyPrinter = {
  "title": "h2",
  "body": "p",
  "img": "img",
  "url": "a"
};

prettyPrinter.createDiv = function(id) {
  var createdElement = document.createElement("div");
  createdElement.setAttribute("id", id);
  document.getElementById("story").appendChild(createdElement);
},

prettyPrinter.printToPage = function(id, html){
  document.getElementById(id).appendChild(html);
},

prettyPrinter.createTitle = function(id, content){
  var createdElement = document.createElement(this.title);
  createdElement.appendChild(document.createTextNode(content));
  createdElement.className = "storyTitle";
  prettyPrinter.printToPage(id, createdElement);
},

prettyPrinter.createImg = function(id, content){
  var createdElement = document.createElement(this.img);
  createdElement.setAttribute("src", content);
  createdElement.className = "storyImg";
  prettyPrinter.printToPage(id, createdElement);
},

prettyPrinter.createBody = function(id, content){
  var createdElement = document.createElement(this.body);
  createdElement.innerHTML = content;
  createdElement.className = "storyBody";
  prettyPrinter.printToPage(id, createdElement);
},

prettyPrinter.createLink = function(id, content){
  var createdElement = document.createElement(this.url);
  createdElement.appendChild(document.createTextNode("Read more"));
  createdElement.setAttribute("href", content);
  createdElement.className = "readMore";
  prettyPrinter.printToPage(id, createdElement);
}
