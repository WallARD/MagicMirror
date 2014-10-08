// for navigator language
var lang = window.navigator.language;
// you can change the language
//var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'Ruda Slaska,Poland',
    'units':'metric',
    'lang':lang
};

//var feed = 'http://feeds.nos.nl/nosjournaal?format=rss';
//var feed = 'http://www.phoronix.com/rss.php';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';

// compliments:
var compliments = [
            'Hey, handsome!',
            'Hi, sexy!',
            'Hello, beauty!',
            'You look sexy!',
            'Wow, you look hot!',
            'Looking good today!',
            'You look nice!',
            'Bo w życiu ino Ruch się liczy', 
	   'Enjoy your day!'
        ];
