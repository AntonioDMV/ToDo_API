const Users = require('./users.models');
const Todos = require('./todos.models');
const Categories = require('./categories.models');

const initModels = () => {
    
    Users.hasMany(Todos, {foreignKey: 'author'});
    Todos.belongsTo(Users, {foreignKey: 'author'});

    Categories.hasMany(Todos, {foreignKey: 'category_id'});
    Todos.belongsTo(Categories, {foreignKey: 'category_id'});

}

module.exports = initModels;