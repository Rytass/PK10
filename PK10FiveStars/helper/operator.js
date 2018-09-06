export function transNumber(number) {
  const splitNum = number.split('').map((num) => {
    if (num === '0') return '10';

    return `0${num}`;
  });
  const resultNum = splitNum.join('\xa0\xa0');

  return resultNum;
}

export default { transNumber };
