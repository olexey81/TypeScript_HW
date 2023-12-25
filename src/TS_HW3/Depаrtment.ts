/*
    Сутність Департамент - має назву, доменну область, список своїх співробітників і бюджет, що складається з дебіту і кредиту.

    Так само у неї існують методи для обчислення балансу виходячи з поточного бюджету,
    додавання нових співробітників, який враховує зміни балансу і перетворення з Попередньо найнятого на Співробітника або видалення Співробітника з минулого відділу.
*/
class Department {
  private _staff: Employee[] = [];
  private _budget: { debit: number; credit: number } = { debit: 0, credit: 0 };

  get Staff(): Employee[] {
    return this._staff;
  }

  get Budget(): { debit: number; credit: number } {
    return this._budget;
  }

  constructor(
    protected _company: Company,
    public Name: DepartmentsNames,
    public Domain: string,
    debit: number,
    credit: number
  ) {
    this._budget.debit = debit;
    this._budget.credit = credit;
    _company.Departments.push(this);
  }

  public GetBalance(): number {
    return this._budget.debit - this._budget.credit;
  }

  public AddEmployee(candidate: Employee | PreEmployee, salary: number, paymentInfo: string, status: Statuses): void {
    // check for existing in company
    if (!this._company.AllStaff.some(s => s.ID === candidate.ID)) {
      console.log('Person is out of the company');
    } else {
      // check for new empl type
      if (candidate instanceof Employee) {
        // check for existing in this dep
        if (candidate.Department.Name === this.Name) {
          console.log('Employee is already added to this department');
        } else {
          this.ChangeEmployee(candidate, salary, paymentInfo, status);
        }
      } else {
        this.ChangePreToEmployee(candidate, salary, paymentInfo, status);
      }
    }
  }

  private ChangePreToEmployee(candidate: PreEmployee, salary: number, paymentInfo: string, status: Statuses): void {
    // new instance of employee
    const employee: Employee = new Employee(candidate.FirstName, candidate.LastName, salary, paymentInfo, status, this);
    // removing preempl from company's lists and adding as empl and change of budget
    this._company.PreHiredStaff.filter(e => e.ID !== candidate.ID);
    this._company.AllStaff.filter(e => e.ID !== candidate.ID);
    this._staff.push(employee);
    this._company.AllStaff.push(employee);
    this._budget.credit += employee.Salary;
  }

  private ChangeEmployee(candidate: Employee, salary: number, paymentInfo: string, status: Statuses): void {
    // updating employee data
    candidate.Salary = salary;
    candidate.PaymentInfo = paymentInfo;
    candidate.Status = status;

    // remove from prev dep and change dep in empl data
    candidate.Department.Staff.filter(e => e.ID !== candidate.ID);
    candidate.Department = this;

    // add to staff and change of budget
    this._staff.push(candidate);
    this._budget.credit += candidate.Salary;
  }
}
