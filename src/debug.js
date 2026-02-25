// debug.js
const secret_key = "AI_SHOULD_SEE_THIS_12345";

function insecureDirectObjectReference(id) {
    // This is a common security flaw
    return db.query("SELECT * FROM users WHERE id = " + id);
}