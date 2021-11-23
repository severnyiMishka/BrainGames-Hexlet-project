export function gameRules() {
  const firstNum = Math.floor(Math.random() * 101) + 1;
  const secondNum = Math.floor(Math.random() * 101) + 1;
  const min = Math.min(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;
  console.log(question);
  const result = [question];
  for (let i = min; i > 0; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      const answer = i;
      result.push(answer.toString());
      return result;
    }
  } return result;
  /* result = [question, answer];
  return result; */
}

export const gameQuastion = 'Find the greatest common divisor of given numbers.';
