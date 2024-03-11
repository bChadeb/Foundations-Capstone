const sequelize = require('./database.js')

module.exports = {
    addKarma: (req, res) => {
        const {text, user_id} = req.body

        sequelize.query(`
            INSERT INTO karma (text, user_id)
            VALUES (
                '${text}',
                '${user_id}'
            )
            RETURNING *;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err))
    },
    shownKarma: (req, res) => {
        sequelize.query(`
            SELECT * FROM karma
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    deleteKarma: (req, res) => {
        let {id} = req.params
        sequelize.query(`
            DELETE FROM karma WHERE id = ${id};
            SELECT * FROM karma;
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