class Triangle {
    constructor(position, size, color) {
      this.position = position;
      this.size = size;
      this.color = color;
    }
  
    draw() {
      // Generate the SVG representation of the triangle based on its properties
      return `<svg width="${this.size.width}" height="${this.size.height}">
                <polygon points="0,0 ${this.size.width},0 ${this.size.width / 2},${this.size.height}" fill="${this.color}" />
              </svg>`;
    }
  }
  
  module.exports = Triangle;