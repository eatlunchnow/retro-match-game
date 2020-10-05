document.addEventListener("DOMContentLoaded", () => {

    // card options
    const cardArray = [
        {
            name: "fries",
            img: "images/fries.jpg"
        },
        
        {
            name: "cheeseburger",
            img: "images/cheesburger.jpg" 
        },
        
        {
            name: "hot dog",
            img: "images/hotdog.jpg"
        },
        
        {
            name: "ice cream",
            img: "images/icecream.jpg"
        },
        
        {
            name: "milkshake",
            img: "images/milkshake.jpg"
        },
        
        {
            name: "pizza",
            img: "images/pizza.jpg"
        },
        
		{
            name: "fries",
            img: "images/fries.jpg"
        },
		{
            name: "cheeseburger",
            img: "images/cheesburger.jpg" 
        },
		{
            name: "hot dog",
            img: "images/hotdog.jpg"
        },
		{
            name: "ice cream",
            img: "images/icecream.jpg"
        },
		{
            name: "milkshake",
            img: "images/milkshake.jpg"
        },
		{
            name: "pizza",
            img: "images/pizza.jpg"
        }
    ]

// refresh game with new card positions
// randomize cards
cardArray.sort(() => 0.5 - Math.random());	
	
const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];	

// create game board using for loop to loop over card array and create image element 
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement("img");
        card.setAttribute("src", "images/green.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    }
} 
	
// checks for matches
function checkForMatch() {
	let cards = document.querySelectorAll("img");
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];
	
	if(optionOneId == optionTwoId) {
		cards[optionOneId].setAttribute("src", "images/green.png");
		cards[optionTwoId].setAttribute("src", "images/green.png");
		alert("You clicked on the same image!");
	}
	else if (cardsChosen[0] === cardsChosen[1]) {
		alert("You found a match!");
		cards[optionOneId].setAttribute("src", "images/white.png");
		cards[optionTwoId].setAttribute("src", "images/white.png");
		cards[optionOneId].removeEventListener("click", flipCard);
		cards[optionTwoId].removeEventListener("click", flipCard);
		cardsWon.push(cardsChosen);
	} else {
		cards[optionOneId].setAttribute("src", "images/green.png");
		cards[optionTwoId].setAttribute("src", "images/green.png");
		alert("Sorry, try again!");
	}
	
	cardsChosen = [];
	cardsChosenId = [];
	resultDisplay.textContent = cardsWon.length;
	if (cardsWon.length === cardArray.length/2){
		resultDisplay.textContent = "Congrats! You found them all!";
	}
}	
	

// flips card 
function flipCard() {
	let cardId = this.getAttribute("data-id");
	cardsChosen.push(cardArray[cardId].name);
	cardsChosenId.push(cardId);
	this.setAttribute("src", cardArray[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500);
	}
}	
		

createBoard()


})