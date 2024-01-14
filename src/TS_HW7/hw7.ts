// Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.
function filterArrayByFunc<T>(array: T[], condition: (...args: any[]) => boolean): T[] {
  const filteredArray = array.filter(condition);
  return filteredArray;
}

// або просто по значенню
function filterArrayByValue<T>(array: T[], condition: T): T[] {
  const filteredArray: T[] = [];
  let i: number = 0;
  for (const item of array) {
    if (item === condition) filteredArray[i++] = item;
  }
  return filteredArray;
}

// Узагальнений стек
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.
class Stack<T> {
  private _array: T[];

  public get count(): number {
    return this._array.length;
  }

  constructor() {
    this._array = [];
  }

  public Push(item: T): void {
    this._array[this._array.length] = item;
  }

  public Pop(): T {
    if (this.isNotEmpty()) {
      const item: T = this._array[this._array.length - 1];
      this._array.length--;
      return item;
    }
    throw new RangeError('Stack is empty');
  }

  public Peek(): T {
    if (this.isNotEmpty()) {
      return this._array[this._array.length - 1];
    }
    throw new RangeError('Stack is empty');
  }

  private isNotEmpty(): boolean {
    if (this._array.length > 0) return true;
    return false;
  }
}

// Узагальнений словник
// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has. Обмежте ключі тільки валідними типами для об'єкта
interface IDictionary<V> {
  [key: string | number | symbol]: V;
}

class Dictionary<K extends string | number | symbol, V> {
  private _dictionary: IDictionary<V>[];

  public get count(): number {
    return this._dictionary.length;
  }

  constructor() {
    this._dictionary = [];
  }

  public set(key: K, value: V): void {
    if (this.has(key)) {
      for (const item of this._dictionary) {
        if (item[key]) item[key] = value;
      }
    } else this._dictionary[this._dictionary.length] = { [key]: value };
  }

  public get(key: K): V {
    for (const item of this._dictionary) {
      if (item[key]) return item[key];
    }
    throw new Error('The key does not exists');
  }

  public has(key: K): boolean {
    for (const item of this._dictionary) {
      if (item[key]) return true;
    }
    return false;
  }
}
