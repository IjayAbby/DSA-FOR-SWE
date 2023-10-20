/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stk=[]
    this.stk.push(nestedList)
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    let stk=this.stk
    if(stk.length<=0)
        return false
    if(stk[stk.length-1].length<=0){
        stk.pop();
        return this.hasNext()
    }
    if(stk[stk.length-1][0].isInteger())
        return true
    else{
        let x=((stk[stk.length-1].splice(0,1)[0]))
        stk.push(x.getList())
        return this.hasNext()
    }
    return false
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    let stk=this.stk
    if(stk[stk.length-1][0].isInteger()){
        let res=stk[stk.length-1].splice(0,1)[0]        
        return res.getInteger()
    }
    else{
        let x=((stk[stk.length-1].splice(0,1)[0]))
        stk.push(x.getList())
        return this.next()
    }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/