// const names: Array<string> = []; //string[]
// //names[0].split(' ');

// const promise: Promise<string> = new Promise<string>((resolve, reject) =>{
//   setTimeout(() =>{
//     resolve('Finished');
//   }, 2000);
// })

// promise.then(data => {
//   data.split(' ');
// })


//ジェネリック型関数と制約
function merge<T extends object, U extends object>(objA: T, objB: U){
  return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Max'}, {age: 30})
console.log(mergeObj.age);

interface Lengthy{
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
  let descriptionText = '値がありません。';
  if(element.length > 0){
    descriptionText = '値は' + element.length + '個です。'
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('お疲れ様です'))

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
  ){
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T){
    this.data.push(item);
  }

  removeItem(item: T){
    if(this.data.indexOf(item) === -1){
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);//-1
  }

  getItems(){
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Data1');
textStorage.addItem('Data2');
textStorage.removeItem('Data1');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const obj = {name: 'Max'}
// objStorage.addItem(obj);
// objStorage.addItem({name: 'Manu'});
// //...
// objStorage.removeItem(obj); //参照型だから正しく処理されない
// console.log(objStorage.getItems());
