// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  var result = [];

  var recurse = function (element) {
  	if (element.classList === undefined) {
  		return;
  	}
  	if (element.classList.contains(className)) {
  		result.push(element);
  	}
  	if (element.childNodes.length === 0) {
  		return;
  	}
  	for (var child in element.childNodes) {
  		recurse(element.childNodes[child]);
  	}
  	return;
  }

  recurse(document.body);

  return result;

};


