// document.js
const fs = require('fs');
const path = require('path');
const { Square, Circle, Triangle } = require('./shapes');

function document(answers) {
    const { shapeType, shapeColor, logoName, textColor } = answers;

let svg;

    // Draw the shape based on user input
    switch (shapeType.toLowerCase()) {
        case 'square':
          svg = new Square(logoName, textColor, shapeColor);
            break;
        case 'circle':
          svg = new Circle(logoName, textColor, shapeColor);
            break;
        case 'triangle':
          svg = new Triangle(logoName, textColor, shapeColor);
            break;
        default:
            console.log('Invalid shape type.');
            return;
    }

    
    console.log('Your logo was created successfully.');
}

function writeFile(svg) {
  fs.writeFileSync(`./logo.svg`, svg)
}

