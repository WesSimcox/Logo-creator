class Square {
    constructor(position, size, color) {
      this.position = position;
      this.size = size;
      this.color = color;
    }
  
    draw() {
      // Generate the SVG representation of the square based on its properties
      return `<svg width="${this.size.width}" height="${this.size.height}">
                <rect x="0" y="0" width="${this.size.width}" height="${this.size.height}" fill="${this.color}" />
              </svg>`;
    }
  }
  
  module.exports = Square;