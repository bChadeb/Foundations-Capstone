const sequelize = require('./database.js')

const seed = () => {
    sequelize.query(`
        DROP TABLE IF EXISTS karma;

        CREATE TABLE karma (
            id SERIAL PRIMARY KEY,
            text VARCHAR(255)
        );
    `).then(() => {
        console.log(`DB has been seeded!`)
    })
}

module.exports = seed