var dictionary = {
    newWords: [ ['die Einsamkeit', 'samotność'],
    ['die Ausweglosigkeit','beznadziejność'] ,
    ['die Zollstation', 'kontrola celna'],
    ['der Hafen', 'port'],
    ['die Straße', 'ulica'],
    ['das Gepäck', 'bagaż'],
    ['der Lastkraftwagen', 'ciężarówka'] ] ,
    learntWords: [ ['gut', 'dobry'],
    ['schlecht','zły'] ,
    ['der Führerschein', 'prawo jazdy'],
    ['die Straßenbahn ', 'tramwaj'],
    ['die Hütte', 'chata'],
    ['der Reisepass', 'paszport'] ]
};

//dictionary.newWords[0][0] >> "die Einsamkeit"

var learnNew = function (){
	//ifknown moveToLearnt
	//w srodku removeWord i addWord
	$('.next' ).on('click', function( event ) {
		$('.translation' ).hide();
        var currentWordPair = chooseRandomWord(dictionary.newWords);
        displayWord(currentWordPair);
        $('.translate' ).on('click', function( event ) {
        $('.translation' ).show();	
        displayTranslation(currentWordPair);
	    });
	});
	
};

var repeatLearnt = function (){
	//ifknown moveToLearnt
	//w srodku removeWord i addWord
	$('.next' ).on('click', function( event ) {
		$('.translation' ).hide();
        var currentWordPair = chooseRandomWord(dictionary.learntWords);
        displayWord(currentWordPair);
        $('.translate' ).on('click', function( event ) {
        $('.translation' ).show();	
        displayTranslation(currentWordPair);
	    });
	});
	
};

//thoseWords zbior slow, newWords, learntWords
var chooseRandomWord = function(thoseWords) {
    var number = Math.floor(Math.random() * (thoseWords.length));
    return thoseWords[number]; //pair of words
};

var displayWord = function (wordPair){
	$('#word').text(wordPair[0]);
};

var displayTranslation = function (wordPair){
	$('#translation').text(wordPair[1]);
};

var moveToLearnt = function (){
	var buffer = removeWord(dictionary.newWords, wordPair);
	addWord(buffer, dictionary.learntWords);
};

//sourceWords destinationWords - zbiory slow thoseWords
var removeWord = function(sourceWords, wordPair){
	var index = sourceWords.indexOf(wordPair);
	var buffer = sourceWords.splice(index,1);
	return buffer[0];
};

var addWord = function(buffer, destinationWords){
	destinationWords.push(buffer);
};

$(document).ready(function() {
    $('.learning').hide();
    $('.move1').hide();
    $('.move2').hide();

    $('#learnNew' ).on('click', function( event ) {
	        $('.choose').hide();
            $('h4').text('Learn new words:');
            $('.move1').show();
            $('.move2').hide();
	        $('.learning').show();
	        learnNew();
    	});
    $('#repeatLearnt' ).on('click', function( event ) {
	        $('.choose').hide();
            $('h4').text('Repeat learnt words:');
            $('.move1').hide();
            $('.move2').show();
            $('.learning').show();
	        repeatLearnt();
    	});



    
    

});