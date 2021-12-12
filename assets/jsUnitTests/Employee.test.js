const ObjEmployee = require('../jsObjects/ObjEmployee');

test('create an emp obj', () => {
    const employee = new ObjEmployee('John', 3, 'JohnDoe@gmail.com');
    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toContain('@');
});

test('get name', () => {
    const employee = new ObjEmployee('John', 3, 'JohnDoe@gmail.com');
    expect(employee.getName()).toBe('John');
});

test('get ID', () => {
    const employee = new ObjEmployee('John', 3, 'JohnDoe@gmail.com');
    expect(employee.getId()).toEqual(3);
});

test('get email', () => {
    const employee = new ObjEmployee('John', 3, 'JohnDoe@gmail.com');
    expect(employee.getEmail()).toBe('JohnDoe@gmail.com');
});

test('get emp', () => {
    const employee = new ObjEmployee('John', 3, 'JohnDoe@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});