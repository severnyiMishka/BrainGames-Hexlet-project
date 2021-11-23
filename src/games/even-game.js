export function gameRules() {
  const num = Math.floor(Math.random() * 101) + 1;
  let answer = 'no';
  let result = [];
  if (num % 2 === 0) {
    answer = 'yes';
  } result = [num, answer];
  return result;
}

export const gameQuastion = 'Answer "yes" if the number is even, otherwise answer "no".';
