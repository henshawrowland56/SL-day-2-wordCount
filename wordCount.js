'use strict'
/*
	HENSHAW ROWLAND
	10.01.2017
*/
module.exports = {
	words : function(str) {
		function count(arr){
			var result = arr.reduce(function(word,count){
				word[count] = ++ word[count] || 1;
				return word;
			},{});
			return result;
		}
		var arrWords = [];
		var tabIndex = str.search("\t");
		var lineIndex = str.search("\n");
		var spaceIndex = str.search("  ");
		if(tabIndex > 0){
			arrWords = str.split("\t");
		}else if(lineIndex > 0){
			arrWords = str.split("\n");
		}else if(spaceIndex > 0){
			arrWords = str.split("  ");
		}
		else{
			arrWords = str.split(" ");
		}
		return count(arrWords);
	}
}