describe("Story", function () {

  beforeEach(function() {
    rawStory = {
      "title": "Leaping Salmon Invade Thames",
      "img": "http://imgur.com/gallery/F5DVrLA",
      "body": "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
      "url": "http://www.guardian.co.uk"
    };
    story = new Story(rawStory);
  });

  it("it should have a title", function() {
    expect(equal(story.title, "Leaping Salmon Invade Thames"));
  });

  it("it should have an img link", function() {
    expect(equal(story.img, "http://imgur.com/gallery/F5DVrLA"));
  });

  it("it should have some body text", function() {
    expect(equal(story.body, rawStory.body));
  });

  it("it should have a url", function() {
    expect(equal(story.url, rawStory.url));
  });

});
