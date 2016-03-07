var dictionary = {
    newWords: [ ['die Einsamkeit', 'samotność'],
    ['die Ausweglosigkeit','beznadziejność'] ,
    ['die Zollstation', 'kontrola celna'],
    ['der Hafen', 'port'],
    ['die Straße', 'ulica'],
    ['das Gepäck', 'bagaż'],
    ['der Lastkraftwagen', 'ciężarówka'] , 
    ['der Führerschein', 'prawo jazdy'],
    ['die Straßenbahn ', 'tramwaj'],
    ['die Hütte', 'chata'],
    ['der Reisepass', 'paszport'],
    ['das Verkehrszeichen', 'znak drogowy'],
    ['die Tankstelle','stacja paliw'],
    ['der Hubschrauber ','śmigłowiec'],
    ['das Reisebüro','biuro podróży'],
    ['der Schaffner','konduktor'],
    ['der Tramper','autostopowicz'] ]
};

//dictionary.newWords[0][0] >> "die Einsamkeit"

var learnNew = function (){
	$('.next' ).on('click', function( event ) {
		$('#translation' ).hide();
        var currentWordPair = chooseRandomWord(dictionary.newWords);
        displayWord(currentWordPair);
        $('.translate' ).on('click', function( event ) {
        $('#translation' ).show();	
        displayTranslation(currentWordPair);
	    });
	});
	
};

//setOfWords zbior slow, newWords
var chooseRandomWord = function(setOfWords) {
    var number = Math.floor(Math.random() * (setOfWords.length));
    return setOfWords[number]; //pair of words
};

var displayWord = function (wordPair){
	$('#word').text(wordPair[0]);
};

var displayTranslation = function (wordPair){
	$('#translation').text(wordPair[1]);
};

$(document).ready(function() {
    learnNew();
});