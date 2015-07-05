// create a hash function that takes in the key and/or value
	// define the limit and create the storage container
	// run the hash function to generate a numerical key
		// store that result
	// determine if the key and/or value has been submitted
		// if the key and value has been submitted
			// store the result in the storage container with the hash key
			// if storage capcity >75%
				// set limit to 2x current limit
				// create a new temporary container with newly defined limit
				// repopulate the temporary container
					// loop through each space in container
						// in each container space run through existing list
							// get each key and generate hash key
							// add key:value pair to generated hash index
					// set the new container to the original location in memory of our storage


temp_storage = [];

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};



HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
 
  var neighborhood = this._storage.get(i) || [];
  
  var overWritten = false;
  
  neighborhood.forEach(function(house){
  	if(house[0] === k){
  		house[1] = v;
  		overWritten = true;
  	}
  });

  if(!overWritten){
  	neighborhood.push([k, v]);
  }

  this._storage.set(i, neighborhood);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var neighborhood = this._storage.get(i);
  var result;
  
  neighborhood.forEach(function(house){
  	if(house[0] === k){
  		result = house[1];
  	}
  });

  return result;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var neighborhood = this._storage.get(i) || [];
  
  var hoodIndex;
  
  _.each(neighborhood, function(house, i){
  	if(house[0] = k){
  		house[1] = null;
  	}
  });

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

