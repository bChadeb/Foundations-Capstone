const sequelize = require('./database.js')

const seed = () => {
    sequelize.query(`
    
DROP TABLE IF EXISTS karma;

DROP TABLE IF EXISTS users;
    
    CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        firstName VARCHAR(30),
        lastName VARCHAR(30),
        userName VARCHAR(255),
        passWord VARCHAR(255),
        karmaUser INT[] DEFAULT array[]::integer[]
    );


    CREATE TABLE karma (
        id SERIAL PRIMARY KEY,
        text VARCHAR(255),
        user_id INT REFERENCES users(user_id)
    );
    `).then(() => {
        console.log(`DB has been seeded!`)
    }).catch(err => console.log(err))
}

module.exports = seed