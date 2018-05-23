const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptons({
    new: true,
    runValidators: true
});

module.exports = Todo;