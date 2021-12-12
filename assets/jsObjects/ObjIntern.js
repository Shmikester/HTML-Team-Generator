const ObjEmployee = require('./ObjEmployee.js');

//extending emp obj for intern
class ObjIntern extends ObjEmployee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.role = 'Intern';
    }
}

module.exports = ObjIntern;