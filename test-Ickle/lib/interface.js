

function createChild(element, content){
    var createdElement = document.createElement(element);
    createdElement.appendChild(document.createTextNode(content));
    setColour(createdElement);
    printToPage(createdElement);
}

function printToPage(html){
  document.getElementById('tests').appendChild(html);

}

function setColour(createdElement){
  if (createdElement.innerHTML.search('PASS') != -1) {
      createdElement.setAttribute("id", 'pass');
      return createdElement;
  } else if (createdElement.innerHTML.search('FAIL') != -1) {
    createdElement.setAttribute("id", 'fail');
      return createdElement;
  } else {
      return createdElement;
  }
}
