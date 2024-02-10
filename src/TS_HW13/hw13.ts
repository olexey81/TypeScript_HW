/*
Вам необхідно написати додаток Todo list.

У списку нотаток повинні бути методи:
+ для додавання нового запису,
+ видалення,
+ редагування
+ отримання повної інформації про нотатку за ідентифікатором,
+ отримання списку всіх нотаток.

Крім цього, у користувача має бути можливість
+ позначити нотаток, як виконаний
+ отримання інформації про те, скільки всього нотаток у списку
+ скільки залишилося невиконаними.
+ Нотатки не повинні бути порожніми.

+ Кожний нотаток має назву, зміст, дату створення і редагування та статус.
+ Нотатки бувають двох типів. Дефолтні та такі, які вимагають підтвердження при ридагуванні.

+ Окремо необхідно розширити поведінку списку та додати можливість пошуку нотатка за ім'ям або змістом.

+ Також окремо необхідно розширити список можливістю сортування нотаток за статусом або часом створення.
*/

interface INote {
  name: string;
  content: string;
  createDate: Date;
  changeDate: Date;
  status: boolean;
  type: 'default' | 'comfirmationRequired';
}

interface INotePad {
  list: INote[];

  addNewNote(newnote: INote): void;
  deleteNote(...args: unknown[]): void;
  editNote(...args: unknown[]): void;
  showNoteInfoByID(id: number): void;
  getAllNotes(): INote[];

  markNoteAsDone(note: INote): void;
  countTotalNotes(): number;
  countRemainingNotes(): number;
}

interface ISearchableNotePad {
  getNotesByName(name: string): INote[];
  getNotesByContent(content: string): INote[];
}

interface ISortableNotePad {
  sortNotesByStatus(): void;
  sortNotesByCreationDate(): void;
}

class NotePad implements INotePad, ISearchableNotePad, ISortableNotePad {
  get list(): INote[] {
    return this._list;
  }

  constructor(private _list: INote[] = []) {}

  addNewNote(newnote: INote): void {
    throw new Error('Method not implemented.');
  }

  deleteNote(...args: unknown[]): void {
    throw new Error('Method not implemented.');
  }

  editNote(...args: unknown[]): void {
    throw new Error('Method not implemented.');
  }

  showNoteInfoByID(id: number): void {
    throw new Error('Method not implemented.');
  }

  getAllNotes(): INote[] {
    throw new Error('Method not implemented.');
  }

  markNoteAsDone(note: INote): void {
    throw new Error('Method not implemented.');
  }

  countTotalNotes(): number {
    throw new Error('Method not implemented.');
  }

  countRemainingNotes(): number {
    throw new Error('Method not implemented.');
  }

  getNotesByName(name: string): INote[] {
    throw new Error('Method not implemented.');
  }

  getNotesByContent(content: string): INote[] {
    throw new Error('Method not implemented.');
  }

  sortNotesByStatus(): void {
    throw new Error('Method not implemented.');
  }

  sortNotesByCreationDate(): void {
    throw new Error('Method not implemented.');
  }
}

class Note implements INote {
  public readonly createDate: Date;
  public readonly type: 'default' | 'comfirmationRequired';
  private _name: string;
  private _content: string;
  private _changeDate: Date;
  private _status: boolean;

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    // some checks
    this._name = newName;
  }

  get content(): string {
    return this._content;
  }

  set content(newContent: string) {
    // some checks
    this._content = newContent;
  }

  get changeDate(): Date {
    return this._changeDate;
  }

  set changeDate(updateDate: Date) {
    // some checks
    this._changeDate = updateDate;
  }

  get status(): boolean {
    return this._status;
  }

  set status(newStatus: boolean) {
    // some checks
    this._status = newStatus;
  }

  constructor(name: string, content: string, type: 'default' | 'comfirmationRequired') {
    this.createDate = new Date();
    this._name = name;
    this._content = content;
    this._changeDate = this.createDate;
    this._status = true;
    this.type = type;
  }
}
