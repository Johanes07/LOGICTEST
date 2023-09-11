function pattern_count(string, pattern) {
    if (string.length === 0 || pattern.length === 0) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i <= string.length - pattern.length; i++) {
        if (string.slice(i, i + pattern.length) === pattern) {
            count++;
        }
    }

    return count;
}

const string_input = "hell";
const pattern_input = "hello";
const result = pattern_count(string_input, pattern_input);

console.log(`INPUT:'${string_input}, '${pattern_input}' 'Output :${result}  `);
