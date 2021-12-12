const ObjEngineer = require('../jsObjects/ObjEngineer')

test('get github', () => {
    const engineer = new ObjEngineer('Jane', 4, 'JaneDoe@gmail.com', 'JanesGit');
    expect(engineer.getGithub()).toBe('JanesGit');
})

test('get role', () => {
    const engineer = new ObjEngineer('Jane', 4, 'JaneDoe@gmail.com');
    expect(engineer.getRole()).toBe('Engineer');
})