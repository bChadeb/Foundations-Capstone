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
    }
}