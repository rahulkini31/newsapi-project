const bcrypt = require('bcryptjs');

const password = 'password123';  // The plaintext password
const hashedPassword = '$2a$12$C9hNG0YPyH/0dX9x0XfRNO7Pkn4RQ0bcMGeQVK7bVhTu9w9TT.qQS';  // The hashed password from DB

bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result);  // Should log true if the password matches
});