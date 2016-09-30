var rawStory = {
  "title": "Leaping Salmon Invade Thames",
  "img": "http://i.imgur.com/akX26jc.jpg",
  "body": "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
  "url": "http://www.guardian.co.uk"
};

story = new Story(rawStory);

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

printStories([story, story]);
