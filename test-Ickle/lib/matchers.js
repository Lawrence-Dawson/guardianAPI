function equal(a,b) {
  if (a === b) {
    return('PASS - '+ a + " equals " + b);
  }
  else {
    return('FAIL - '+ a + " doesn't equal " + b);
  }
}

function notEqual(a,b) {
  if (a !== b) {
    return('PASS - '+ a + " doesn't equal " + b);
  }
  else {
    return('FAIL - '+ a + " equals " + b);
  }
}

function contains(container, target) {
  if (container.indexOf(target) === -1) {
    return('FAIL - '+ container + " doesn't include " + target);
  }
  else {
    return('PASS - '+ container + " includes " + target);
  }
}

function notContains(container, target) {
  if (container.indexOf(target) !== -1) {
    return('FAIL - '+ container + " includes " + target);
  }
  else {
    return('PASS - '+ container + " doesn't include " + target);
  }
}
