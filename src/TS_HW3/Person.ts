import { v4 as uuidv4 } from 'uuid';

export class Person {
  public readonly ID: string;

  public get FullName(): string {
    return `${this.FirstName} ${this.LastName}`;
  }

  public get Salary(): number {
    return this._salary;
  }

  public set Salary(value: number) {
    if (value >= 0) {
      this._salary = value;
    } else {
      console.log('Incorrect salary value');
    }
  }

  constructor(
    public readonly FirstName: string,
    public readonly LastName: string,
    private _salary: number
  ) {
    this._salary = this._salary < 0 ? 0 : this._salary;
    this.ID = uuidv4();
  }
}
