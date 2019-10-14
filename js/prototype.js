var SuperType = function(){};
var SubType = function(){};
var superIns = new SuperType();
SubType.prototype = superIns;
var instance = new SubType();

console.log()