class Circle {
    constructor(position, size, color) {
      this.position = position;
      this.size = size;
      this.color = color;
    }
  
    draw() {
      return `<svg width="${this.size.width}" height="${this.size.height}">
                <circle cx="${this.size.width / 2}" cy="${this.size.height / 2}" r="${Math.min(this.size.width, this.size.height) / 2}" fill="${this.color}" />
              </svg>`;
    }
  }
  
  module.exports = Circle;