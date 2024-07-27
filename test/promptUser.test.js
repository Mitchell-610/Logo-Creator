const inquirer = require('inquirer');
const { promptUser } = require('../lib/promptUser');

// Mock inquirer.prompt
jest.mock('inquirer');

describe('promptUser', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    

});
