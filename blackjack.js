console.log("-- BLACKJACK SIMULATION --")
// Definine everything
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const valueOfCard = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
const deck = [];
let usedIndecies = [];
let playerPoints = 0;
let dealerPoints = 0; 

// Functions
const randomIndex = () => {
    let randomNum = Math.floor(Math.random() * deck.length);
    while (usedIndecies.indexOf(randomNum) > -1) {
        randomNum = Math.floor(Math.random() * deck.length);
    }
    usedIndecies.push(randomNum);
    return randomNum;
}

const pointSystem = (hand) => {
    let points = 0;
    for (const card of hand) {
        if (card.Value === "Ace") {
            points += 1;
        } else if (card.Value === "King" || card.Value === "Queen" || card.Value === "Jack") {
            points += 10;
        } else {
            points += card.Value;
        }
    }
    return points;
}

// Generating a deck of cards
for (const suit of suits) {
    for (const value of valueOfCard) {
        deck.push({Suit: suit, Value: value});
    }
}

// Assigning 2 randomly generated cards
let playerHand = [deck[randomIndex()], deck[randomIndex()]];
let dealerHand = [deck[randomIndex()], deck[randomIndex()]];

playerPoints = pointSystem(playerHand);
dealerPoints = pointSystem(dealerHand);

console.log("Starting Player Hand:", playerHand);
console.log("Starting Player Score", playerPoints);

console.log("Starting Dealer Hand:", dealerHand);
console.log("Starting Dealer Score", dealerPoints);

for (let i = 0; i < 10; i++) {
    playerHand.push(deck[randomIndex()]);
    playerPoints = pointSystem(playerHand);
    if (playerPoints > 21) {
        console.log(`You lose! Your final score was ${playerPoints} while the dealer had ${dealerPoints}`);
        break;
    } else if (playerPoints === 21) {
        console.log(`You win! Your final score was ${playerPoints} while the dealer had ${dealerPoints}`);
        break;
    }
    dealerHand.push(deck[randomIndex()]);
    dealerPoints = pointSystem(dealerHand);
    if (dealerPoints > 21) {
        console.log(`You win! Your final score was ${playerPoints} while the dealer had ${dealerPoints}`);
        break;
    } else if (dealerPoints === 21) {
        console.log(`You win! Your final score was ${playerPoints} while the dealer had ${dealerPoints}`);
        break;
    }
}

console.log("Ending Player Hand:", playerHand);
console.log("Ending Player Score:", playerPoints);

console.log("Ending Dealer Hand:", dealerHand);
console.log("Ending Dealer Score:", dealerPoints);
