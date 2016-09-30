function stuff() {
  this.stuff = "";
}

var sports = "https://spy-api.herokuapp.com/apis?api-key=b202a9029f8b54415a7cb0e2e775536c00920833&json=AllSport";

storyFactory = new StoryFactory(Story);

function generatePage(topic) {
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
