// index.js
const { promptUser } = require('./lib/promptUser');
const { document } = require('./lib/document');

async function main() {
    try {
        const answers = await promptUser();
        // Call the createDocument function with the user's answers
        document(answers);
    } catch (error) {
        console.error('Error during prompt or document creation:', error);
    }
}

main();
