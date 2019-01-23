module.exports = function (sequelize, Sequelize) {
    return sequelize.define('products', {
        description: Sequelize.STRING,
        price:Sequelize.FLOAT,
        quantity:Sequelize.INTEGER
    }, {

            timestamps: false
        }
    )
}