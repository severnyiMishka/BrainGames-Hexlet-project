export function gameRules() {
  const mass = [];
  const start = Math.floor(Math.random() * 20) + 1;
  const substr = Math.floor(Math.random() * 10) + 1;
  const missed = Math.floor(Math.random() * 7);
  const answer = start + substr * missed;
  let result = [];
  for (let i = 0; i < 7; i += 1) {
    if (i === missed) {
      mass.push('..');
    } else {
      mass.push(start + substr * i);
    } result = [mass.join(' '), answer.toString()];
  } return result;
}

export const gameQuastion = 'What number is missing in the progression?';
