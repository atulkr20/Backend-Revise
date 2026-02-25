// test.js
const apiKey = "12345-ABCDE-SECRET"; // AI should catch this
function processData(data) {
    eval(data); // AI should catch this security risk
}