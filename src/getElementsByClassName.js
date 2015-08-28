// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // use document.body, element.childNodes, and element.classList

  // VERSION WITH LOTS OF COMMENTS, OPTION TO STORE DOM TREE

  /*
	Strategy: Recurse the DOM tree. Every time you find targetClassName
	on an element, stash that element in a global array called 'result'.
	If desired, can return the DOM tree (switch out commented/uncommented returns,
	and also uncomment lines with arr variable declaration and push).
	But tree not needed for this exercise.
	Left in a bunch of console.log statements that are commented out.
	Used these for debugging
  */

  //answer to match:
  //console.log(document.getElementsByClassName('targetClassName'));  

  var result = [];

  var recurse = function (element) {
  	//console.log('element: ', element);
  	//console.log('classlist: ', element.classList);
  	if (element.classList === undefined) {
  		return;
  	}
  	//console.log('classlist contains target? ', element.classList.contains(className));
  	if (element.classList.contains(className)) {
  		result.push(element);
  		//console.log(result);
  	}
  	//console.log('# element child nodes: ', element.childNodes.length);
  	if (element.childNodes.length === 0) {
  		//return {element: []}
  		return;
  	}
  	//var arr = [];
  	for (var child in element.childNodes) {
  		//console.log('child of element ', element, ': ', element.childNodes[child]);
  		//arr.push(recurse(element.childNodes[child]));
  		recurse(element.childNodes[child]);
  	}
  	//console.log(arr);
  	//return {element: arr};
  	return;
  }

  //var tree = recurse(document.body);
  recurse(document.body);
  //console.log(tree);

  //here is our answer to compare to correct one, followed by separator
  //console.log(result);
  //console.log('+++++');
  return result;

};




