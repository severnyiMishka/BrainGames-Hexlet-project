import readlineSync from 'readline-sync';

function gamePlay(gameQuestion, gameRules) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);
  let i = 0;
  while (i < 3) {
    const game = gameRules();
    console.log(`Question: ${game[0]}`);
    const answer = readlineSync.question('Your answer:  ');
    if (answer === game[1]) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${game[1]}'. \nLet's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
}
export default gamePlay;
