// Return a list of cards

const getCards = () => {
    return candidates.map(candidate => {
            return `<div class="card" >
            <img class="card-image" src="/image/${candidate.id}.jpg" alt="Pintura digital Mharla">
            <div class="card-info">
                <div class="candidate-votes">
                    <span class="votes-number-${candidate.id}">${candidate.votes}</span>
                    <span class="votes-text">VOTES</span>
                </div>
                <div class="line"></div>
                <div class="candidate-info">
                    <span class="candidate-name">${candidate.name}</span>
                    <span class="candidate-party">${candidate.party}</span>
                </div>
            </div>
            <button class="card-btn btn-${candidate.id}">VOTE</button>
        </div>`
    })
   
}

// Add one vote to the corresponding candidate.

const addVote = (index, candidate, votesE1) => {
    //increase vote by one as long as there's not a winner
    if (!winner) {
        //Increase vote by one
        candidates[index].votes++;

        // Update votes element

        votesE1.textContent = candidates[index].votes;

        // Check if candidate won

        isWinner(candidate, candidates[index].votes);
    }
}

// If candidate won, set winner variable to true

const isWinner= (candidate, votes) => {
    if (votes === 270) {
        winner = true;

        setWinnerLoser(candidate);
    }
}

// Shows who won and who lost

const setWinnerLoser = (candidate) => {
    if (candidate === "Mharla") {
        document.querySelector('btn-Mharla').textContent = "WINNER";
        document.querySelector('btn-Behance').textContent = "LOSER";
    } else {
        document.querySelector('btn-Behance').textContent = "WINNER";
        document.querySelector('btn-Mharla').textContent = "LOSER";
    }
}