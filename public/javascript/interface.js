function stuff() {
  this.stuff = "";
}

var sports = "https://spy-api.herokuapp.com/apis?api-key=b202a9029f8b54415a7cb0e2e775536c00920833&json=AllSport";

storyFactory = new StoryFactory(Story);

function getStoryUrls(topic) {
  return getStories(topic).then(function(response) {
    return storiesList(response);
  });
}

function getAllStories(list) {
  var storiesArray = [];
  return new Promise(function(resolve, reject) {
    list.forEach(function(item) {
      getStories(item).then(function(response) {
        var parsedStory = storyFactory.parse(response);
        storiesArray.push(parsedStory);
      });
    resolve(storiesArray);
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

function generatePage(topic) {
  getStoryUrls(topic).then(function(response) {
    getAllStories(response).then(function(response) {
      this.stuff = response;
      this.stuff.forEach(function(story, index) {
        console.log(story);
        printStory(index, story);
      });
    });
  });
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
