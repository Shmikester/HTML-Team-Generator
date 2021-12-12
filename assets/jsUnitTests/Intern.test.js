const ObjIntern = require('../jsObjects/ObjIntern')

test('get school', () => {
    const intern = new ObjIntern('Billy', 5, 'BillyBob@gmail.com', 'SlingBlade Uni');
    expect(intern.getSchool()).toBe('SlingBlade Uni');
})

test('get role', () => {
    const intern = new ObjIntern('Billy', 5, 'BillyBob@gmail.com');
    expect(intern.getRole()).toBe('Intern');
})