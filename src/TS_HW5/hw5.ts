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
  protected abstract CalculateArea(): number;
}

abstract class FigureWithPrint extends Figure {
  protected abstract Print(): string;
}

class Circle extends Figure {
  private _radius: number = 0;

  public get radius(): number {
    return this._radius;
  }

  public set radius(r: number) {
    if (!Validator.isPositive(r)) throw new RangeError('Radius is less or equal to zero!');
    this._radius = r;
  }

  constructor(
    public readonly Color: Colors,
    public readonly Name: Names
  ) {
    super();
  }

  public CalculateArea(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }
}

class Rectangle extends FigureWithPrint {
  private _dimensions: [A: number, B: number] = [0, 0];

  get dimensions(): [A: number, B: number] {
    return this._dimensions;
  }

  set dimensions(d: [A: number, B: number]) {
    if (!Validator.isPositive(d[0], d[1])) throw new RangeError('One or both dimensions less or equal to zero!');
    this._dimensions = d;
  }

  constructor(
    public readonly Color: Colors,
    public readonly Name: Names
  ) {
    super();
  }

  public CalculateArea(): number {
    return this._dimensions[0] * this._dimensions[1];
  }

  public Print(): string {
    return 'Area = dimensionA * dimensionB';
  }
}

class Square extends FigureWithPrint {
  private _dimension: number = 0;

  public get dimension(): number {
    return this._dimension;
  }

  public set dimension(d: number) {
    if (!Validator.isPositive(d)) throw new RangeError('Dimension is less or equal to zero!');
    this._dimension = d;
  }

  constructor(
    public readonly Color: Colors,
    public readonly Name: Names
  ) {
    super();
  }

  public CalculateArea(): number {
    return Math.pow(this._dimension, 2);
  }

  public Print(): string {
    return 'Area = dimension^2';
  }
}

class Triangle extends Figure {
  private _dimensions: [A: number, B: number, C: number] = [0, 0, 0];

  get dimensions(): [A: number, B: number, C: number] {
    return this._dimensions;
  }

  set dimensions(d: [A: number, B: number, C: number]) {
    if (!Validator.isPositive(d[0], d[1], d[2])) throw new RangeError('One or all dimensions less or equal to zero!');
    if (!Validator.isDimensionsCorrect(d[0], d[1], d[2])) throw new RangeError('Invalid triangle dimensions!');
    this._dimensions = d;
  }

  constructor(
    public readonly Color: Colors,
    public readonly Name: Names
  ) {
    super();
  }

  public CalculateArea(): number {
    const semiPerimetr: number = (this._dimensions[0] + this._dimensions[1] + this._dimensions[2]) / 2;
    const underRoot: number =
      semiPerimetr *
      (semiPerimetr - this._dimensions[0]) *
      (semiPerimetr - this._dimensions[1]) *
      (semiPerimetr - this._dimensions[2]);
    if (underRoot < 0) throw new EvalError('Invalid evaluation!');
    return Math.sqrt(underRoot);
  }
}

class Validator {
  static isPositive(...numbers: number[]): boolean {
    return numbers.filter(n => n <= 0).length === 0;
  }

  static isDimensionsCorrect(dimensionA: number, dimensionB: number, dimensionC: number): boolean {
    return (
      dimensionA + dimensionB > dimensionC &&
      dimensionA + dimensionC > dimensionB &&
      dimensionB + dimensionC > dimensionA
    );
  }
}

const circle: Circle = new Circle(Colors.Yellow, Names.Circle);
circle.radius = 10;
console.log(`${circle.Color}\n${circle.Name}\n${circle.CalculateArea()}\n\n`);

const rectangle: Rectangle = new Rectangle(Colors.LigthBlue, Names.Rectangle);
rectangle.dimensions = [2, 4];
console.log(`${rectangle.Color}\n${rectangle.Name}\n${rectangle.CalculateArea()}\n${rectangle.Print()}\n\n`);

const square: Square = new Square(Colors.Red, Names.Square);
square.dimension = 10;
console.log(`${square.Color}\n${square.Name}\n${square.CalculateArea()}\n${square.Print()}\n\n`);

const triangle: Triangle = new Triangle(Colors.Green, Names.Triangle);
triangle.dimensions = [6, 5, 5];
console.log(`${triangle.Color}\n${triangle.Name}\n${triangle.CalculateArea()}`);
