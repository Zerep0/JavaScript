function* finiteSequence(limit) {
    var i = 0;
    while (i < limit) {
      yield i++;
    }
  }
  
  var iterator = finiteSequence(5);

  let si;
  while ((si = iterator.next()).done == false) {
    console.log(si);
  }
  console.log(si)