function randomElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

var choices1 = ["Am", "Ay", "Bai", "Bry", "Cay", "Co", "Hay", "Ja", 
                "Jay", "Ka", "Kay", "Kee", "Ky", "La", "Ma", "Shay", "Ty"];

var choices2 = ["ber", "d", "k", "kay", "l", "n", "r", "s", "t"];

var choices3 = ["a", "ah", "ee", "eigh", "en", "er", "in", "lin", 
                "ly", "on", "son", "ton", "y", "yn"];

var picks = [choices1, choices2, choices3];
var name = picks.map(randomElement).reduce((a, b) => a + b);

var babby = randomElement(["boy", "girl"]);

var color = babby == "boy" ? "8BBEFF" : "F2B6DE";
var message = "You're having a " + babby + " named " + name + "!";
