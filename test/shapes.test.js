const { Square, Circle, Triangle } = require('../lib/shapes');

describe('Shape Classes', () => {
    test('Square render method should return correct SVG', () => {
        const square = new Square('Test', 'red', 'blue');
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Test</text>
      </svg>`;
        expect(square.render().trim()).toEqual(expectedSvg.trim());
    });


    test('Triangle render method should return correct SVG', () => {
        const triangle = new Triangle('Test', 'red', 'blue');
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" fill="blue" />
  <text x="150" y="150" font-size="60" text-anchor="middle" fill="red">Test</text>
</svg>`;
        expect(triangle.render().trim()).toEqual(expectedSvg.trim());
    });

});