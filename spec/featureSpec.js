describe("Feature Tests", function () {

  it("it should have a title", function() {

    var testWindow = window.open("http://localhost:3000");
    testWindow.onload = function() {
      var title = testWindow.document.getElementsByClassName('storyTitle')[0].innerHTML;
      var imgUrl = testWindow.document.getElementsByClassName('storyImg')[0].attributes[0].value;
      var body = testWindow.document.getElementsByClassName('storyBody')[0].innerHTML;
      var url = testWindow.document.getElementsByClassName('readMore')[0].attributes[0].value;
      testWindow.close();
      expect(equal(title, "Leaping Salmon Invade Thames"));
      expect(equal(imgUrl, "http://i.imgur.com/akX26jc.jpg"));
      expect(equal(body, "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"));
      expect(equal(url, "http://www.guardian.co.uk"));
    };

  });
});
