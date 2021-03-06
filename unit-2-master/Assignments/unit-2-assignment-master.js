//#1 convert to fahrenheit
function convertToF(celsius) {
    return celsius * 9/5 + 32
  }
  
  console.log(convertToF(30));

//#2 convert to celsius----------------------------------------------
  function convertToC(temperature) {
	// Take whatever temperature the function is handed, do some math and return it.
	return (temperature - 32) * (5/9)
}
    var userInput = prompt("Enter in a Fahrenheit temperature & I'll convert it to Celsius");

    var answer = convertToC(userInput);

        console.log(answer);

//Pluralizer----------------------------------------------------
function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('geese', 3));
console.log('I have ' + pluralize('sheep', 2));

//reading list--------------------------------------
var books = [
    {title: "The Design of EveryDay Things",
     author: "Don Norman",
     alreadyRead: false
    },
    {title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
    }];
  
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + " by " + book.author;
    if (book.alreadyRead) {
      console.log('You already read ' + bookInfo);
    } else {
      console.log('You still need to read ' + bookInfo);
    }
  }

  //video watcher----------------------------------------
  function Video(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
}


Video.prototype.watch = function() {
    console.log("You watched all " + this.seconds + " seconds of " + this.title);
};

var vid = new Video("Otters Holding Hands", "cynthia holmes", 240);
vid.watch();


var vid2 = new Video("Hakuna Matata", "elreydeleon", 300);
vid2.watch();

//Current Season------------------------------------------------
// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}