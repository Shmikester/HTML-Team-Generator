const ObjEmployee = require('./ObjEmployee.js');

//extends emp obj for manager
class ObjManager extends ObjEmployee
{
    constructor(name, id, email, officeNum)
    {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = 'Manager';
    }

    getOfficeNum()
    {
        return this.officeNum;
    }

    getRole()
    {
        return this.role;
    }
}

module.exports = ObjManager;