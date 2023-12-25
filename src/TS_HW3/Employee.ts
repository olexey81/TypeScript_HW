/*
    Сутність Співробітника - ім'я, прізвище, платіжну інформацію, зарплату, статус (активний, неактивний, у неоплачуваній відпустці)
    і знання про департамент,до якого він прикріплений.
*/
class Employee extends Person {
  get PaymentInfo(): string {
    return this._paymentInfo;
  }

  set PaymentInfo(value: string) {
    this._paymentInfo = value;
  }

  get Status(): Statuses {
    return this._status;
  }

  set Status(value: Statuses) {
    this._status = value;
  }

  get Department(): Department {
    return this._department;
  }

  set Department(value: Department) {
    this._department = value;
  }

  constructor(
    firstName: string,
    lastName: string,
    salary: number,
    private _paymentInfo: string,
    private _status: Statuses,
    private _department: Department
  ) {
    super(firstName, lastName, salary);
  }
}
