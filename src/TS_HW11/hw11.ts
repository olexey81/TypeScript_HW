// потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром, і властивість steps — це число викликів до знаходження паліндрома.
function findPalindrome(initNumber: number): { result: number | null; steps: number } {
  if (!Number.isSafeInteger(initNumber)) throw new Error('Number is not an integer');
  if (initNumber <= 0) throw new Error('Number is non positive');

  let currentNumber: number = initNumber;
  let step: number = 0;

  for (;;) {
    const reversedNumber: number = reverseNumber(currentNumber);
    const sum: number = currentNumber + reversedNumber;

    if (currentNumber > Number.MAX_VALUE || reversedNumber > Number.MAX_VALUE || sum > Number.MAX_VALUE) {
      return { result: null, steps: step };
    }

    if (sum === reverseNumber(sum)) {
      return { result: sum, steps: step + 1 };
    }

    currentNumber = sum;
    step++;
  }
}
function reverseNumber(num: number): number {
  const digits: number = Math.floor(Math.log10(num)) + 1;
  let reversedNumber: number = 0;
  for (let i: number = 1; i <= digits; i++) {
    reversedNumber = reversedNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNumber;
}

// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву. Використовуйте рекурсію для знаходження всіх перестановок.
function permutation<T>(arr: T[]): T[][] {
  if (arr.length === 1) {
    return [arr];
  }

  const result: T[][] = [];

  for (let i: number = 0; i < arr.length; i++) {
    const cuted: T[] = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permuted: T[][] = permutation(cuted);

    for (const perm of permuted) {
      result.push([arr[i], ...perm]);
    }
  }

  return result;
}
