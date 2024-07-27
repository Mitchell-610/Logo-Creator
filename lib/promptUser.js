// promptUser.js
const inquirer = require('inquirer');

async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'logoName',
            message: 'What would you like your logo name to be? Use three characters please.',
            validate: input => input.length === 3 ? true : 'Please enter exactly three characters.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Which color would you like to choose for text? Enter a color keyword or hexadecimal number:',
            validate: input => isValidColorInput(input) ? true : 'Please enter a valid color keyword or hexadecimal number.',
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Which shape would you like to choose?',
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Which color would you like to choose for the shape? Enter a color keyword or hexadecimal number:',
            validate: input => isValidColorInput(input) ? true : 'Please enter a valid color keyword or hexadecimal number.',
        }
    ]);
    return answers;
}

// Validation function
function isValidColorInput(input) {
    const colorKeywordPattern = /^(red|blue|green|yellow|purple)$/i;
    const hexPattern = /^#[0-9a-fA-F]{6}$/;
    return colorKeywordPattern.test(input.toLowerCase()) || hexPattern.test(input);
}

module.exports = {promptUser};