//Partial 属性全部变成可选属性
interface Person_1 {
    name: string;
    age: number;
}

const person1: Person_1 = {
    name: 'axes'
}
type NewPerson_1 = Partial<Person_1>;
const person2: NewPerson_1 = {
    name: 'axes'
}

// Partial有个局限性 只支持处理第一层的属性
interface Person {
    name: string;
    age: number;
    child: {
        name: string;
        age: number;
    }
}
type NewPerson = Partial<Person>;

const person_3: NewPerson = {
    name: 'axes',
    child: {
        name: 'whx'
    },
}

// 自定义一个Partial方法
type PowerPartial<T> = {
    // 如果是 object，则递归类型
    [U in keyof T]?: T[U] extends object
        ? PowerPartial<T[U]>
        : T[U]
};

type NewPowerPartial = PowerPartial<Person>;
const newPerson: NewPowerPartial = {
    name: 'axes',
    child: {
        name: 'whx'
    },
}
