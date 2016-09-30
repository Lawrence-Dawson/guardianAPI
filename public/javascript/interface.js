
storyFactory = new StoryFactory(Story);

function printStories(array) {
  array.forEach(function(story, index){
    printStory(index, story);
  });
}

function printStory(id, story) {
  prettyPrinter.createDiv(id);
  prettyPrinter.createTitle(id, story.title);
  prettyPrinter.createImg(id, story.img);
  prettyPrinter.createBody(id, story.body);
  prettyPrinter.createLink(id, story.url);
}

var politics = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=politics?show-fields=body";
var business = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=business?show-fields=body";
var sports = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=sport?show-fields=body;";
var technology = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=technology?show-fields=body";


function getAllStories(url) {
  getStories(url).then(function(response) {
    var storiesURLs = storiesList(response);
     storiesURLs.forEach(function(url) {
       getStories(url).then(function(response){
         var story = storyFactory.parse(response);
         printStory(Math.random(), story);
  });
});
});
}
