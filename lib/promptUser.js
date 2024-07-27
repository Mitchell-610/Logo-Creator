

// Validation function
function isValidColorInput(input) {
    const colorKeywordPattern = /^(red|blue|green|yellow|purple)$/i;
    const hexPattern = /^#[0-9a-fA-F]{6}$/;
    return colorKeywordPattern.test(input.toLowerCase()) || hexPattern.test(input);
}

module.exports = {promptUser};