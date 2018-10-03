export function oddEvenKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/[oe]{2}/) && entry[1] === true)
    .map(([condition]) =>
      `(${Array.from(condition).map((key) => {
        switch (key) {
          case 'o':
            return '[13579]';

          case 'e':
            return '[24680]';

          default:
            return '.';
        }
      }).join('')})`).join('|');

  if (!composed) return numbers;

  const re = new RegExp(composed);

  numbers.forEach((num) => {
    if (`${num.num}`.match(re)) {
      num.killFailed();
    }
  });

  return numbers;
}

export default oddEvenKiller;
