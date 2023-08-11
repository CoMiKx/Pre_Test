type Card = string;

interface HandScorer {
  calculateScore(hand: Card[]): number;
}

const handScorer: HandScorer = {
  calculateScore(hand) {
    const suits: { [suit: string]: number[] } = {
      'H': [],
      'C': [],
      'D': [],
      'S': []
    };

    const ranks: { [rank: string]: number } = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      'J': 10,
      'Q': 10,
      'K': 10,
      'A': 11
    };

    for (const card of hand) {
      const rank = card.slice(0, -1);
      const suit = card.slice(-1);
      suits[suit].push(ranks[rank]);
    }

    let maxSuitScore = 0;
    for (const suitScores of Object.values(suits)) {
      const suitScore = suitScores.reduce((sum, score) => sum + score, 0);
      maxSuitScore = Math.max(maxSuitScore, suitScore);
    }

    if (maxSuitScore === 35) {
      return maxSuitScore;
    } else if (maxSuitScore === 32.5) {
      return 32.5;
    } else {
      return maxSuitScore;
    }
  }
};

const hand: Card[] = ['8S', '8C', '8D']; // Example hand

const score = handScorer.calculateScore(hand);
console.log("Hand score:", score);
