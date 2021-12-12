const inquirer = require('inquirer');
const ObjEngineer = require('./assets/jsObjects/ObjEngineer');
const ObjIntern = require('./assets/jsObjects/ObjIntern');
const ObjManager = require('./assets/jsObjects/ObjManager');
const htmlTemplate = require('./assets/templates/htmlTemplate');
const generateHTML = require('./assets/jsFunctions/generateHTML');

//team oject array
let team = {
    managers: [],
    interns: [],
    engineers: []
};

// manager info
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Invalid entry');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Invalid entry')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Invalid entry')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the managers office number?',
            validate: officeNumInput => {
                if(officeNumInput) {
                    return true;
                } else {
                    console.log('Invalid entry')
                    return false;
                }
            }
        }
    ])
    .then(data => {
        // create manager obj
        var manager = new ObjManager(data.name, data.id, data.email, data.officeNum);
        // add manager to the team
        team.managers.push(manager);
        return team;
    })
};

// team info
const promptTeam = () => {
    // add team member or complete
    return inquirer.prompt(
        {
            type: 'list',
            message: 'What position are you adding?',
            name: 'teamAdd',
            choices: ['Engineer', 'Intern', 'Done']
        }
    )
    .then(({ teamAdd }) => {
        // Getting Engineer data
        if(teamAdd === 'Engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your engineers name?',
                    validate: nameInput => {
                        if(nameInput) {
                            return true;
                        } else {
                            console.log('Invalid entry')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your engineers ID?',
                    validate: idInput => {
                        if(idInput) {
                            return true;
                        } else {
                            console.log('Invalid entry')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your engineers email?',
                    validate: emailInput => {
                        if(emailInput) {
                            return true;
                        } else {
                            console.log('Invalid entry')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your engineers github username?',
                    validate: githubInput => {
                        if(githubInput) {
                            return true;
                        } else {
                            console.log('Invalid entry')
                            return false;
                        }
                    }
                }
            ])
            .then((data) => {
                // create engineer obj
                var engineer = new ObjEngineer(data.name, data.id, data.email, data.github);
                // add engineer to the team
                team.engineers.push(engineer);
                return promptTeam();
            })
        } else if (teamAdd === 'Intern') {
            // intern info
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your interns name?',
                    validate: nameInput => {
                        if(nameInput) {
                            return true;
                        } else {
                            console.log('Invalid entry')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your interns ID?',
                    validate: idInput => {
                        if(idInput) {
                            return true;
                        } else {
                            console.log('Invalid entry')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your interns email?',
                    validate: emailInput => {
                        if(emailInput) {
                            return true;
                        } else {
                            console.log('Invalid entry')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is your interns school?',
                    validate: schoolInput => {
                        if(schoolInput) {
                            return true;
                        } else {
                            console.log('Invalid entry')
                            return false;
                        }
                    }
                }
            ])
            .then((data) => {
                // create intern obj
                var intern = new ObjIntern(data.name, data.id, data.email, data.school);
                // add intern to the team
                team.interns.push(intern);
                return promptTeam();
            })
        } else if(teamAdd === 'Done') {            
            return;
        }
    })
};

//start point, requests manager then builds the rest of the team
promptManager()
.then(() => {
    return promptTeam()
    .then(data => {
        return htmlTemplate(team);
    })
    .then(data => {
        return generateHTML(data);
    })
})
.catch(err => {
    console.log(err);
});