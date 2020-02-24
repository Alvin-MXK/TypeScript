let obj = {
    a: 1,
    b: 2,
    c: 3,
};
// function getValue(obj: any,keys: string[]){
//     return keys.map(key => obj[key]);
// }
// console.log(getValue(obj,["a","b"]));
// console.log(getValue(obj,["c","f"]));

// 使用索引类型
function getValue<T,K extends keyof T>(obj: T, keys: K[]): T[K][] { // T[k][]表示，返回值必须是obj中的值组成的列表
    return keys.map(key => obj[key]); // 此时keys中的元素只能是obj中的键
}
console.log(getValue(obj,["a","b"]));
console.log(getValue(obj,["c","f"]));