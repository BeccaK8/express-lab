const students = [
    {id: 1, firstName: 'Joe', lastName: 'Smith', grade: '1'},
    {id: 12, firstName: 'Bob', lastName: 'Jones', grade: '5'},
    {id: 3, firstName: 'Jill', lastName: 'Harrison', grade: '12'},
    {id: 44, firstName: 'Fred', lastName: 'Joel', grade: '4'},
    {id: 5, firstName: 'Jane', lastName: 'Smith', grade: '8'}
];

module.exports = {
    getAll: function() {
        return students;
    },

    getOne: function(id) {
        id = parseInt(id);
        for (let s in students) {
            if (students[s].id === id) return students[s];
        }
        return students[0];
    }
};