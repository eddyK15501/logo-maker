// Parent class Shape
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(newColor) {
    this.color = newColor;
  }
}

// Child classes Triangle, Circle & Square inherits from parent class Shape
class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  // method returns a string for a triangle SVG element
  render() {
    return `<polygon points="150,15 243,176 57,176" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  // method returns a string for a circle SVG element
  render() {
    return `<circle cx="150" cy="110" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }
  // method returns a string for a square SVG element
  render() {
    return `<rect x="68" y="30" width="160" height="160" fill="${this.color}" />`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
