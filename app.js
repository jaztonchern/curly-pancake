const words = [
  { cue: 'Fruit', word: 'Apple' },
  { cue: 'Color', word: 'Blue' },
  { cue: 'Animal', word: 'Dog' },
  { cue: 'Country', word: 'France' },
  { cue: 'Sport', word: 'Football' }
];

function getRandomCue() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].cue;
}

function promptRecall(cue) {
  const userAnswer = prompt(`Recall a word associated with: ${cue}`);
  return userAnswer;
}

function startCuedRecallTask() {
  console.log('---- Cued Recall Task ----');
  let score = 0;

  for (let i = 0; i < words.length; i++) {
    const cue = getRandomCue();
    const expectedWord = words.find(word => word.cue === cue).word;
    
    const userAnswer = promptRecall(cue);
    if (userAnswer.toLowerCase() === expectedWord.toLowerCase()) {
      score++;
      console.log('Correct!');
    } else {
      console.log(`Incorrect! The correct word was: ${expectedWord}`);
    }
  }

  console.log(`Task completed. Your score: ${score}/${words.length}`);
}

startCuedRecallTask();