var sports = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=sport?show-fields=body";
var politics = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=politics?show-fields=body";
var business = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=business?show-fields=body";
var technology = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=technology?show-fields=body";

storyFactory = new StoryFactory(Story);

function generatePage(topic) {
  document.getElementById("story").innerHTML = "";
  return getStories(topic).then(function(response) {
    return storiesList(response);
  }).then(function(response) {
    response.forEach(function(item, index) {
      getStories(item).then(function(response) {
        var parsedStory = storyFactory.parse(response);
        printStory(index, parsedStory);
      });
    });
  });
}

function printStory(id, story) {
  prettyPrinter.createDiv(id);
  prettyPrinter.createTitle(id, story.title);
  prettyPrinter.createImg(id, story.img);
  prettyPrinter.createBody(id, story.body);
  prettyPrinter.createLink(id, story.url);
}


function ready(fn) {
  if (document.readyState != 'loading'){
    console.log("hello");
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(generatePage(sports));
