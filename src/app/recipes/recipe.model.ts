export class Recipe {
  // Property name field for a particular recipe
  public name: string;
  public description: string;
  public imagePath: string; // url - path within our folder in public

  constructor(name: string, description: string, imagePath: string) {
    // assign the values
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
