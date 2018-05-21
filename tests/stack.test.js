/* eslint-disable no-undef, no-prototype-builtins */
const Stack = require('../src/stack');

let stack;

describe('Stack', () => {
  beforeEach(() => {
    stack = new Stack();
  });

  it('should have the methods "push", "pop", "peek", and the property "size"', () => {
    const hasPush = Object.getPrototypeOf(stack).hasOwnProperty('push');
    const hasPop = Object.getPrototypeOf(stack).hasOwnProperty('pop');
    const hasPeek = Object.getPrototypeOf(stack).hasOwnProperty('pop');
    const hasSize = Object.getPrototypeOf(stack).hasOwnProperty('size');
    expect(hasPush).toBe(true);
    expect(hasPop).toBe(true);
    expect(hasPeek).toBe(true);
    expect(hasSize).toBe(true);
  });

  it('should return a size of 0 for a new stack', () => {
    expect(stack.size).toBe(0);
  });

  it('should return a size of 10 after pushing 10 items to the stack', () => {
    stack.push(null);
    stack.push(null);
    stack.push(null);
    stack.push(null);
    stack.push(null);
    stack.push(null);
    stack.push(null);
    stack.push(null);
    stack.push(null);
    stack.push(null);
    expect(stack.size).toBe(10);
  });

  it('should not error when attempting to pop an item from an empty stack', () => {
    expect(stack.pop).toThrow(undefined);
  });

  it('should return a size of 0 after attempting to pop more items than were added', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.size).toBe(0);
  });

  it('should pop and return the top item', () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  it('should pop the most recent item added if multiple items added', () => {
    stack.push(true);
    stack.push('hi');
    stack.push(null);
    stack.push(77);
    expect(stack.pop()).toBe(77);
  });

  it('should respect the order with which elements are pushed', () => {
    stack.push(true);
    stack.push('hi');
    stack.push(null);
    stack.push(77);
    expect(stack.pop()).toBe(77);
    expect(stack.pop()).toBe(null);
    expect(stack.pop()).toBe('hi');
    expect(stack.pop()).toBe(true);
  });

  it('should return the most recently added element without removing it', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.size).toBe(3);
  });

  it('should return an error message when peek is used on an empty stack', () => {
    expect(stack.peek()).toBe('The stack is empty');
  });

  it('should return a the number of pops until you reach a certain value', () => {
    stack.push(2);
    stack.push(5);
    stack.push(7);
    stack.push(3);
    stack.push(6);
    stack.push(9);
    expect(stack.until(7)).toBe(4);
  });
});
