const ObjManager = require('../jsObjects/ObjManager');

test('get office num', () => {
    const manager = new ObjManager('Schmuck', 2, 'RedStapler@officespace.com', 620);
    expect(manager.getOfficeN()).toBe(213);
});

test('get role', () => {
    const manager = new ObjManager('Schmuck', 2, 'RedStapler@officespace.com', 620);    
    expect(manager.getRole()).toBe('Manager');
});