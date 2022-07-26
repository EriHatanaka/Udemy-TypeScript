// const names: Array<string> = []; //string[]
// //names[0].split(' ');
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const promise: Promise<string> = new Promise<string>((resolve, reject) =>{
//   setTimeout(() =>{
//     resolve('Finished');
//   }, 2000);
// })
// promise.then(data => {
//   data.split(' ');
// })
//ジェネリック型関数と制約
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    var descriptionText = '値がありません。';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です。';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('お疲れ様です'));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //-1
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Data1');
textStorage.addItem('Data2');
textStorage.removeItem('Data1');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
// const objStorage = new DataStorage<object>();
// const obj = {name: 'Max'}
// objStorage.addItem(obj);
// objStorage.addItem({name: 'Manu'});
// //...
// objStorage.removeItem(obj); //参照型だから正しく処理されない
// console.log(objStorage.getItems());
