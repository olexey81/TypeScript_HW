// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
interface IUnionTypesIndexSign {
  [key: string]: number | string | string[];
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface IFuncTypesIndexSign {
  [key: string]: (...args: any[]) => any;
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
interface IArrayTypesIndexSign {
  [index: number]: string;
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface IPropIndexSign {
  [key: string]: string | number;
  name: string;
  adress: number;
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface IBaseIndexSign {
  [key: string]: number;
}

interface IExtendedIndexSign extends IBaseIndexSign {
  length: number;
  width: number;
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
function isNumbers(obj: IExtendedIndexSign, keys: string[]): boolean {
  for (const key of keys) {
    if (typeof obj[key] !== 'number') return false;
  }
  return true;
}
