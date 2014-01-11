/*
Name: Yolanda Siegrist
Date: 1/09/2014
Assignment: Goal2: Assignment: JS practice
*/

// self-executing function
(function(){

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = [6,8,9];
	var avgTotal = avgNumbers[0] + avgNumbers[1] + avgNumbers[2];
	var avgNumber = avgTotal / 3;

    console.log('avg number = ' + avgNumber);

    //--------------------------------------------------------
    console.log("2. concat first and last name");
	var firstName = ('James');
	var lastName = ('Bond');
	var combined;
       
	var combined = firstName.concat(lastName);
    console.log("Full Name:", combined);

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = ('this is test text that is being used as input to a function')
	function countWords(str) {
	var count = 0, i
	for (i =0; i <= str.length; i++) {
		if (str.charAt(i) == " ") {
			count ++;
		}
	}
	return count + 1;
	}
	console.log(countWords(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");
	var ipsum = ("this is test text that is being used as input to a function")   

    console.log(ipsum.length);

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");
	var word = ('JavaScript');
	function countVowels(str) {
    var count = 0;
  	text = text.toLowerCase();
	 
    for (i = 0; i < str.length(); i++) {
        if (str.charAt(i) ==" ") {
        if (c=='a' || c=='e' || c=='i' || c=='o' || c=='u') {
            count++;
        }
    }
    return count +1;
	}
	console.log(word);
};

})();