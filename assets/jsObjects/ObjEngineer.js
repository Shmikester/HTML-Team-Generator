const ObjEmployee = require('./ObjEmployee.js');

//extending emp obj for
class ObjEngineer extends ObjEmployee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }
}

module.exports = ObjEngineer;