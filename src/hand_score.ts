function getHandScore(input: string): number {
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
  
    const hand = input.split(' ');
    // console.log(hand);
    hand.forEach(card => {
        const suit = card[0];
        const rank = card.slice(1);
        // console.log(suit, rank);
        suits[suit].push(ranks[rank]);
        // console.log(suits[suit], ranks[rank]);
    });
  
    let maxSuitScore = 0;
    let suitScoresArray: number[][] = [];
    for (const suitScores of Object.values(suits)) {
        // console.log(suitScores);
        suitScoresArray.push(suitScores);
        const suitScore = suitScores.reduce((sum, score) => sum + score, 0);
        maxSuitScore = Math.max(maxSuitScore, suitScore);
    }
    // console.log(suitScoresArray);
    const uniqueArrays = new Set(suitScoresArray.map(arr => arr.toString()));
    const difArrays = Array.from(uniqueArrays);
    // console.log(uniqueArrays, uniqueArrays.size === 2 && suitScoresArray.length === 4);
    
    return uniqueArrays.size === 2 && suitScoresArray.length === 4 ? 
        (difArrays[0]==='11' || difArrays[1]==='11') ? maxSuitScore = 35 : maxSuitScore = 32.5 : maxSuitScore;
  }
  
  // Example usage
  const score = getHandScore("S8 S10 CA");
  console.log("Hand score:", score);
  