const ObjManager = require('../jsObjects/ObjManager');

test('get office num', () =>
{
    const manager = new ObjManager('Schmuck', 2, 'RedStapler@officespace.com', 620);
    expect(manager.getOfficeNum()).toBe(620);
});

test('get role', () =>
{
    const manager = new ObjManager('Schmuck', 2, 'RedStapler@officespace.com', 620);
    expect(manager.getRole()).toBe('Manager');
});