/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {

};

/** 
 * @param {number} x
 * @return {void}
 */
var MinStack = function() {
    this.items = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.items.push(+x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.items.length > 0) {
        return this.items.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.items.length > 0) {
        return this.items[this.items.length - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let arr = this.items.slice();
    return arr.sort((a, b) => a - b)[0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */