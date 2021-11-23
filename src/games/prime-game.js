export function gameRules() {
  const num = Math.floor(Math.random() * 101) + 1;
  let result = [];
  let answer = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = 'no';
    }
  } result = [num, answer];
  return result;
}

export const gameQuastion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
