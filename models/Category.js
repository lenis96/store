module.exports = function (sequelize, Sequelize) {
    return sequelize.define('categories', {
        description: Sequelize.STRING,
    }, {

            timestamps: false
        }
    )
}