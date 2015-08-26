// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // is obj a primitive (undefined, null, string, boolean, number)?
  // if yes, return stringified version
  // if it is number, string, true/false, undefined, null, return String(obj)
  if (typeof obj === "number" || 
  	typeof obj === "boolean" ||
  	obj === null ||
  	obj === undefined) {
  	return String(obj);
  } else if (typeof obj === "string") {
  	return '"' + obj + '"';
  }
  
  // is obj an array?
  // return '[' + stringifyJSON(item) + ']' for each item in array, like this:
  // result = '['
  // forEach (item) in obj:
  //   result = result + stringifyJSON(item);
  // return result + ']';
  if (obj.constructor === Array) {
  	var result = '[';
  	if (obj.length > 0) {
  		for (var i=0; i<obj.length; i++) {
  			result = result + stringifyJSON(obj[i]) + ',';
  		}
  		result = result.slice(0, -1);
  	}
  	return result + ']';
  }
 
  // is obj an object?
  // if yes, return '{' + stringifyJSON(item) + '}' for each item in object:
  // result = '{'
  // forEach (item) in obj:
  //   result = result + stringifyJSON(item);
  // return result + '}';



};
