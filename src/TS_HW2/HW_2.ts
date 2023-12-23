type Lecturer = {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: string[];
  contacts: string[];
};

class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas: Area[] = [];
  private _lecturers: Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  public addArea(area: Area): void {
    this._areas.push(area);
  }

  public removeArea(area: Area): void {
    this._areas = this._areas.filter(a => a.name !== area.name);
  }

  public addLecturer(lecturer: Lecturer): void {
    this._lecturers.push(lecturer);
  }

  public removeLecturer(lecturer: Lecturer): void {
    this._lecturers = this._lecturers.filter(l => !(l.name === lecturer.name && l.surname === lecturer.surname));
  }
}

enum AreaNames {
  Science = 'Science',
  Mathematics = 'Mathematics',
  Biology = 'Biology',
  Philosophy = 'Philosophy',
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  private _levels: Level[] = [];
  private _name: AreaNames;

  get levels(): Level[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  constructor(name: AreaNames) {
    this._name = name;
  }

  public addLevel(level: Level): void {
    this._levels.push(level);
  }

  public removeLevel(level: Level): void {
    this._levels = this._levels.filter(l => l.name !== level.name);
  }
}

enum LevelNames {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Uppermediate = 'Uppermediate',
  Top = 'Top',
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  private _groups: Group[] = [];
  private _name: LevelNames;
  private _description: string;

  get groups(): Group[] {
    return this._groups;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  constructor(name: LevelNames, description: string) {
    this._name = name;
    this._description = description;
  }

  public addGroup(group: Group): void {
    this._groups.push(group);
  }

  public removeGroup(group: Group): void {
    this._groups = this._groups.filter(
      g => !(g.directionName === group.directionName && g.levelName === group.levelName)
    );
  }
}

enum Status {
  active = 1,
  inactive,
  online,
  offline,
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  private _area: Area;
  private _status: Status | undefined;
  private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*
  private _directionName: string;
  private _levelName: string;

  get area(): Area {
    return this._area;
  }

  get status(): Status | undefined {
    return this._status;
  }

  get students(): Student[] {
    return this._students;
  }

  get directionName(): string {
    return this._directionName;
  }

  get levelName(): string {
    return this._levelName;
  }

  constructor(directionName: AreaNames, levelName: LevelNames) {
    this._directionName = directionName;
    this._levelName = levelName;
    this._area = new Area(directionName);
  }

  public addStudent(student: Student): void {
    this._students.push(student);
  }

  public removeStudent(student: Student): void {
    this._students = this._students.filter(s => s.fullName !== student.fullName);
  }

  public showPerformance(): Student[] {
    const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }

  public setStatus(status: number): void {
    if (Object.values(Status).includes(status)) {
      this._status = status;
    } else {
      console.error(`Invalid status code: ${status}`);
    }
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: { workName: string; mark: number }[] = []; // workName: mark
  private _visits: { lesson: string; present: boolean }[] = []; // lesson: present

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  private set fullName(value) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  public getPerformanceRating(): number {
    const gradeValues: number[] = this._grades.map(g => g.mark);

    if (!gradeValues.length) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage: number = (this._visits.filter(v => v.present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }

  public setGrade(workName: string, mark: number): void {
    this._grades.push({ workName, mark });
  }

  public setVisit(lesson: string, present: boolean): void {
    this._visits.push({ lesson, present });
  }
}
