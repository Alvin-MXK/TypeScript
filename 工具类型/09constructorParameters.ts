class Animal {
    constructor(name: string, age: number) {
        return {
            name,
            age
        };
    }
}
type Result = ConstructorParameters<typeof Animal>;
// type Result = [string, number]