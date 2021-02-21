// keep tracks of a winner 
let winner = false;

// Get reference to the cards div

const cards = document.querySelector('.cards');

// Render cards 

cards.innerHTML = getCards();

// Get a reference to the cards buttons 

const cardButtons = document.querySelector('.card-btn');

//  Get a reference to the Mharla votes span

const MharlaVotesE1 = document.querySelector('.votes-number-Mharla');

// Get a reference to the Behance votes span

const BehanceVotesE1 = document.querySelector('.votes-number-Behance');

// Set event listener for the vote button

cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => { 
        if (e.target.classList.contains('btn-Mharla')) {
            addVote(0, 'Mharla, MharlaVotesE1')
        } else {
            addVote(1, 'BehanceVotesE1')
        }
    })
    
});

