interface Person_1 {
    name?: string;
    age?: number;
    child?: {
        name?: string;
        age?: number;
    }
}

const person1: Person_1 = {
    name: 'axes'
}
type NewPerson = Required<Person_1>;
const newPerson: NewPerson = {
    name: 'axes',
    age: 27,
    child: {
        name: 'whx'
    },
}

// 自定义一个Required方法
type PowerRequired<T> = {
    // 如果是 object，则递归类型
    [U in keyof T]-?: T[U] extends object
        ? PowerRequired<T[U]>
        : T[U]
};
type NewPowerRequired = PowerRequired<Person_1>;
const newPerson_2: NewPowerRequired = {
    name: 'axes',
    age: 27,
    child: {
        name: 'whx'
    },
}