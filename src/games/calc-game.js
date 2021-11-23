export function gameRules() {
  const firstNum = Math.floor(Math.random() * 101) + 1;
  const secondNum = Math.floor(Math.random() * 101) + 1;
  const operators = ['+', '-', '*'];
  const randomOpIndex = Math.floor(Math.random() * 3);
  const randomOperator = operators[randomOpIndex];
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  let answer = 0;
  let result = [];
  switch (randomOpIndex) {
    case 0: answer = firstNum + secondNum; break;
    case 1: answer = firstNum - secondNum; break;
    case 2: answer = firstNum * secondNum; break;
    default:
  } result = [question, answer.toString()];
  return result;
}

export const gameQuastion = 'What is the result of the expression?';
