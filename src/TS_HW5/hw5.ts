/*  Створіть класи Circle, Rectangle, Square і Triangle.
    У кожного з них є загальнодоступний метод calculateArea.
    У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
    У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі.
*/
enum Colors {
  Red = 'Red',
  Orange = 'Orange',
  Yellow = 'Yellow',
  Green = 'Green',
  LigthBlue = 'Ligth Blue',
  Blue = 'Blue',
  Violet = 'Violet',
}

enum Names {
  Circle = 'Circle',
  Rectangle = 'Rectangle',
  Square = 'Square',
  Triangle = 'Triangle',
}

abstract class Figure {
  protected abstract readonly Color: Colors;
  protected abstract readonly Name: Names;
  protected abstract CalculateArea(numberA: number, numberB?: number, numberC?: number): number;
}

class Circle extends Figure {
  constructor(
    public readonly Color: Colors,
    public readonly Name: Names
  ) {
    super();
  }

  public CalculateArea(radius: number): number {
    if (!(radius > 0)) throw new RangeError('Radius is less or equal to zero!');
    return Math.PI * Math.pow(radius, 2);
  }
}

class Rectangle extends Figure {
  constructor(
    public readonly Color: Colors,
    public readonly Name: Names
  ) {
    super();
  }

  public CalculateArea(dimensionA: number, dimensionB: number): number {
    if (!Validator.isPositive(dimensionA, dimensionB))
      throw new RangeError('One or both dimensions less or equal to zero!');
    return dimensionA * dimensionB;
  }

  public Print(): string {
    return 'Area = dimensionA * dimensionB';
  }
}

class Square extends Figure {
  constructor(
    public readonly Color: Colors,
    public readonly Name: Names
  ) {
    super();
  }

  public CalculateArea(dimension: number): number {
    if (!Validator.isPositive(dimension)) throw new RangeError('Dimension is less or equal to zero!');
    return Math.pow(dimension, 2);
  }

  public Print(): string {
    return 'Area = dimension^2';
  }
}

class Triangle extends Figure {
  constructor(
    public readonly Color: Colors,
    public readonly Name: Names
  ) {
    super();
  }

  public CalculateArea(dimensionA: number, dimensionB: number, dimensionC: number): number {
    if (!Validator.isPositive(dimensionA, dimensionB, dimensionC))
      throw new RangeError('One or both dimensions less or equal to zero!');
    if (!Validator.isDimensionsCorrect(dimensionA, dimensionB, dimensionC))
      throw new RangeError('Invalid triangle dimensions!');
    const semiPerimetr: number = (dimensionA + dimensionB + dimensionC) / 2;
    const underRoot: number =
      semiPerimetr * (semiPerimetr - dimensionA) * (semiPerimetr - dimensionB) * (semiPerimetr - dimensionC);
    if (underRoot < 0) throw new EvalError('Invalid evaluation!');
    return Math.sqrt(underRoot);
  }
}

class Validator {
  static isPositive(numberA: number, numberB?: number, numberC?: number): boolean {
    if (numberB && numberC) return numberA > 0 && numberB > 0 && numberC > 0;
    if (numberB) return numberA > 0 && numberB > 0;
    return numberA > 0;
  }

  static isDimensionsCorrect(dimensionA: number, dimensionB: number, dimensionC: number): boolean {
    return (
      dimensionA + dimensionB > dimensionC &&
      dimensionA + dimensionC > dimensionB &&
      dimensionB + dimensionC > dimensionA
    );
  }
}

// const circle: Circle = new Circle(Colors.Yellow, Names.Circle);
// console.log(`${circle.Color}\n${circle.Name}\n${circle.CalculateArea(0.16)}\n\n`);

// const rectangle: Rectangle = new Rectangle(Colors.LigthBlue, Names.Rectangle);
// console.log(`${rectangle.Color}\n${rectangle.Name}\n${rectangle.CalculateArea(0.16, 0.16)}\n${rectangle.Print()}\n\n`);

// const square: Square = new Square(Colors.Red, Names.Square);
// console.log(`${square.Color}\n${square.Name}\n${square.CalculateArea(0.16)}\n${square.Print()}\n\n`);

// const triangle: Triangle = new Triangle(Colors.Green, Names.Triangle);
// console.log(`${triangle.Color}\n${triangle.Name}\n${triangle.CalculateArea(6, 5, 5)}`);
