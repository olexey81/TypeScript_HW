/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */

//Візьміть декоратор DeprecatedMethod і навчіть його працювати з об'єктом, який вміє приймати причину, через яку його не варто використовувати, і назву методу, яким його можна замінити, якщо це можливо.
interface IReplacementInfo {
  reason: string;
  replacementMethod: string;
}

function DeprecatedMethod(info: IReplacementInfo) {
  return function <T, A extends unknown[], R>(
    originalMethod: (...args: A) => R,
    context: ClassMethodDecoratorContext<T, (...args: A) => R>
  ) {
    if (context.kind !== 'method') throw new Error('Only for methods');

    return function replaceMethod(this: T, ...args: A): R {
      console.warn(
        `Method "${String(context.name)}" is deprecated by ${info.reason}. Use instead method "${info.replacementMethod}"`
      );
      return originalMethod.apply(this, args);
    };
  };
}

//Створіть декоратори MinLength, MaxLength та Email
function MinLength(minLength: number) {
  return function <T, V extends { length: number }>(
    originalProperty: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    if (context.kind !== 'field') throw new Error('Only for properties');

    return function (this: T, value: V): V {
      if (value.length < minLength) {
        console.warn(
          `Length of "${String(context.name)}" must be not less than ${minLength}, but it's length is ${value.length}`
        );
      }
      return value;
    };
  };
}

function MaxLength(maxLength: number) {
  return function <T, V extends { length: number }>(
    originalProperty: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    if (context.kind !== 'field') throw new Error('Only for properties');

    return function (this: T, value: V): V {
      if (value.length > maxLength) {
        console.warn(
          `Length of "${String(context.name)}" must be less than ${maxLength + 1}, but it's length is ${value.length}`
        );
      }
      return value;
    };
  };
}

function Email(emailRegex: RegExp) {
  return function <T, V extends string>(originalProperty: undefined, context: ClassFieldDecoratorContext<T, V>) {
    if (context.kind !== 'field') throw new Error('Only for properties');

    return function (this: T, value: V): V {
      if (!emailRegex.test(value)) {
        console.warn(`"${String(context.name)}" is not a valid email address`);
      }
      return value;
    };
  };
}

// testing
class Test {
  @MinLength(4)
  @MaxLength(6)
  public login: string = 'abc';

  @MinLength(4)
  @MaxLength(6)
  public arrNum: number[] = [1, 2, 3, 4, 5, 6, 7];

  @MinLength(4)
  @MaxLength(6)
  public arrStr: string[] = ['1', '7'];

  @MinLength(4)
  @MaxLength(6)
  public lengthAble: ILength = { someProp: 'test', length: 44 };

  @Email(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  public email: string = ' some@ardess.com';

  public value: number = 99;

  @DeprecatedMethod({ reason: "it's outdated", replacementMethod: 'newMethod' })
  public method(extValue: number = 1): number {
    return this.value * extValue;
  }
}

interface ILength {
  someProp: string;
  length: number;
}

const test = new Test();
console.log(test.method(99));
