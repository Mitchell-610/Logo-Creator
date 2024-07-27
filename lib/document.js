// document.js
const fs = require('fs');
const path = require('path');
const { Square, Circle, Triangle } = require('./shapes');

function document(answers) {
    const { shapeType, shapeColor, logoName, textColor } = answers;

    
    console.log('Your logo was created successfully.');
}

function writeFile(svg) {
  fs.writeFileSync(`./logo.svg`, svg)
}

