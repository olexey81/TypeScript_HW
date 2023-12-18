/* class School {
  public directions: any[] = []; // має бути : Direction[]

  public addDirection(direction: any): void {
    this.directions.push(direction);
  }
}

class Direction {
  public levels: any[] = []; // : Level[]
  private _name: string;

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  public addLevel(level: any): void {
    this.levels.push(level);
  }
}

class Level {
  public groups: any[] = []; // : Group[]
  private _name: string;
  private _program: string;

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
  }

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  public addGroup(group: any) {
    this.groups.push(group);
  }
}

class Group {
  private _students: any[] = []; // : Student[]
  public directionName: string;
  public levelName: string;
  
  get students(): any[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  public addStudent(student: any): void {
    this._students.push(student);
  }

  public showPerformance(): any[] {
    const sortedStudents: any[] = this.students.toSorted(
      (a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  public grades: any = {};            // певний об'єкт Grade ?
  public attendance: boolean[] = [];  // або об'єкт ?
  public firstName: string;
  public lastName: string;
  public birthYear: number;
  

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  public setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  public markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  public getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present: boolean) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
 */