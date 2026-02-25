/**
 * TEST FILE FOR SENTINAI
 * This code is intentionally bad to see if the AI catches the issues.
 */

const fs = require('fs');

// 1. SECURITY RISK: Hardcoded Secret
const GITHUB_TOKEN = "ghp_L1veAndD1rectlySecretToken12345"; 

// 2. PERFORMANCE ISSUE: N+1 Style loop or heavy operation in a loop
async function processUsers(users) {
    for (let i = 0; i < users.length; i++) {
        // AI should suggest using Promise.all or a single query
        const details = await db.query(`SELECT * FROM profiles WHERE id = ${users[i].id}`);
        console.log(details);
    }
}

// 3. SECURITY RISK: SQL Injection vulnerability
function getUser(userId) {
    // Unsanitized input directly in query
    const query = "SELECT * FROM users WHERE id = '" + userId + "'";
    return db.execute(query);
}

// 4. CODE SMELL: Use of 'eval' and 'var'
var oldWay = "bad practice";
function executeCustomCode(code) {
    return eval(code); // Extremely dangerous
}

// 5. LOGIC ERROR: Infinite recursion potential
function countdown(n) {
    console.log(n);
    return countdown(n - 1); // No base case!
}