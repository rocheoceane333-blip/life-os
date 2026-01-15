export class Meal {
  constructor({ id, name, defaultCalories, macros, category }) {
    this.id = id;
    this.name = name;
    this.defaultCalories = defaultCalories;
    this.macros = macros; // {p, c, f}
    this.category = category; // 'Breakfast', 'Lunch', etc.
  }
}