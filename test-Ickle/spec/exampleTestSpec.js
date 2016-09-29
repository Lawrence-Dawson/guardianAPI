describe('Custom Testing Framework & Matchers', function(){

  beforeEach(function(){
    console.log('     This is the first before block');
  });

  it('has an equal matcher', function(){
    expect(equal(5,5));
    expect(equal(5,10));
  });

  it('has a notEqual matcher', function(){
    expect(notEqual(5,6));
    expect(notEqual(5,5));
  });

  it('has a string contains matcher', function(){
    expect(contains('string', 'i'));
    expect(contains('string', 'x'));
  });

  it('has an array contains matcher', function(){
    expect(contains([1,2,3], 2));
    expect(contains([1,2,3], 4));
  });

  it('has a notContains matcher', function(){
    expect(notContains('string', 'x'));
    expect(notContains('string', 'i'));
  });

  describe('Nested beforeBlocks',function(){
    it('nests before blocks if not reassigned',function(){
    });
  });
  describe('Nested & Reassigned beforeBlocks',function(){
    beforeEach(function(){
      console.log('     This is a different before block');
    });

    it('does not nest before blocks if reassigned',function(){
    });
  });
});

describe('No beforeBlock',function(){
  it('has no before blocks if not reassigned nor nested',function(){
  });
});
