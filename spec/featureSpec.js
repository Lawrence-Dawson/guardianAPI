describe("Feature Tests", function () {

  it("it should have a title", function() {

    var testWindow = window.open("http://localhost:3000");
    testWindow.onload = function() {
      var title = testWindow.document.getElementById('title').innerHTML;
      console.log(title);
      testWindow.close();
      expect(equal(title, "Leaping Salmon Invade Thames"));

    };

  });
});
