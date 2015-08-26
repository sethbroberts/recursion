// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

function isLegal(object) {
	if (object === null) {		// check this first:
		return true;			// if call null.constructor below, get error
	} else if (object === undefined) {
		return false;
	} else if (object.constructor === Function) {
		return false;
	}
	return true;
}

var stringifyJSON = function(obj) {
  // your code goes here

  // is obj a primitive (null, string, boolean, number)?
  // if yes, return stringified version
  // if it is number, string, true/false, null, return String(obj)
  if (typeof obj === "number" || 
  	typeof obj === "boolean" ||
  	obj === null) {
  	return String(obj);
  } else if (typeof obj === "string") {
  	return '"' + obj + '"';
  } else if (obj === undefined) {		// if undefined, return nothing
  	return;
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
  			// make sure obj[key] is not undefined or a function
  			if (isLegal(obj[i])) {
  				result = result + stringifyJSON(obj[i]) + ',';
  			}
  			
  		}
  		result = result.slice(0, -1);	// take off trailing comma
  	}
  	return result + ']';
  }
 
  // is obj an object?
  // if yes, return '{' + stringifyJSON(item) + '}' for each item in object:
  // result = '{'
  // forEach (item) in obj:
  //   result = result + stringifyJSON(item);
  // return result + '}';
  if (obj.constructor === Object) {
  	var result = '{';
  	var empty = true;
	for (var key in obj) {
		// make sure obj[key] is not undefined or a function
		if (isLegal(obj[key])) {
			empty = false;
			result = result + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
		}
	}
	if (!empty) {
		result = result.slice(0, -1);	// take off trailing comma
	}
  	return result + '}';
  	
  }

};
