// /*
//     Так само у нас є сутність Бухгалтерія, яка є департаментом і має властивість баланс, а також методи
//     для взяття на баланс співробітника або департаменту, зняття з балансу і виплати зарплати для всього персоналу.
//     Попередньо найняті співробітники отримують зарплату за допомогою зовнішніх оплат, Співробітники (тільки активні) - за допомогою внутрішніх.
// */
// import { Employee } from './Employee';
// import { Company } from './Company';
// import { Department } from './Department';
// import { PreEmployee } from './PreEmployee';
// import { Statuses, DepartmentsNames } from './Enums';

// export class Accounting extends Department {
//   public Balance: number;

//   constructor(company: Company, domain: string, debit: number, credit: number) {
//     super(company, DepartmentsNames.Accounting, domain, debit, credit);
//     this.Balance = debit - credit;
//   }

//   public TakeOnBalance(item: Employee | PreEmployee | Department): void {
//     switch (true) {
//       case item instanceof Employee || item instanceof PreEmployee: {
//         this.Balance += item.Salary;
//         break;
//       }
//       default: {
//         this.Balance += item.GetBalance();
//       }
//     }
//   }

//   public TakeOffBalance(item: Employee | PreEmployee | Department): void {
//     switch (true) {
//       case item instanceof Employee || item instanceof PreEmployee: {
//         this.Balance -= item.Salary;
//         break;
//       }
//       default: {
//         this.Balance -= item.GetBalance();
//       }
//     }
//   }

//   public PaySalary(): void {
//     this._company.AllStaff.forEach(s => {
//       if (s instanceof PreEmployee) {
//         this.ExternalPayment(s);
//         this.Balance -= s.Salary;
//       } else if (s.Status === Statuses.Active) {
//         this.InternalPayment(s);
//         this.Balance -= s.Salary;
//       }
//     });
//   }

//   private ExternalPayment(preEmployee: PreEmployee): void {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const account: string = preEmployee.Account;
//     // some logic with payment to account
//   }

//   private InternalPayment(employee: Employee): void {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const paymentInfo: string = employee.PaymentInfo;
//     // some logic with payment to paymentInfo
//   }
// }
