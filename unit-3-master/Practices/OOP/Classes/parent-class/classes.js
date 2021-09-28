//To start, we need to think about our requirements. There are 52 cards in a deck, which can have one of 4 suits and one of 13 values. We can store our deck as an array. By iterating over each suit and then each value we can populate it

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();

    }
    reset() {

        this.deck = [];

        let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
        let values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }




    shuffle() {



        let { deck } = this;

        let m = deck.length,
            i;
        /*We also use another shortcut when declaring the m and i variables to keep them on one line. The following three approaches are equivalent:
          Option1: 
           let m = deck.length;
           let i;
          Option2:
             let m = deck.length, 
             i;
          Option3:
           let m = deck.length, i;

           */

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }

    deal() {
        return this.deck.pop();
    }
}



let deck1 = new Deck();
deck1.shuffle()
console.log(deck1.deck);
console.log("You were delt the " + deck1.deal());
console.log(deck1.deck);
deck1.reset();
console.log(deck1.deck);