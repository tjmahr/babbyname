function randomElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}


function makeBabyName() {
  var choices1 = ["Am", "Ay", "Bai", "Bry", "Cay", "Co", "Hay", "Ja", 
                "Jay", "Ka", "Kay", "Kee", "Ky", "La", "Ma", "Shay", "Ty"];

  var choices2 = ["ber", "d", "k", "kay", "l", "n", "r", "s", "t"];

  var choices3 = ["a", "ah", "ee", "eigh", "en", "er", "in", "lin", 
                "ly", "on", "son", "ton", "y", "yn"];

  var picks = [choices1, choices2, choices3]
  var name = picks.map(randomElement).reduce((a, b) => a + b);
  return(name);
}

var name1 = makeBabyName();
var name2 = makeBabyName();

var babby = randomElement(["boy", "girl"]);
var twins = Math.floor(Math.random() * 50) == 8;

var color = twins ? "FFFFAD" : (babby == "boy" ? "8BBEFF" : "F2B6DE");

var message1 = "You're having a " + babby + " named " + name1 + "!";
var message2 = "You're having twins! " + name1 + " and " + name2 + "!";

var message = twins ? message2 : message1;

