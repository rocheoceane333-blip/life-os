export class SavedRecipe {
  constructor({ id, title, ingredients = [], instructions = [], prepTime, caloriesPerServing }) {
    this.id = id;
    this.title = title;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.prepTime = prepTime;
    this.caloriesPerServing = caloriesPerServing;
  }
}