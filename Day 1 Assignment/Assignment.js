var countBs = function(str) {
    return str.match(/B/g).length;
};

var countChar = function(str, character) {

    var cmp = new RegExp(character, 'g');

    return str.match(cmp).length;
};

var countCharNew = function(str, character) {

    var count = 0;

    for(var i = 0; i < str.length; i++) {

        if(str[i] == character) count++;
    }

    return count;
};

//testcases
console.log(countBs("ABBBCCBBBA"));
//6

console.log(countChar("ABBBCCCBBBA", "C"));
//3

console.log(countCharNew("ABBBCCBBBBBBBA", 'B'));
//10

// 2nd task

var deepEqual = function(a, b) {

    if(a === b) {

        return true;

    } else if ((a!= null && typeof a === 'object') && (b != null && typeof b ==='object')) {

        if(Object.keys(a).length != Object.keys(b).length) {

            return false;
        }

        for(var prop in a) {

            if(b.hasOwnProperty(prop)) {
                if(! deepEqual(a[prop], b[prop]))  {

                    return false;
                } 
            } else {
                return false;
            }
        }
        return true;
        
    } else {

        return false;
    }   

}

//test cases
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 0}));
// → false
console.log(deepEqual(obj, {here: {is: "another"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {isnt: "an"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
//false