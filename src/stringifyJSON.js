// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  if (obj === null || obj === undefined) {
    return 'null';
  }



  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  //if array
  if (Array.isArray(obj) === true) {
    var results = [];

    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
      results.join();
    }
    return '[' + results + ']';
  }

  if (obj.constructor === Object) {
    var results = [];
    
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined ) {
        return '{}';
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      results.join();
    }
    return '{' + results + '}';
  }

  return obj.toString();

};
