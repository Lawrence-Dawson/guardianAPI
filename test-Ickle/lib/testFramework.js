function describe(description, itBlock) {
  createChild('h2', "DESCRIPTION: " + description);
  // console.log("DESCRIPTION: " + description);
  beforeEachBlock = Function;
  itBlock();
}

function beforeEach(block){
  beforeEachBlock = block;
}

function it(description, test) {
  createChild('ul', '   IT: ' + description);
  // console.log('   IT: ' + description);
  beforeEachBlock();
  test();
}

function expect(matcher) {
  createChild('li', '    ' + matcher);
  // console.log('     '+matcher);
}
