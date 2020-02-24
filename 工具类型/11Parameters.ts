function TestFn(name: string, age: number) {
    return name + '--' + age;
}

type Result = Parameters<typeof TestFn>;
let a: Result = ['12', 12]