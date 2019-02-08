var Sequelize = require('sequelize');
// http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html
// initialize database connection
 const sequelize = new Sequelize(`mysql://root:@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATA_BASE}`,{logging:false});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })
// load models
var models = [
  'Product',
  'Category'
]
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
})


// export connection
module.exports.sequelize = sequelize;