// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  if (node === undefined) {
    node = document.body;
  } else {
    node = node;
  }
  
  var results = [];
  if (node.className.split(' ').indexOf(className) !== -1) {
     results.push(node); 
  }
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      results = results.concat(getElementsByClassName(className, node.children[i]));
    }
  }

  return results;
};
