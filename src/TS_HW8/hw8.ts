// Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.
type DeepReadonly<T> = {
  +readonly [K in keyof T]: DeepReadonly<T[K]>;
};

// Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
type DeepRequireReadonly<T> = {
  +readonly [K in keyof T]-?: DeepRequireReadonly<T[K]>;
};

// Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.
type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<K & string>]: T[K];
};
type UpperCaseKeysDeep<T> = {
  [K in keyof T as Uppercase<K & string>]: UpperCaseKeysDeep<T[K]>;
};

// І саме цікаве. Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: {
    value: T[K];
    count: number;
    isActive: boolean;
  };
};
