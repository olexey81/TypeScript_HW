//  1. Створіть інтерфейс, який описує структуру об'єкта,що представляє калькулятор.
//  Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення.
//  Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.

enum Actions {
  Addition,
  Subtraction,
  Multiplication,
  Division,
}

interface ICalculator {
  addition(firstNumber: number, secondNumber: number): number;
  subtraction(firstNumber: number, secondNumber: number): number;
  multiplication(firstNumber: number, secondNumber: number): number;
  division(firstNumber: number, secondNumber: number): number;
}

class Calculator implements ICalculator {
  addition(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  subtraction(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }

  multiplication(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }

  division(firstNumber: number, secondNumber: number): number {
    return firstNumber / secondNumber;
  }
}

function calculate(calc: ICalculator, action: Actions, firstNumber: number, secondNumber: number): number {
  switch (action) {
    case Actions.Addition:
      return calc.addition(firstNumber, secondNumber);
    case Actions.Subtraction:
      return calc.subtraction(firstNumber, secondNumber);
    case Actions.Multiplication:
      return calc.multiplication(firstNumber, secondNumber);
    case Actions.Division:
      return calc.division(firstNumber, secondNumber);
  }
}

// using

const calc = new Calculator();
console.log(calculate(calc, 0, 55, 66));
console.log(calculate(calc, 1, 55, 66));
console.log(calculate(calc, 2, 55, 66));
console.log(calculate(calc, 3, 55, 66));

//  2.Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги.
//  Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок, авторів і методи веб-сервісу для отримання інформації про книжки та авторів.
//  Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, і використовуйте інтерфейси для отримання інформації про книги та авторів.

enum Genres {
  FairyTail = 'Fairy tail',
  fantasy = 'Fantasy',
  detective = 'Detective',
  adventure = 'Adventure',
}

interface IBook {
  Title: string;
  Genre: Genres[];
  Year: number;
  Authors: IAuthor[];
}

interface IAuthor {
  FirstName: string;
  LastName: string;
  Country: string;
}

interface IBookService {
  BookInfo(book: IBook): string[];
  AuthorInfo(author: IAuthor): string[];
}

class BookService implements IBookService {
  BookInfo(book: IBook): string[] {
    const result: string[] = [];

    result.push(`Title: ${book.Title}`);

    result.push(`Year: ${book.Year}`);

    if (book.Authors.length > 0) {
      result.push(`Author(s): ${book.Authors.map(a => `${a.FirstName} ${a.LastName}`).join(', ')}`);
    } else {
      result.push('No author info');
    }

    if (book.Genre.length > 0) {
      result.push(`Genre: ${book.Genre.join(', ')}`);
    } else {
      result.push('No genre info');
    }

    return result;
  }

  AuthorInfo(author: IAuthor): string[] {
    const result: string[] = [];

    result.push('Name: ' + author.FirstName + ' ' + author.LastName);
    result.push('Country: ' + author.Country);

    return result;
  }
}

// using

const author1: IAuthor = { FirstName: 'Ben', LastName: 'White', Country: 'England' };
const author2: IAuthor = { FirstName: 'Joe', LastName: 'Black', Country: 'USA' };

const book: IBook = {
  Title: 'Some Book',
  Genre: [Genres.adventure, Genres.FairyTail],
  Year: 2000,
  Authors: [author1, author2],
};

const bookService = new BookService();

console.log(bookService.AuthorInfo(author1));
console.log(bookService.AuthorInfo(author2));
console.log(bookService.BookInfo(book));
