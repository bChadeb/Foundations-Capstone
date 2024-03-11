const sequelize = require('./database.js')

module.exports = {
    addKarma: (req, res) => {
        const {text} = req.body

        sequelize.query(`
            INSERT INTO karma (text)
            VALUES (
                '${text}'
            )
            RETURNING *;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err))
    },
    shownKarma: (req, res) => {
        sequelize.query(`
            SELECT * FROM tasks
            ORDER BY date ASC;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    deleteKarma: (req, res) => {
        let {id} = req.params
        sequelize.query(`
            DELETE FROM karma WHERE id = ${id};
            SELECT * FROM karma;
            ORDER BY date ASC;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
    },
    addUsers: (req, res) => {
        const {firstName, lastName, userName, passWord} = req.body
        sequelize.query(`
            INSERT INTO users (firstName, lastName, userName, passWord)
            VALUES (
                '${firstName}',
                '${lastName}',
                '${userName}',
                '${passWord}'
            )
            RETURNING *;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    getUsers: (req, res) => {
        console.log(req.body)
        const {userName, passWord} = req.body
        sequelize.query(`
            SELECT * FROM users WHERE username='${userName}' AND password='${passWord}';
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    }
}