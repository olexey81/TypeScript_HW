/* 
    У вас є сутність - Компанія, яка має назву, список департаментів, список попередньо найнятого персоналу,
    а також список усього персоналу компанії - співробітники всіх департаментів і попередньо найняті.
*/
class Company {
  private _departments: Department[] = [];
  private _preHiredStaff: PreEmployee[] = [];
  private _allStaff: (PreEmployee | Employee)[] = [];

  get Departments(): Department[] {
    return this._departments;
  }

  get PreHiredStaff(): PreEmployee[] {
    return this._preHiredStaff;
  }

  get AllStaff(): (PreEmployee | Employee)[] {
    return this._allStaff;
  }

  constructor(public readonly Name: string) {}
}
