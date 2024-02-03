/*
У вас є дві сутності - список фільмів і список категорій фільмів.
У кожного списку є пошук за ім'ям (це, по суті, фільтрація), у списку фільмів є додаткова фільтрація за роком випуску, рейтингом і нагородами.
Кожен список містить стан його фільтрів, який може бути змінений тільки методом applySearchValue або applyFiltersValue (за наявності додаткових фільтрів)
Кожен фільм містить поля: назва, рік випуску, рейтинг, список нагород.
Категорія містить поля: назва і фільми.
У нас визначено три типи фільтрів:
Фільтр відповідності має поле filter
Фільтр діапазону має поле filter і filterTo
Фільтр пошуку за значеннями має поле values
Вам необхідно подумати про поділ вашого коду на різні сутності, інтерфеси і типи, щоб зробити ваше рішення типобезпечним. Реалізація всіх методів не є необхідною - це за бажанням.
*/

class MovieList {
  private status: Filter<unknown>[];

  constructor(private movies: Movie[]) {
    this.status = [];
  }

  public searchByName(name: string): void {
    const filter: Filter<string> = { type: FilterTypes.Match, filter: name };
    this.applySearchValue(filter);
  }

  public searchByYear(year: number, yearTo?: number): void {
    const filter: Filter<number> = { type: FilterTypes.Range, filter: year, filterTo: yearTo };
    this.applySearchValue(filter);
  }

  public searchByRating(rating: number, ratingTo?: number): void {
    const filter: Filter<number> = { type: FilterTypes.Range, filter: rating, filterTo: ratingTo };
    this.applySearchValue(filter);
  }

  public searchByAwards(awards: Award[]): void {
    const filter: Filter<Award[]> = { type: FilterTypes.Search, values: awards };
    this.applySearchValue(filter);
  }

  public applySearchValue(filter: Filter<unknown>): void {
    this.status.push(filter);
  }

  public applyFiltersValue(filter: Filter<unknown>): void {
    this.status.push(filter);
  }
}

class CategoryList {
  private status: Filter<unknown>[];

  constructor(private categories: Category[]) {
    this.status = [];
  }

  public searchByName(name: string): void {
    const filter: Filter<string> = { type: FilterTypes.Match, filter: name };
    this.applySearchValue(filter);
  }

  public applySearchValue(filter: Filter<unknown>): void {
    this.status.push(filter);
  }

  public applyFiltersValue(filter: Filter<unknown>): void {
    this.status.push(filter);
  }
}

interface Movie {
  name: string;
  year: number;
  rating: number;
  awards: Award[];
}

interface Award {
  name: string;
}

interface Category {
  name: string;
  movies: Movie[];
}

type Filter<T> = {
  type: FilterTypes;
  filter?: Extract<T, string | number>;
  filterTo?: Extract<T, string | number>;
  values?: T;
};

enum FilterTypes {
  Match = 'MatchFilter',
  Range = 'RangeFilter',
  Search = 'SearchFilter',
}
