const inquirer = require('inquirer');
const { promptUser } = require('../lib/promptUser');

// Mock inquirer.prompt
jest.mock('inquirer');

describe('promptUser', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should return user inputs correctly when all fields are valid', async () => {
        // Mock the return value of inquirer.prompt

    });

});
