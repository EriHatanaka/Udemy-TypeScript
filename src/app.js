var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var userName = "Max";
var age = 30;
age = 29;
// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }
//アロー関数へ
// const add = (a: number, b: number = 1)=> a + b;
// const printOutoput: (output: string | number) => void = output => {
//   console.log(output);
// };
// printOutoput(add(2));
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) {
        console.log(event);
    });
}
//スプレッド演算子
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = __spreadArray(['Hiking'], hobbies, true);
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    name: 'Max',
    age: 30
};
var copiedPerson = __assign({}, person);
//レストパラメータ
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
//分割代入
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
