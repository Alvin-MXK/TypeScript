type Result = Exclude<string | number, string>;
let a: Result = 1

type Result1 = Exclude<"1" | "2", "2" | "3">;
let a1: Result1 = '1'

// 只能用于从并类型(Type1|Type2)中剔除其中的类型。不支持更加精确的剔除（比如从string里剔除'1'）
type Result2 = Exclude<string, '1'>;
let a2: Result2 = '1'

type Result3 = Exclude<{a: string | number, b: number}, {a: number}>;
let a3: Result3 = {
    a: 45,
    b: 78,
}

// 在我们给 js 写声明的时候，经常会遇到我们需要 extend 某个接口，但是我们又需要在新接口中将某个属性重载，但是这样经常会遇到类型兼容性问题
interface Person {
    id: string;
    name: string;
}
interface NewPerson extends Person {
    id: number;
}

// 使用Pick，可以把我们需要的类型挑出来，那就可以这样
// interface NewPerson extends Pick<Person, 'name'> {
//     id: number;
// }

// 当接口的属性过多时，我们可以使用Exclude，就可以拿到除 id 之外的所有属性
// interface NewPerson extends Pick<Person, Exclude<keyof Person, 'id'>> {
//     id: number;
// }

