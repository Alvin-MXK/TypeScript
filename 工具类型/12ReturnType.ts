function TestFn(name: string, age: number) {
    return name + '--' + age;
}

type Result = ReturnType<typeof TestFn>;
let a: Result = '789'