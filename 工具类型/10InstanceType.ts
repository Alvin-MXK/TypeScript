class Animal {
    constructor(name: string, age: number) {
        return {
            name,
            age
        };
    }
}
type Result = InstanceType<typeof Animal>;
// type Result = Animal

let a: Result = new Animal('QQ',1)